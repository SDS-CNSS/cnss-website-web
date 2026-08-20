import { NextResponse } from "next/server";

const STRAPI_API_URL = process.env.STRAPI_API_URL;
// Token dédié, distinct de STRAPI_API_TOKEN (lib/strapi/client.ts) : celui-ci
// n'a que les permissions upload + contact-submission.create, jamais les
// permissions de lecture utilisées par le reste du site (voir .env.local).
const STRAPI_CONTACT_API_TOKEN = process.env.STRAPI_CONTACT_API_TOKEN;

// Proxy plutôt qu'appel direct depuis le client : évite d'exposer l'URL Strapi
// et le token au navigateur, et centralise la validation ici.
export async function POST(request: Request) {
  if (!STRAPI_API_URL) {
    return NextResponse.json({ error: "Configuration serveur manquante." }, { status: 500 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const subject = formData.get("subject");
  const contactPoint = formData.get("contactPoint");
  const message = formData.get("message");
  const files = formData.getAll("attachments").filter(
    (entry): entry is File => entry instanceof File && entry.size > 0,
  );

  const requiredStrings = { fullName, email, subject, contactPoint, message };
  const missing = Object.entries(requiredStrings).some(
    ([, value]) => typeof value !== "string" || value.trim() === "",
  );
  if (missing) {
    return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
  }

  try {
    let attachmentIds: number[] | undefined;

    if (files.length > 0) {
      if (!STRAPI_CONTACT_API_TOKEN) {
        return NextResponse.json(
          { error: "L'envoi de pièces jointes n'est pas disponible actuellement." },
          { status: 503 },
        );
      }

      const uploadForm = new FormData();
      for (const file of files) {
        uploadForm.append("files", file, file.name);
      }

      const uploadRes = await fetch(`${STRAPI_API_URL}/api/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${STRAPI_CONTACT_API_TOKEN}` },
        body: uploadForm,
      });

      if (!uploadRes.ok) {
        return NextResponse.json({ error: "Échec de l'envoi des pièces jointes." }, { status: 502 });
      }

      const uploaded = (await uploadRes.json()) as { id: number }[];
      attachmentIds = uploaded.map((file) => file.id);
    }

    const res = await fetch(`${STRAPI_API_URL}/api/contact-submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(STRAPI_CONTACT_API_TOKEN ? { Authorization: `Bearer ${STRAPI_CONTACT_API_TOKEN}` } : {}),
      },
      body: JSON.stringify({
        data: {
          fullName: (fullName as string).trim(),
          email: (email as string).trim(),
          phone: typeof phone === "string" && phone.trim() ? phone.trim() : undefined,
          subject: (subject as string).trim(),
          contactPoint: (contactPoint as string).trim(),
          message: (message as string).trim(),
          attachments: attachmentIds,
        },
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Échec de l'envoi du message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Échec de l'envoi du message." }, { status: 502 });
  }
}
