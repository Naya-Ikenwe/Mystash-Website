"use client";

import Link from "next/link";
import React from "react";

const FooterSection = () => {
  const DUMMY_LOGO = "/logo/mystashlogo.svg";
  const DUMMY_LOCATION_ICON = "/icons/location.svg";
  const DUMMY_LOCATION_ICON_2 = "/icons/u.slogo.svg";
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
    <section className="w-full bg-white"> {/* Added w-full bg-white */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left Section */}
          <div className="lg:w-2/5 mb-8 lg:mb-0">
            {/* Logo */}
            <div className="mb-6">
              <img
                src={DUMMY_LOGO}
                alt="Company Logo"
                className="h-8 object-contain"
                onError={handleImageError}
              />
            </div>

            {/* Three-line Sentence */}
            <div className="text-gray-600 mb-8">
              <p className="mb-1">Transforming financial experiences</p>
              <p className="mb-1">through innovative technology and</p>
              <p>customer-centric solutions.</p>
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

          {/* Right Section - Four Columns */}
          <div className="lg:w-3/5 grid grid-cols-2 md:grid-cols-4 gap-2">
            {/* Column 1 */}
            <div>
              <h4 className="font-semibold text-gray-400 mb-4">Products</h4>
              <div className="space-y-2 text-sm">
                <Link
                  href="#"
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
                  href="#"
                  className="block text-gray-800 hover:text-purple-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold text-gray-400 mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-800">
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-purple-700 transition-colors"
                >
                  Payment
                </Link>
                <Link
                  href="#"
                  className="block  hover:text-purple-700 transition-colors"
                >
                  Savings
                </Link>
                <Link
                  href="#"
                  className="block  hover:text-purple-700 transition-colors"
                >
                  Budget
                </Link>
                <Link
                  href="#"
                  className="block  hover:text-purple-700 transition-colors"
                >
                  Loans
                </Link>
                <Link
                  href="#"
                  className="block  hover:text-purple-700 transition-colors"
                >
                  Partner Funds
                </Link>
              </div>
            </div>

            {/* Column 3 */}
            <div>
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

            {/* Column 4 - Addresses */}
            <div>
              <h4 className="font-semibold text-gray-400 mb-4">Contact</h4>
              <div className="space-y-4">
                {/* Nigeria Address */}
                <div className="flex items-start space-x-2">
                  <img
                    src={DUMMY_LOCATION_ICON}
                    alt="Location"
                    className="w-4 h-4 mt-1 object-contain shrink-0"
                    onError={handleSmallImageError}
                  />
                  <div className="text-gray-600 text-xs">
                    <p className="font-medium">NG</p>
                    <p className="md:whitespace-nowrap">Lagos Office; Pentagon Plaza, 2nd floor</p>
                    <p className="md:whitespace-nowrap">23, Opebi-Rd, Ikeja, Lagos, Nigeria</p>
                  </div>
                </div>

                {/* USA Address */}
                <div className="flex items-start space-x-2">
                  <img
                    src={DUMMY_LOCATION_ICON_2}
                    alt="Location"
                    className="w-6 h-6 mt-1 object-contain shrink-0"
                    onError={handleSmallImageError}
                  />
                  <div className="text-gray-600 text-xs">
                    <p className="font-medium">USA</p>
                    <p className="md:whitespace-nowrap">4255 Limestone Rd STE 200C, 200C,</p>
                    <p className="md:whitespace-nowrap">Wilmington, DE 19808</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} muStash. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;