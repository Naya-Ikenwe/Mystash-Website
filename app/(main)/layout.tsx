// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "../globals.css";
import Navbar from "../components/Navbar";
import AppDownloadSection from "../components/AppDownloadSection";
import FooterSection from "../components/FooterSection";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyStash Financial App",
  description: "A financial tool that makes your money work for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <AppDownloadSection />
        <FooterSection />
      </body>
    </html>
  );
}