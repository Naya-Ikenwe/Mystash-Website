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
    <div className="bg-purple-100 rounded-xl p-6 sm:p-8 border border-purple-100 transition-all duration-300 ">
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
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
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
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-lg text-gray-800">{description}</p>
      </div>

      {/* Decorative Lines and Circles Container */}
      <div className="relative">
        {/* Upper Horizontal Line - shortened */}
        <div className="absolute top-0 left-12 right-12 h-px bg-gray-200 -mt-4"></div>

        {/* Lower Horizontal Line - shortened */}
        <div className="absolute bottom-0 left-12 right-12 h-px bg-gray-200 -mb-4"></div>

        {/* Left Vertical Line - shortened */}
        <div className="absolute left-12 top-8 bottom-8 w-px bg-gray-200"></div>

        {/* Right Vertical Line - shortened */}
        <div className="absolute right-12 top-8 bottom-8 w-px bg-gray-200"></div>

        {/* Rings - Upper Line */}
        <div className="absolute top-0 left-8 right-8 flex justify-between -mt-5">
          <div className="w-3 h-3 border-3 border-purple-300 rounded-full bg-white shadow-sm"></div>
          <div className="w-3 h-3 border-2 border-purple-100 rounded-full bg-white shadow-sm"></div>
          <div className="w-3 h-3 border-3 border-purple-300 rounded-full bg-white shadow-sm"></div>
          <div className="w-3 h-3 border-2 border-purple-100 rounded-full bg-white shadow-sm"></div>
        </div>

        {/* Rings - Lower Line */}
        <div className="absolute bottom-0 left-8 right-8 flex justify-between -mb-5">
          <div className="w-3 h-3 border-2 border-purple-100 rounded-full bg-white shadow-sm"></div>
          <div className="w-3 h-3 border-3 border-purple-300 rounded-full bg-white shadow-sm"></div>
          <div className="w-3 h-3 border-2 border-purple-100 rounded-full bg-white shadow-sm"></div>
          <div className="w-3 h-3 border-3 border-purple-300 rounded-full bg-white shadow-sm"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative z-10 px-8">
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