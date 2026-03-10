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
  metadataBase: new URL("https://mystashapp.com"),
  title: {
    default: "MyStash | Save, Invest, Borrow and Pay Smarter",
    template: "%s | MyStash",
  },
  description:
    "MyStash helps you save, invest, access loans, manage payments, and build better financial habits with confidence.",
  applicationName: "MyStash",
  category: "finance",
  keywords: [
    "MyStash",
    "myStash",
    "fintech Nigeria",
    "savings app",
    "investment platform",
    "loans",
    "payments",
    "budgeting",
    "personal finance",
    "wealth management",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "MyStash | Save, Invest, Borrow and Pay Smarter",
    description:
      "Save, invest, access loans, manage payments, and build better financial habits with MyStash.",
    url: "https://mystashapp.com",
    siteName: "MyStash",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/purplebackground.jpg",
        width: 1200,
        height: 630,
        alt: "MyStash financial services preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyStash | Save, Invest, Borrow and Pay Smarter",
    description:
      "Save, invest, access loans, manage payments, and build better financial habits with MyStash.",
    images: ["/images/purplebackground.jpg"],
  },
  icons: {
    icon: "/logo/mystashlogo.svg",
    shortcut: "/logo/mystashlogo.svg",
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
