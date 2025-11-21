"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import NavButtons from './NavButtons';

// --- CONFIGURATION & DUMMY PATHS ---
const DUMMY_LOGO_PATH = '/logo/mystashlogo.svg'; 

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
  href: string;
  tag?: string; 
}

const DROPDOWN_ITEMS: DropdownItem[] = [
  { 
    iconPath: DUMMY_DROPDOWN_ICON_1, 
    title: 'Payments', 
    subtitle: 'Seamless Payments',
    href: '/payments' 
  },
  { 
    iconPath: DUMMY_DROPDOWN_ICON_2, 
    title: 'Savings', 
    subtitle: 'Save in USD or NGN',
    href: '/savings' 
  },
  { 
    iconPath: DUMMY_DROPDOWN_ICON_3, 
    title: 'Budget', 
    subtitle: 'Simplify your spending',
    href: '/budget' 
  },
  { 
    iconPath: DUMMY_DROPDOWN_ICON_4, 
    title: 'Loan', 
    subtitle: 'Grow your health with us', 
    href: '/loans',
    tag: 'Newly updated' 
  },
  { 
    iconPath: DUMMY_DROPDOWN_ICON_5, 
    title: 'Investments', 
    subtitle: 'Build smarter wealth', 
    href: '/investments',
    tag: 'Newly updated' 
  },
];

// --- REUSABLE COMPONENTS ---

// 1. Regular Nav Link with PILL HOVER Effect
const NavLink = ({ text, hasPlus = false, mobile = false, onClick, href = "#" }: { text: string; hasPlus?: boolean; mobile?: boolean; onClick?: () => void; href?: string }) => {
  const baseClasses = mobile 
    ? "block text-gray-700 font-medium text-base p-3 transition-colors duration-150 hover:text-purple-700 hover:bg-purple-100 rounded-lg cursor-pointer"
    : "text-gray-700 font-medium text-sm p-2 transition-colors duration-150 hover:text-purple-700 hover:bg-purple-100 rounded-full cursor-pointer";

  return (
    <Link
      href={href}
      className={baseClasses}
      onClick={onClick}
    >
      {text}
      {hasPlus && <span className="ml-1 font-bold">+</span>}
    </Link>
  );
};

// 2. Dropdown Content Menu
const DropdownMenu = ({ mobile = false, onItemClick }: { mobile?: boolean; onItemClick?: () => void }) => {
  if (mobile) {
    return (
      <div className="mt-2 ml-4 space-y-1 border-l-2 border-gray-100 pl-4">
        {DROPDOWN_ITEMS.map((item) => (
          <Link 
            key={item.title}
            href={item.href}
            className="flex items-center space-x-3 p-3 rounded-lg transition-colors duration-150 hover:bg-gray-50 cursor-pointer"
            onClick={onItemClick}
          >
            <img src={item.iconPath} alt="" className="w-5 h-5 shrink-0" />
            <div className="flex grow justify-start items-center">
              <div className="leading-snug mr-3">
                <p className="font-bold text-gray-800 text-sm">{item.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{item.subtitle}</p>
              </div>
              {item.tag && (
                <span className="shrink-0 text-xs font-medium text-yellow-700 bg-yellow-200 px-2 py-0.5 rounded-full">
                  {item.tag}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-82 md:w-130 bg-white shadow-2xl rounded-xl border border-gray-100 p-4 z-40">
      <ul className="space-y-2">
        {DROPDOWN_ITEMS.map((item) => (
          <li key={item.title}>
            <Link 
              href={item.href}
              className="block p-3 rounded-lg transition-colors duration-150 hover:bg-gray-50 cursor-pointer"
              onClick={onItemClick}
            >
              <div className="flex items-center space-x-3">
                <img src={item.iconPath} alt="" className="w-5 h-5 shrink-0" />
                <div className="flex grow justify-start items-center">
                  <div className="leading-snug mr-3">
                    <p className="font-bold text-gray-800 text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.subtitle}</p>
                  </div>
                  {item.tag && (
                    <span className="shrink-0 text-xs font-medium text-yellow-700 bg-yellow-200 px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 3. Dropdown Link Wrapper (Desktop)
const DropdownLink = ({ text, hasPlus = false }: { text: string; hasPlus?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const linkClasses = `
    text-gray-700 font-medium text-sm p-2 transition-colors duration-150 
    hover:text-purple-700 hover:bg-purple-100
    rounded-full cursor-pointer 
    ${isOpen ? 'bg-purple-100 text-purple-700' : ''}
  `;

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={linkClasses}>
        {text}
        {hasPlus && <span className="ml-1 font-bold">+</span>}
      </div>
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-full pt-2 z-40">
          <DropdownMenu />
        </div>
      )}
    </div>
  );
};

// 4. Mobile Dropdown Link
const MobileDropdownLink = ({ text, hasPlus = false }: { text: string; hasPlus?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-gray-700 font-medium text-base p-3 transition-colors duration-150 hover:text-purple-700 hover:bg-purple-100 rounded-lg cursor-pointer flex justify-between items-center"
      >
        <span>
          {text}
          {hasPlus && <span className="ml-1 font-bold">+</span>}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <DropdownMenu mobile onItemClick={() => setIsOpen(false)} />}
    </div>
  );
};

// 5. Hamburger Menu Button
const HamburgerButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="p-2 rounded-md text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200 md:hidden"
    aria-label="Toggle menu"
  >
    <div className="w-6 h-6 flex flex-col justify-center items-center">
      <span className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`} />
      <span className={`block h-0.5 w-6 bg-current transition-all duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
      <span className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`} />
    </div>
  </button>
);

// --- MAIN NAVBAR COMPONENT ---
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src={DUMMY_LOGO_PATH} 
                alt="Site Logo" 
                className="w-34 h-10 object-contain" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <DropdownLink text="Personal" hasPlus /> 
            <NavLink text="Business" hasPlus />
            <NavLink text="About Us" />
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <NavButtons />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <HamburgerButton 
              isOpen={isMobileMenuOpen} 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              <MobileDropdownLink text="Personal" hasPlus />
              <NavLink text="Business" hasPlus mobile onClick={closeMobileMenu} />
              <NavLink text="About Us" mobile onClick={closeMobileMenu} />
              
              {/* Mobile Buttons */}
              <div className="pt-4 space-y-3 border-t border-gray-100 md:hidden">
                <NavButtons mobile onButtonClick={closeMobileMenu} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}