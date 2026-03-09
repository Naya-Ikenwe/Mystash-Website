// app/layout.tsx
import localFont from "next/font/local";
import "../globals.css";

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

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}