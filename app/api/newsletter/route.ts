import { NextResponse } from "next/server";

const STRAPI_API_URL = process.env.STRAPI_API_URL;
// Token dédié, distinct de STRAPI_API_TOKEN (lib/strapi/client.ts) et de
// STRAPI_CONTACT_API_TOKEN : celui-ci n'a que la permission
// newsletter-subscriber.create, jamais les permissions de lecture utilisées
// par le reste du site (voir .env.example).
const STRAPI_NEWSLETTER_API_TOKEN = process.env.STRAPI_NEWSLETTER_API_TOKEN;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Proxy plutôt qu'appel direct depuis le client : évite d'exposer l'URL
// Strapi et le token au navigateur, même schéma que /api/contact.
export async function POST(request: Request) {
  if (!STRAPI_API_URL) {
    return NextResponse.json({ error: "Configuration serveur manquante." }, { status: 500 });
  }

  let body: { firstName?: unknown; email?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const firstName = typeof body.firstName === "string" ? body.firstName.trim() : "";

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  try {
    const res = await fetch(`${STRAPI_API_URL}/api/newsletter-subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(STRAPI_NEWSLETTER_API_TOKEN ? { Authorization: `Bearer ${STRAPI_NEWSLETTER_API_TOKEN}` } : {}),
      },
      body: JSON.stringify({
        data: {
          email,
          firstName: firstName || undefined,
        },
      }),
    });

    if (res.status === 400 || res.status === 409) {
      // Contrainte d'unicité sur `email` : déjà abonné (actif ou désabonné).
      return NextResponse.json({ error: "already-subscribed" }, { status: 409 });
    }

    if (!res.ok) {
      return NextResponse.json({ error: "Échec de l'inscription." }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Échec de l'inscription." }, { status: 502 });
  }
}
