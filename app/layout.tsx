import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import ConditionalAppDownloadSection from "./components/ConditionalAppDownloadSection";
import FooterSection from "./components/FooterSection";

// Load Euclid locally
const freeset = localFont({
  src: "../public/fonts/Euclid-Circular-A-Regular.ttf",
  display: "swap",
});

// Load Freizeit as a CSS variable for headers
const freizeit = localFont({
  src: "../public/fonts/FreizeitTrial-Regular.otf",
  variable: "--font-freizeit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MyStash",
  description: "MyStash - Personal Financial Management",
  icons: {
    icon: "/logo/mystashlogo.svg",
    apple: "/logo/mystashlogo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${freeset.className} ${freizeit.variable}`}>
        <Navbar />
        <main className="main-scope">{children}</main>
        <ConditionalAppDownloadSection />
        <FooterSection />
      </body>
    </html>
  );
}
