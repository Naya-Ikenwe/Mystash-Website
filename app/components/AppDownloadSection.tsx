"use client";

import Link from "next/link";
import React from "react";

const AppDownloadSection = () => {
  const DUMMY_LOGO_1 = "/logo/org1.svg";
  const DUMMY_LOGO_2 = "/logo/org2.svg";
  const DUMMY_LOGO_3 = "/logo/org3.svg";
  const DUMMY_LOGO_4 = "/logo/org4.svg";
  const DUMMY_GOOGLE_PLAY_ICON = "/logo/google.svg";
  const DUMMY_APPLE_STORE_ICON = "/icons/apple.svg";
  const DUMMY_APP_IMAGE = "/images/iphonetop.svg";
  const DUMMY_BACKGROUND_IMAGE = "/images/purplebackground.jpg";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "https://placehold.co/200x100/7C3AED/FFFFFF?text=Logo";
  };

  const handleSmallImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "https://placehold.co/40x40/7C3AED/FFFFFF?text=Icon";
  };

  const handleAppImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "https://placehold.co/400x320/FFFFFF/7C3AED?text=App+Preview";
  };

  return (
    <section className="w-full bg-white"> {/* Added w-full bg-white */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-t border-gray-200">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Leading Organizations
          </h2>
        </div>

        {/* Four Logo Icons with Equal Spacing */}
        <div className="flex justify-between items-center mb-20 px-8">
          {[DUMMY_LOGO_1, DUMMY_LOGO_2, DUMMY_LOGO_3, DUMMY_LOGO_4].map(
            (logo, index) => (
              <div key={index} className="flex-1 flex justify-center">
                <img
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="h-12 sm:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  onError={handleImageError}
                />
              </div>
            )
          )}
        </div>

        {/* Big Container with Background Image */}
        <div
          className="rounded-2xl min-h-[400px] flex relative overflow-hidden"
          style={{
            backgroundImage: `url(${DUMMY_BACKGROUND_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* More pronounced purple tint */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(162, 67, 220, 0.8)" }}
          ></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row w-full">
            {/* Left Div - Has its own padding */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 sm:p-12">
              <div className="text-center">
                {/* Two-line Sentence */}
                <div className="text-white text-xl sm:text-2xl text-start lg:text-3xl font-semibold mb-8 leading-tight">
                  <div>Join thousands already saving,</div>
                  <div className="md:whitespace-nowrap">investing and growing with myStash</div>
                </div>

                {/* Two Small Transparent Buttons with subtle RGBA background */}
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  {/* Google Play Store Link */}
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.yourapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white text-white px-5 py-3 rounded-lg transition-colors flex items-center justify-center w-full sm:w-auto md:min-w-[130px]"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  >
                    <img
                      src={DUMMY_GOOGLE_PLAY_ICON}
                      alt="Google Play"
                      className="w-7 h-7 mr-1 object-contain"
                      onError={handleSmallImageError}
                    />
                    <div className="text-left">
                      <div className="text-xs text-white text-opacity-90">
                        Get App on
                      </div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </Link>

                  {/* Apple App Store Link */}
                  <Link
                    href="https://apps.apple.com/app/your-app-id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white text-white px-5 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors flex items-center justify-center w-full sm:w-auto md:min-w-[130px]"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  >
                    <img
                      src={DUMMY_APPLE_STORE_ICON}
                      alt="App Store"
                      className="w-9 h-9 mr-1 object-contain"
                      onError={handleSmallImageError}
                    />
                    <div className="text-left">
                      <div className="text-xs text-white text-opacity-90">
                        Get App on
                      </div>
                      <div className="text-sm font-semibold">Apple Store</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Div - NO PADDING, image touches bottom */}
            <div className="w-full md:w-1/2 flex items-end justify-center">
              <img
                src={DUMMY_APP_IMAGE}
                alt="App Preview"
                className="max-w-full object-contain"
                style={{
                  maxHeight: "320px",
                  width: "auto",
                }}
                onError={handleAppImageError}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;