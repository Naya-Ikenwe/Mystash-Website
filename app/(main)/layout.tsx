// app/layout.tsx
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "../components/Navbar";
import AppDownloadSection from "../components/AppDownloadSection";
import FooterSection from "../components/FooterSection";

// Load Euclid locally (existing)
const freeset = localFont({
  src: "../../public/fonts/Euclid-Circular-A-Regular.ttf",
  display: "swap",
});

// Load Freizeit as a CSS variable so we can apply it only to headers
const freizeit = localFont({
  src: "../../public/fonts/FreizeitTrial-Regular.otf",
  variable: "--font-freizeit",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${freeset.className} ${freizeit.variable}`}>
        <Navbar />
        <main className="main-scope">{children}</main>
        <AppDownloadSection />
        <FooterSection />
      </body>
    </html>
  );
}
