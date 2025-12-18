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
  const buttonClasses = 'flex items-center space-x-2 px-4 py-2 text-base font-medium rounded-full transition-colors duration-200 border-transparent';

  const ContactButton = () => (
    <Link 
      href={contactHref} 
      className={`${buttonClasses} bg-purple-100 text-purple-700 hover:bg-purple-200`}
      onClick={onButtonClick}
    >
      <img
        src={contactIcon}
        alt="Contact Us icon"
        className="w-7 h-7"
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
      className={`${buttonClasses} bg-purple-500 text-white hover:bg-purple-800`}
      onClick={onButtonClick}
    >
      <img
        src={downloadIcon}
        alt="Download app icon"
        className="w-7 h-7"
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
      <div className="space-y-3">
        <ContactButton />
        <DownloadButton />
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-3">
      <ContactButton />
      <DownloadButton />
    </div>
  );
};

export default NavButtons;