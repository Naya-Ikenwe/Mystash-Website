"use client";

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import NavButtons from './NavButtons';

// --- CONFIGURATION & DUMMY PATHS ---
const DUMMY_LOGO_PATH = '/logo/mystashlogo.svg'; 

const DUMMY_DROPDOWN_ICON_1 = '/icons/navdropdown1.svg';
const DUMMY_DROPDOWN_ICON_2 = '/icons/navdropdown2.svg';
const DUMMY_DROPDOWN_ICON_3 = '/icons/navdropdown3.svg';
const DUMMY_DROPDOWN_ICON_4 = '/icons/navdropdown4.svg';
const DUMMY_DROPDOWN_ICON_5 = '/icons/navdropdown5.svg';

// Business dropdown icons
const DUMMY_BUSINESS_ICON_1 = '/icons/businesshome.svg';
const DUMMY_BUSINESS_ICON_2 = '/icons/navdropdown2.svg';
const DUMMY_BUSINESS_ICON_3 = '/icons/navdropdown1.svg';
const DUMMY_BUSINESS_ICON_4 = '/icons/navdropdown3.svg';

// Company dropdown icons (new)
const DUMMY_COMPANY_ICON_1 = '/icons/company1.svg'; // For About Us
const DUMMY_COMPANY_ICON_2 = '/icons/company2.svg';   // For Blog
const DUMMY_COMPANY_ICON_3 = '/icons/company3.svg';    // For FAQ

// --- DATA STRUCTURES for the 5-Item Dropdown Menu ---
interface DropdownItem {
  iconPath: string;
  title: string;
  subtitle: string;
  href: string;
  tag?: string; 
}

// REORDERED as requested: Savings, Investments, Loan, Payment, Budget
const PERSONAL_DROPDOWN_ITEMS: DropdownItem[] = [
  { 
    iconPath: DUMMY_DROPDOWN_ICON_2, 
    title: 'Savings', 
    subtitle: 'Save in USD or NGN',
    href: '/savings' 
  },
  { 
    iconPath: DUMMY_DROPDOWN_ICON_5, 
    title: 'Investments', 
    subtitle: 'Build smarter wealth', 
    href: '/investments'
  },
  { 
    iconPath: DUMMY_DROPDOWN_ICON_4, 
    title: 'Loan', 
    subtitle: 'Grow your health with us', 
    href: '/loans'
  },
  { 
    iconPath: DUMMY_DROPDOWN_ICON_1, 
    title: 'Payments', 
    subtitle: 'Seamless Payments',
    href: '/payments' 
  },
  { 
    iconPath: DUMMY_DROPDOWN_ICON_3, 
    title: 'Budget', 
    subtitle: 'Simplify your spending',
    href: '/budget',
    tag: 'Coming soon' // Only Budget has the yellow pill
  },
];

// Business dropdown items (3 items as requested)
const BUSINESS_DROPDOWN_ITEMS: DropdownItem[] = [
  { 
    iconPath: DUMMY_BUSINESS_ICON_1, 
    title: 'Explore Business', 
    subtitle: '',
    href: '/business/home' 
  },
  { 
    iconPath: DUMMY_BUSINESS_ICON_2, 
    title: 'Savings', 
    subtitle: 'Save in USD or NGN', 
    href: '/business/savings'
  },
  { 
    iconPath: DUMMY_BUSINESS_ICON_3, 
    title: 'Payments', 
    subtitle: 'Seamless Payment',
    href: '/business/payments' 
  },
  { 
    iconPath: DUMMY_BUSINESS_ICON_4, 
    title: 'Budget', 
    subtitle: 'Simplify your Spending',
    href: '/business/budget' ,
    tag: 'Coming soon'
  },
];

// Company dropdown items (new - 3 items as requested)
const COMPANY_DROPDOWN_ITEMS: DropdownItem[] = [
  { 
    iconPath: DUMMY_COMPANY_ICON_1, 
    title: 'About Us', 
    subtitle: 'Learn more about our mission',
    href: '/company/about' 
  },
  { 
    iconPath: DUMMY_COMPANY_ICON_2, 
    title: 'Blog', 
    subtitle: 'Latest news and insights', 
    href: '/company/blog'
  },
  { 
    iconPath: DUMMY_COMPANY_ICON_3, 
    title: 'FAQ', 
    subtitle: 'Frequently asked questions',
    href: '/company/faq' 
  },
];

// --- REUSABLE COMPONENTS ---

// 1. Regular Nav Link with PILL HOVER Effect
const NavLink = ({ text, hasPlus = false, mobile = false, onClick, href = "#" }: { text: string; hasPlus?: boolean; mobile?: boolean; onClick?: () => void; href?: string }) => {
  const baseClasses = mobile 
    ? "block text-gray-700 font-medium text-base p-3 transition-colors duration-150 hover:text-purple-700 rounded-lg cursor-pointer"
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

// 2. Dropdown Content Menu (Generic)
const DropdownMenu = ({ items, mobile = false, onItemClick }: { items: DropdownItem[]; mobile?: boolean; onItemClick?: () => void }) => {
  if (mobile) {
    return (
      <div className="mt-2 ml-4 space-y-1 border-l-2 border-gray-100 pl-4">
        {items.map((item) => (
          <Link 
            key={item.title}
            href={item.href}
            className="flex items-center space-x-3 p-3 rounded-lg transition-colors duration-150 cursor-pointer"
            onClick={onItemClick}
          >
            <img src={item.iconPath} alt="" className="w-5 h-5 shrink-0" />
            <div className="flex grow justify-start items-center">
              <div className="leading-snug mr-3">
                <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
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
    <div className="w-[400px] bg-white shadow-2xl rounded-xl border border-gray-100 p-4 z-40">
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.title}>
            <Link 
              href={item.href}
              className="block p-3 rounded-lg transition-colors duration-150 cursor-pointer"
              onClick={onItemClick}
            >
              <div className="flex items-center space-x-3">
                <img src={item.iconPath} alt="" className="w-7 h-7 shrink-0" />
                <div className="flex grow justify-start items-center">
                  <div className="leading-snug mr-3">
                    <p className="font-semibold text-gray-800 text-sm hover:text-purple-500">{item.title}</p>
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

// 3. Dropdown Link Wrapper (Desktop) - MODIFIED to close other dropdowns
const DropdownLink = ({ text, hasPlus = false, items, closeOtherDropdowns, dropdownName }: { text: string; hasPlus?: boolean; items: DropdownItem[]; closeOtherDropdowns: (name: string) => void; dropdownName: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMouseInDropdown, setIsMouseInDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const linkClasses = `
    text-gray-700 font-medium text-base p-2 transition-colors duration-150 
    hover:text-purple-700 hover:bg-purple-100
    rounded-full cursor-pointer 
    ${isOpen ? 'bg-purple-100 text-purple-700' : ''}
  `;

  const handleMouseEnterLink = () => {
    closeOtherDropdowns(dropdownName);
    setIsOpen(true);
  };

  const handleMouseLeaveLink = () => {
    // Only close if mouse is not in dropdown
    setTimeout(() => {
      if (!isMouseInDropdown) {
        setIsOpen(false);
      }
    }, 100);
  };

  const handleMouseEnterDropdown = () => {
    setIsMouseInDropdown(true);
  };

  const handleMouseLeaveDropdown = () => {
    setIsMouseInDropdown(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  return (
    <div 
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnterLink}
      onMouseLeave={handleMouseLeaveLink}
    >
      <div className={linkClasses}>
        {text}
        {hasPlus && <span className="ml-1 font-bold">+</span>}
      </div>
      {isOpen && (
        <div 
          className="absolute top-full left-0 pt-2 z-40"
          onMouseEnter={handleMouseEnterDropdown}
          onMouseLeave={handleMouseLeaveDropdown}
        >
          <DropdownMenu items={items} />
        </div>
      )}
    </div>
  );
};

// 4. Mobile Dropdown Link
const MobileDropdownLink = ({ text, hasPlus = false, items, closeMobileMenu, isOpen, onToggle }: { text: string; hasPlus?: boolean; items: DropdownItem[]; closeMobileMenu: () => void; isOpen: boolean; onToggle: () => void }) => {
  const handleItemClick = () => {
    closeMobileMenu();
  };

  return (
    <div className="w-full">
      <button
        onClick={onToggle}
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
      {isOpen && <DropdownMenu items={items} mobile onItemClick={handleItemClick} />}
    </div>
  );
};

// 5. Hamburger Menu Button - UPDATED with proper X icon
const HamburgerButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="p-2 rounded-md text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200 lg:hidden relative z-50"
    aria-label={isOpen ? "Close menu" : "Open menu"}
  >
    <div className="w-6 h-6 flex flex-col justify-center items-center relative">
      {/* X icon lines */}
      <span className={`block absolute h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'rotate-45' : '-translate-y-1.5 rotate-0'}`} />
      <span className={`block absolute h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
      <span className={`block absolute h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-1.5 rotate-0'}`} />
    </div>
  </button>
);

// --- MAIN NAVBAR COMPONENT ---
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileOpenDropdown(null);
  };

  // Close other desktop dropdowns when one opens
  const closeOtherDesktopDropdowns = (dropdownName: string) => {
    setOpenDesktopDropdown(dropdownName);
  };

  // Handle mobile dropdown toggle
  const handleMobileDropdownToggle = (dropdownName: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === dropdownName ? null : dropdownName);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container') && !target.closest('button[aria-label*="menu"]')) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking any link
  const handleLinkClick = () => {
    closeMobileMenu();
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Navbar - Conditional overflow control */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-4">
          <div className="flex justify-between items-center h-14 md:h-20">
            {/* Logo - Responsive for mobile/tablet, original for desktop */}
            <div className="shrink-0">
              <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
                <img 
                  src={DUMMY_LOGO_PATH} 
                  alt="Site Logo" 
                  className="w-28 h-14 sm:w-36 sm:h-18 md:w-40 md:h-20 lg:w-56 lg:h-28 xl:w-60 xl:h-36 object-contain xl:-ml-10"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://placehold.co/160x80/7C3AED/FFFFFF?text=Logo';
                  }}
                />
              </Link>
            </div>

            {/* Desktop Navigation - Original styling for screens above 1024px */}
            <div className="hidden lg:flex space-x-4 xl:space-x-6 items-center">
              <DropdownLink 
                text="Personal" 
                hasPlus 
                items={PERSONAL_DROPDOWN_ITEMS} 
                closeOtherDropdowns={closeOtherDesktopDropdowns}
                dropdownName="personal"
              /> 
              <DropdownLink 
                text="Business" 
                hasPlus 
                items={BUSINESS_DROPDOWN_ITEMS} 
                closeOtherDropdowns={closeOtherDesktopDropdowns}
                dropdownName="business"
              />
              <DropdownLink 
                text="Company" 
                hasPlus 
                items={COMPANY_DROPDOWN_ITEMS} 
                closeOtherDropdowns={closeOtherDesktopDropdowns}
                dropdownName="company"
              />
            </div>

            {/* Desktop Buttons - Original styling for screens above 1024px */}
            <div className="hidden lg:flex items-center space-x-3 xl:-mr-16">
              <NavButtons />
            </div>

            {/* Tablet Navigation (768px - 1024px) */}
            <div className="hidden md:flex lg:hidden items-center space-x-3">
              <div className="flex space-x-3">
                <NavLink text="Personal" hasPlus />
                <NavLink text="Business" hasPlus />
                <NavLink text="Company" hasPlus />
              </div>
              <div className="flex items-center space-x-2">
                <NavButtons />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden lg:hidden">
              <HamburgerButton 
                isOpen={isMobileMenuOpen} 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-container lg:hidden fixed inset-0 top-14 bg-[#fafafa] z-40 overflow-y-auto">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              <MobileDropdownLink 
                text="Personal" 
                hasPlus 
                items={PERSONAL_DROPDOWN_ITEMS} 
                closeMobileMenu={handleLinkClick}
                isOpen={mobileOpenDropdown === 'personal'}
                onToggle={() => handleMobileDropdownToggle('personal')}
              />
              <MobileDropdownLink 
                text="Business" 
                hasPlus 
                items={BUSINESS_DROPDOWN_ITEMS} 
                closeMobileMenu={handleLinkClick}
                isOpen={mobileOpenDropdown === 'business'}
                onToggle={() => handleMobileDropdownToggle('business')}
              />
              <MobileDropdownLink 
                text="Company" 
                hasPlus 
                items={COMPANY_DROPDOWN_ITEMS} 
                closeMobileMenu={handleLinkClick}
                isOpen={mobileOpenDropdown === 'company'}
                onToggle={() => handleMobileDropdownToggle('company')}
              />
              
              {/* Mobile Buttons */}
              <div className="pt-6 space-y-4 border-t border-gray-100">
                <NavButtons mobile onButtonClick={handleLinkClick} />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}