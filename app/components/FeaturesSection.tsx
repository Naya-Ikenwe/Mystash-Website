// components/FeaturesSection.tsx
"use client";

import React from "react";

interface FeatureIconCardProps {
  iconPath: string;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  title: string;
  description: string;
  features: FeatureIconCardProps[];
}

const FeatureIconCard = ({
  iconPath,
  title,
  description,
}: FeatureIconCardProps) => {
  return (
    <div className="bg-purple-100 rounded-xl p-6 sm:p-8 border border-purple-100 transition-all duration-300 md:min-w-[360px]">
      <div className="flex flex-col items-start text-left">
        <img
          src={iconPath}
          alt={title + " icon"}
          className="w-16 h-16 mb-10 object-contain"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/64x64/7C3AED/FFFFFF?text=ICON";
          }}
        />
        <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const FeaturesSection = ({
  title,
  description,
  features,
}: FeaturesSectionProps) => {
  return (
    <section className="max-w-7xl mx-auto mb-10 px-4 sm:px-6 lg:px-8 py-12 md:py-10 bg-white relative">
      {/* Header Content */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
          {title}
        </h2>
        <p className="text-lg text-gray-800">{description}</p>
      </div>

      {/* Decorative Lines and Circles Container */}
      <div className="relative">
        {/* Upper Horizontal Line - extended to touch end circles */}
        <div className="absolute top-0 left-2 right-2 h-px bg-gray-200 -mt-3 z-0"></div>

        {/* Lower Horizontal Line - extended to touch end circles */}
        <div className="absolute bottom-0 left-2 right-2 h-px bg-gray-200 -mb-3 z-0"></div>

        {/* Vertical lines: start (intersect), between (top/bottom touch only), between (top/bottom touch only), end (intersect) */}
        <div className="absolute top-[-25px] bottom-[-25px] left-[2%] w-px bg-gray-200 z-0 -translate-x-1"></div>
        <div className="absolute top-[-13px] bottom-[-13px] left-[34%] w-px bg-gray-200 z-0 -translate-x-1"></div>
        <div className="absolute top-[-13px] bottom-[-13px] left-[66.5%] w-px bg-gray-200 z-0 -translate-x-1"></div>

        {/* Middle verticals - small top/bottom segments so they only touch circles */}
        
        <div className="absolute top-[-25px] bottom-[-25px] left-[98.5%] w-px bg-gray-200 z-0 -translate-x-1"></div>

        {/* Rings - Upper Line */}
        <div className="absolute top-0 left-8 right-8 flex justify-between -mt-5 z-10">
          <div className="absolute w-3 h-3 border-3 border-purple-300 rounded-full bg-white -left-[18px] shadow-sm mt-1"></div>
          <div className="absolute w-3 h-3 border-2 border-purple-100 rounded-full bg-white shadow-sm left-[32.3%] mt-1"></div>
          <div className="absolute w-3 h-3 border-3 border-purple-300 rounded-full bg-white shadow-sm left-[66.5%] mt-1"></div>
          <div className="absolute w-3 h-3 border-2 border-purple-100 rounded-full bg-white shadow-sm left-[100.4%] mt-1"></div>
        </div>

        {/* Rings - Lower Line */}
        <div className="absolute bottom-0 left-8 right-8 flex justify-between -mb-1 z-10">
          <div className=" absolute w-3 h-3 border-2 border-purple-100 rounded-full bg-white -left-[18px] shadow-sm"></div>
          <div className="absolute w-3 h-3 border-3 border-purple-300 rounded-full bg-white shadow-sm left-[32.3%]"></div>
          <div className="absolute w-3 h-3 border-2 border-purple-100 rounded-full bg-white shadow-sm left-[66.5%] "></div>
          <div className="absolute w-3 h-3 border-3 border-purple-300 rounded-full bg-white shadow-sm left-[100.4%]"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative z-20 px-8">
          {features.map((feature, index) => (
            <FeatureIconCard
              key={index}
              iconPath={feature.iconPath}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;