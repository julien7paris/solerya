import type { Metadata } from "next";
import { Geist } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solerya | Bien vieillir à domicile",
  description:
    "Les meilleures technologies connectées pour préserver l'autonomie des seniors et rassurer leurs proches.",

  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={geist.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}