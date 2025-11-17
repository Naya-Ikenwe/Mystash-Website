// app/layout.tsx

import type { Metadata } from "next";
// --- Import Inter font ---
import { Inter } from "next/font/google"; 

// import { Geist, Geist_Mono } from "next/font/google"; // Geist is commented out
import "./globals.css";
import Navbar from "./components/Navbar";

// --- 1. Define Inter Font ---
const inter = Inter({
  variable: "--font-inter", // Using a variable name related to Inter
  subsets: ["latin"],
});


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "MyStash Financial App", // Updated title placeholder
  description: "A financial tool that makes your money work for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // --- 2. Apply Inter font class to the <body> tag ---
    <html lang="en">
  <body className={inter.className}>
        {/* Render the Navbar component above the page content */}
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}