import type { Metadata } from "next";
import { Bricolage_Grotesque, Sora } from "next/font/google";
import "./globals.css";
import { config } from "@/data/config";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import AppOverlays from "@/components/app-overlays";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: {
    default: "Abdelkbir Nainiaa - Software Engineer | Creative Technologist",
    template: "%s | Abdelkbir Nainiaa",
  },
  description: "Abdelkbir Nainiaa's portfolio, a creative technologist & software engineer specializing in interactive web experiences, 3D animations, and innovative projects.",
  keywords: config.keywords,
  authors: [{ name: config.author, url: config.site }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: config.site,
  },
  openGraph: {
    title: "Abdelkbir Nainiaa - Software Engineer | Creative Technologist",
    description: "Explore the portfolio of Abdelkbir Nainiaa, a software engineer and creative technologist specializing in interactive web experiences and 3D animations.",
    url: config.site,
    siteName: "Abdelkbir Nainiaa's Portfolio",
    images: [
      {
        url: `${config.site}assets/me.JPG`,
        width: 1200,
        height: 630,
        alt: "Abdelkbir Nainiaa - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelkbir Nainiaa - Software Engineer | Creative Technologist",
    description: "Explore the portfolio of Abdelkbir Nainiaa, a software engineer and creative technologist specializing in interactive web experiences and 3D animations.",
    images: [`${config.site}assets/me.JPG`],
    creator: "@" + config.social.twitter,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: `${config.site}site.webmanifest`,
};

const sans = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Abdelkbir Nainiaa's Portfolio",
    url: config.site,
    author: {
      "@type": "Person",
      name: "Abdelkbir Nainiaa",
      url: config.site,
      jobTitle: "Software Engineering Student",
      worksFor: {
        "@type": "Organization",
        name: "ENSIASD",
      },
      sameAs: [
        config.social.linkedin,
        config.social.github,
        config.social.twitter,
        config.social.instagram,
      ],
    },
  };

  return (
    <html
      lang="en"
      className={[sans.variable, display.variable, "font-display"].join(" ")}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          defer
          src={process.env.UMAMI_DOMAIN}
          data-website-id={process.env.UMAMI_SITE_ID}
        ></Script>
      </head>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
          <AppOverlays />
        </Providers>
      </body>
    </html>
  );
}
