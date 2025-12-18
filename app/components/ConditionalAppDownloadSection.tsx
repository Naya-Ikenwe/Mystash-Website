// components/ConditionalAppDownloadSection.tsx
"use client";

import { usePathname } from "next/navigation";
import AppDownloadSection from "./AppDownloadSection";

const ConditionalAppDownloadSection = () => {
  const pathname = usePathname();
  
  // Debug: Log the pathname to console (optional, remove after testing)
  // console.log("Current pathname:", pathname);
  
  // ONLY these specific pages get the full section with logos/header
  const showHeaderAndLogos = 
    pathname === "/" || // Main home page
    pathname === "/home" || // Alternative home route
    pathname === "/business" || // Business home page
    pathname === "/business/home" || // Business home alternative
    pathname.includes("/business/home"); // More flexible check
  
  // All other pages get the minimal version (no logos/header)
  return <AppDownloadSection showHeaderAndLogos={showHeaderAndLogos} />;
};

export default ConditionalAppDownloadSection;