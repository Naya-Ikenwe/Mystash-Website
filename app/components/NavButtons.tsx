// components/NavButtons.tsx
"use client";

import Link from "next/link";
import React from "react";

interface NavButtonsProps {
  contactIcon?: string;
  downloadIcon?: string;
  contactHref?: string;
  downloadHref?: string;
  mobile?: boolean;
  onButtonClick?: () => void;
}

const NavButtons = ({
  contactIcon = "/icons/Frame6.svg",
  downloadIcon = "/icons/Frame5.svg",
  contactHref = "/contact",
  downloadHref = "/download",
  mobile = false,
  onButtonClick
}: NavButtonsProps) => {
  // Responsive button classes - optimized for all breakpoints
  const buttonClasses = 'flex items-center justify-center space-x-1 md:space-x-2 px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base font-medium rounded-full transition-colors duration-200 border-transparent whitespace-nowrap';
  
  // Responsive icon sizes
  // Mobile: w-5 h-5, Tablet: w-6 h-6, Desktop: w-7 h-7
  const iconClasses = "w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7";

  const ContactButton = () => (
    <Link 
      href={contactHref} 
      className={`${buttonClasses} bg-purple-100 text-purple-700 hover:bg-purple-200 w-full md:w-auto`}
      onClick={onButtonClick}
    >
      <img
        src={contactIcon}
        alt="Contact Us icon"
        className={iconClasses}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "https://placehold.co/16x16/7C3AED/FFFFFF?text=C";
        }}
      />
      <span>Contact Us</span>
    </Link>
  );

  const DownloadButton = () => (
    <Link 
      href={downloadHref} 
      className={`${buttonClasses} bg-purple-500 text-white hover:bg-purple-800 w-full md:w-auto`}
      onClick={onButtonClick}
    >
      <img
        src={downloadIcon}
        alt="Download app icon"
        className={iconClasses}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "https://placehold.co/16x16/FFFFFF/7C3AED?text=D";
        }}
      />
      <span>Download app</span>
    </Link>
  );

  if (mobile) {
    return (
      <div className="space-y-2 md:space-y-3 w-full">
        <ContactButton />
        <DownloadButton />
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-3 xl:space-x-3">
      <ContactButton />
      <DownloadButton />
    </div>
  );
};

export default NavButtons;