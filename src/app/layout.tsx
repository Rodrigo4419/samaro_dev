import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { generateSchema } from "@/lib/schema";
import styles from "./page.module.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samaro-dev.vercel.app"),
  title: "Samaro-dev | Frontend development services",
  description: "Frontend-focused web development services. Bring your professional projects to life with my web development and consulting services.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    type: "website",
    title: "Frontend Developer based in Mexico",
    description: "Custom websites four your personal and proffesional proyects",
    siteName:"samaro-dev",
    images: [
      {
        url: "/meta-img.png",
        width: 1200,
        height: 630,
        alt: "Samaro Dev frontend development solutions - Rodrigo Mtz.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Frontend Developer",
    description: "Custom websites four your personal and proffesional proyects",
    creator: "Rodrigo Martínez",
    images: ["/meta-img.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = JSON.stringify(generateSchema()).replace(/</g, "\\u003c");
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.backgroundGradient} />
        <main className={`${styles.page} ${styles.main}`}>{children}</main>
      </body>
    </html>
  );
}
