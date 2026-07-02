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
    "Solerya sélectionne les meilleures technologies connectées pour protéger les seniors, préserver leur autonomie et rassurer leurs proches.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
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
      <body className={`${geist.className} bg-white text-[#08122E] antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}