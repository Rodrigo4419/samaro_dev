import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/header/Header";
import Stars from "@/components/common/Stars";
import Footer from "@/components/layout/footer/Footer";
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
  metadataBase: new URL("https://spacexmissioncontrol.vercel.app"),
  title: "SamaroDev",
  description:
    "Frontend developer for personal and professional projects",

  openGraph: {
    url: "",
    type: "website",
    title: "Frontend Developer based in Mexico",
    description:
      "Custom websites four your personal and proffesional proyects",
    images: [
      {
        url: "/proyectScreens/meta-img.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Frontend Developer",
    description:
      "Custom websites four your personal and proffesional proyects",
      creator:"Rodrigo Martínez",
    images: [
      "/proyectScreens/meta-img.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <Stars />
        <div className={styles.backgroundGradient} />
        <main className={`${styles.page} ${styles.main}`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
