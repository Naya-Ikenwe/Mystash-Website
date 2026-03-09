"use client";

import Link from "next/link";
import React from "react";

const FooterSection = () => {
  const DUMMY_LOGO = "/logo/mystashlogo.svg";
  const DUMMY_LOCATION_ICON = "/icons/loanflag.svg";
  const DUMMY_LOCATION_ICON_2 = "/icons/footerUs.svg";
  const DUMMY_SOCIAL_ICON_1 = "/icons/instagram.svg";
  const DUMMY_SOCIAL_ICON_2 = "/icons/linkedin.svg";
  const DUMMY_SOCIAL_ICON_3 = "/icons/facebook.svg";
  const DUMMY_SOCIAL_ICON_4 = "/icons/twitter.svg";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "https://placehold.co/160x32/7C3AED/FFFFFF?text=myStash";
  };

  const handleSmallImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "https://placehold.co/32x32/7C3AED/FFFFFF?text=📍";
  };

  const handleSocialImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "https://placehold.co/32x32/7C3AED/FFFFFF?text=S";
  };

  return (
    <section className="w-full bg-white -mt-10 pb-25 overflow-x-hidden"> {/* Added overflow-x-hidden */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-8">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left Section */}
          <div className="lg:w-2/5 mb-8">
            {/* Logo */}
            <div className="mb-6">
              <img
                src={DUMMY_LOGO}
                alt="Company Logo"
                className="h-8 object-contain"
                onError={handleImageError}
              />
            </div>

            {/* Three-line Sentence - Fixed for mobile */}
            <div className="text-gray-600 mb-8 -mt-3">
              {/* Desktop view - original with whitespace-nowrap */}
              <div className="hidden md:block text-sm">
                <p className="whitespace-nowrap">© In Nigeria, myStash is duly registered and regulated</p>
                <p className="whitespace-nowrap">as a cooperative society under the Lagos state Ministry</p>
                <p>of Commerce, Industry and Cooperatives.</p>
              </div>
              
              {/* Mobile view - properly wrapped */}
              <div className="block md:hidden text-sm leading-relaxed">
                <p>© In Nigeria, myStash is duly registered and regulated as a cooperative society under the Lagos state Ministry of Commerce, Industry and Cooperatives.</p>
              </div>
            </div>

            {/* Four Social Icons with Spacing */}
            <div className="flex space-x-4">
              {[
                DUMMY_SOCIAL_ICON_1,
                DUMMY_SOCIAL_ICON_2,
                DUMMY_SOCIAL_ICON_3,
                DUMMY_SOCIAL_ICON_4,
              ].map((icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
                >
                  <img
                    src={icon}
                    alt={`Social icon ${index + 1}`}
                    className="w-8 h-8 object-contain"
                    onError={handleSocialImageError}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section - Four Columns - Fixed for mobile */}
          <div className="lg:w-3/5 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-2">
            {/* Column 1 - Fixed negative margins for mobile */}
            <div className="md:ml-0">
              <h4 className="font-semibold text-gray-400 mb-4">Products</h4>
              <div className="space-y-2 text-sm">
                <Link
                  href="/company/about"
                  className="block text-gray-800 hover:text-purple-700 transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="block text-gray-800 hover:text-purple-700 transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  className="block text-gray-800 hover:text-purple-700 transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-800 hover:text-purple-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Column 2 - Fixed negative margins for mobile */}
            <div className="md:-ml-10">
              <h4 className="font-semibold text-gray-400 mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-800">
                <Link
                  href="payments"
                  className="block text-gray-600 hover:text-purple-700 transition-colors"
                >
                  Payment
                </Link>
                <Link
                  href="savings"
                  className="block  hover:text-purple-700 transition-colors"
                >
                  Savings
                </Link>
                <Link
                  href="budget"
                  className="block  hover:text-purple-700 transition-colors"
                >
                  Budget
                </Link>
                <Link
                  href="/loans"
                  className="block  hover:text-purple-700 transition-colors"
                >
                  Loans
                </Link>
                <Link
                  href="investments"
                  className="block  hover:text-purple-700 transition-colors"
                >
                  Investments
                </Link>
              </div>
            </div>

            {/* Column 3 - Fixed negative margins for mobile */}
            <div className="md:-ml-22">
              <h4 className="font-semibold text-gray-400 mb-4">Support</h4>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-purple-700 text-sm transition-colors"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-purple-700 text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Column 4 - Addresses - Fixed negative margins for mobile */}
            <div className="md:-ml-21 col-span-2 md:col-span-1 mt-6 md:mt-0">
              <h4 className="font-semibold text-gray-400 mb-4">Contact</h4>
              <div className="space-y-4">
                {/* Nigeria Address */}
                <div className="flex items-start space-x-2">
                  <img
                    src={DUMMY_LOCATION_ICON}
                    alt="Location"
                    className="w-6 h-6 object-contain shrink-0"
                    onError={handleSmallImageError}
                  />
                  <div className="text-gray-800 text-[12px]">
                    <p className="font-medium">NG</p>
                    <p>Lagos Office; Pentagon Plaza, 2nd floor</p>
                    <p>23, Opebi-Rd, Ikeja, Lagos, Nigeria</p>
                  </div>
                </div>

                {/* USA Address */}
                <div className="flex items-start space-x-2">
                  <img
                    src={DUMMY_LOCATION_ICON_2}
                    alt="Location"
                    className="w-6 h-6 object-contain shrink-0"
                    onError={handleSmallImageError}
                  />
                  <div className="text-gray-800 text-[12px]">
                    <p className="font-medium">USA</p>
                    <p>2055 Limestone Road STE 200-C,</p>
                    <p>Wilmington, Delaware 19808</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;