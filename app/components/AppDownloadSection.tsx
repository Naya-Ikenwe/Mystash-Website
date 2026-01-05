"use client";

import Link from "next/link";
import React from "react";

interface AppDownloadSectionProps {
  showHeaderAndLogos?: boolean;
}

const AppDownloadSection = ({ showHeaderAndLogos = false }: AppDownloadSectionProps) => {
  const DUMMY_GOOGLE_PLAY_ICON = "/logo/google.svg";
  const DUMMY_APPLE_STORE_ICON = "/icons/apple.svg";
  const DUMMY_APP_IMAGE = "/images/iphonetop.svg";
  const DUMMY_BACKGROUND_IMAGE = "/images/purplebackground.jpg";

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
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        {/* Big Container with Background Image */}
        <div
          className="rounded-2xl min-h-[400px] lg:min-h-[400px] md:min-h-[500px] flex relative overflow-hidden"
          style={{
            backgroundImage: `url(${DUMMY_BACKGROUND_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Purple tint overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(162, 67, 220, 0.8)" }}
          ></div>

          {/* Content - Stack on mobile/tablet, side-by-side on desktop */}
          <div className="relative z-10 flex flex-col lg:flex-row w-full">
            {/* Left Div - Text Content */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="text-center lg:text-left w-full max-w-md">
                {/* Headline */}
                <div className="text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 leading-tight">
                  <div className="break-words">Join thousands already saving,</div>
                  <div className="break-words lg:whitespace-nowrap">investing and growing with myStash</div>
                </div>

                {/* App Store Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start justify-center lg:justify-start">
                  {/* Google Play Store Link */}
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.yourapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white text-white px-4 sm:px-5 py-3 rounded-lg transition-colors flex items-center justify-center w-full sm:w-auto sm:min-w-[150px] lg:min-w-[130px] hover:bg-white hover:bg-opacity-10"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  >
                    <img
                      src={DUMMY_GOOGLE_PLAY_ICON}
                      alt="Google Play"
                      className="w-6 h-6 sm:w-7 sm:h-7 mr-2 flex-shrink-0 object-contain"
                      onError={handleSmallImageError}
                    />
                    <div className="text-left">
                      <div className="text-xs text-white text-opacity-90">
                        Get App on
                      </div>
                      <div className="text-sm font-semibold whitespace-nowrap">Google Play</div>
                    </div>
                  </Link>

                  {/* Apple App Store Link */}
                  <Link
                    href="https://apps.apple.com/app/your-app-id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white text-white px-4 sm:px-5 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors flex items-center justify-center w-full sm:w-auto sm:min-w-[150px] lg:min-w-[130px]"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  >
                    <img
                      src={DUMMY_APPLE_STORE_ICON}
                      alt="App Store"
                      className="w-7 h-7 sm:w-8 sm:h-8 mr-2 flex-shrink-0 object-contain"
                      onError={handleSmallImageError}
                    />
                    <div className="text-left">
                      <div className="text-xs text-white text-opacity-90">
                        Get App on
                      </div>
                      <div className="text-sm font-semibold whitespace-nowrap">Apple Store</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Div - App Image */}
            <div className="w-full lg:w-1/2 flex items-end justify-center pb-0 md:pb-4 lg:pb-0">
              <img
                src={DUMMY_APP_IMAGE}
                alt="App Preview"
                className="max-w-full object-contain"
                style={{
                  maxHeight: "280px",
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