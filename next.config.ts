import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
    // Strapi tourne en local (loopback) en dev — Next 16 bloque par défaut
    // l'optimisation d'images dont l'hôte résout vers une IP privée (garde
    // anti-SSRF). Sans danger ici puisque c'est notre propre Strapi local.
    // À retirer une fois Strapi hébergé sur un vrai domaine en prod.
    dangerouslyAllowLocalIP: true,
  },
};

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);
