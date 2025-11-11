"use client";

import Link from 'next/link';
import React, { useState } from 'react';

// --- CONFIGURATION & DUMMY PATHS ---
const DUMMY_LOGO_PATH = '/logo/mystashlogo.svg'; 
const DUMMY_ICON_PATH_1 = '/icons/Frame6.svg'; 
const DUMMY_ICON_PATH_2 = '/icons/Frame5.svg'; 

const DUMMY_DROPDOWN_ICON_1 = '/icons/navdropdown1.svg';
const DUMMY_DROPDOWN_ICON_2 = '/icons/navdropdown2.svg';
const DUMMY_DROPDOWN_ICON_3 = '/icons/navdropdown3.svg';
const DUMMY_DROPDOWN_ICON_4 = '/icons/navdropdown4.svg';
const DUMMY_DROPDOWN_ICON_5 = '/icons/navdropdown5.svg';


// --- DATA STRUCTURES for the 5-Item Dropdown Menu ---

interface DropdownItem {
  iconPath: string;
  title: string;
  subtitle: string;
  tag?: string; 
}

const DROPDOWN_ITEMS: DropdownItem[] = [
  { iconPath: DUMMY_DROPDOWN_ICON_1, title: 'Payments', subtitle: 'Seamless Payments' },
  { iconPath: DUMMY_DROPDOWN_ICON_2, title: 'Savings', subtitle: 'Save in USD or NGN' },
  { iconPath: DUMMY_DROPDOWN_ICON_3, title: 'Budget', subtitle: 'Simplify your spending' },
  { iconPath: DUMMY_DROPDOWN_ICON_4, title: 'Loan', subtitle: 'Grow your health with us', tag: 'Newly updated' },
  { iconPath: DUMMY_DROPDOWN_ICON_5, title: 'Investments', subtitle: 'Build smarter wealth', tag: 'Newly updated' },
];


// --- REUSABLE COMPONENTS ---

// 1. Regular Nav Link with PILL HOVER Effect (UPDATED BG COLOR)
const NavLink = ({ text, hasPlus = false }: { text: string; hasPlus?: boolean }) => (
  <a
    href="#"
    className="
      text-gray-700 font-medium text-sm p-2 transition-colors duration-150 
      hover:text-purple-700 hover:bg-purple-100 // 👈 UPDATED COLOR
      rounded-full cursor-pointer 
    "
  >
    {text}
    {hasPlus && <span className="ml-1 font-bold">+</span>}
  </a>
);

// 2. Dropdown Content Menu (UPDATED TAG POSITION)
const DropdownMenu = () => (
    <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-82 md:w-130 bg-white shadow-2xl rounded-xl border border-gray-100 p-4 z-40">
        <ul className="space-y-2">
            {DROPDOWN_ITEMS.map((item) => (
                <li 
                    key={item.title} 
                    className="block p-3 rounded-lg transition-colors duration-150 hover:bg-gray-50 cursor-pointer"
                >
                    <div className="flex items-center space-x-3">
                        {/* 1. Icon on the left */}
                        <img src={item.iconPath} alt="" className="w-5 h-5 shrink-0" />
                        
                        {/* 2. Title/Subtitle stack with tag alignment */}
                        <div className="flex grow justify-start items-center"> {/* 👈 Removed justify-between */}
                            <div className="leading-snug mr-3"> {/* 👈 Added right margin to create space */}
                                {/* Bold Title */}
                                <p className="font-bold text-gray-800 text-sm">{item.title}</p>
                                {/* Normal Subtitle */}
                                <p className="text-xs text-gray-500 mt-0.5">{item.subtitle}</p>
                            </div>
                            
                            {/* 3. Yellowish Pill/Tag (Now positioned right next to text stack) */}
                            {item.tag && (
                                <span className="shrink-0 text-xs font-medium text-yellow-700 bg-yellow-200 px-2 py-0.5 rounded-full">
                                    {item.tag}
                                </span>
                            )}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

// 3. Dropdown Link Wrapper (Handles Hover State - UPDATED BG COLOR)
const DropdownLink = ({ text, hasPlus = false }: { text: string; hasPlus?: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    // Classes for the link itself, using the pill styling when open
    const linkClasses = `
        text-gray-700 font-medium text-sm p-2 transition-colors duration-150 
        hover:text-purple-700 hover:bg-purple-100 // 👈 UPDATED COLOR
        rounded-full cursor-pointer 
        ${isOpen ? 'bg-purple-100 text-purple-700' : ''} // 👈 UPDATED COLOR
    `;

    return (
        <div 
            className="relative"
            onMouseEnter={() => setIsOpen(true)} 
            onMouseLeave={() => setIsOpen(false)}
        >
            <a href="#" className={linkClasses}>
                {text}
                {hasPlus && <span className="ml-1 font-bold">+</span>}
            </a>
            {isOpen && <DropdownMenu />}
        </div>
    );
};


// 4. Pill Buttons (UPDATED BG COLOR)
const IconButton = ({
  iconPath,
  text,
  buttonStyle = 'primary', 
}: {
  iconPath: string;
  text: string;
  buttonStyle?: 'primary' | 'secondary';
}) => {
  let buttonClasses = 'flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 border-transparent';

  if (buttonStyle === 'primary') {
    // 1st Button: Light Purple BG, Purple Text
    buttonClasses += ' bg-purple-100 text-purple-700 hover:bg-purple-200'; // 👈 UPDATED COLOR
  } else if (buttonStyle === 'secondary') {
    // 2nd Button: Solid Purple BG, White Text
    buttonClasses += ' bg-purple-700 text-white hover:bg-purple-800';
  }

  return (
    <button className={buttonClasses}>
      <img
          src={iconPath}
          alt={`${text} icon`}
          className="w-4 h-4" 
      />
      <span>{text}</span>
    </button>
  );
};

// --- MAIN NAVBAR COMPONENT ---

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* 1. Left Section (Logo) */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src={DUMMY_LOGO_PATH} 
                alt="Site Logo" 
                className="w-34 h-10 object-contain" 
              />
            </Link>
          </div>

          {/* 2. Center Section (Navigation Links) */}
          <div className="hidden md:flex space-x-6 items-center">
            <DropdownLink text="Personal" hasPlus /> 
            <NavLink text="Business" hasPlus />
            <NavLink text="About Us" />
          </div>

          {/* 3. Right Section (Pill Buttons) */}
          <div className="flex items-center space-x-3">
            <IconButton 
              iconPath={DUMMY_ICON_PATH_1} 
              text="Contact Us" 
              buttonStyle="primary" 
            />
            <IconButton 
              iconPath={DUMMY_ICON_PATH_2} 
              text="Download app" 
              buttonStyle="secondary" 
            />
          </div>
        </div>
      </div>
    </nav>
  );
}