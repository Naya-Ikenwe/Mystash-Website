"use client";

// app/investments/page.tsx
import FeaturesSection from "../components/FeaturesSection";
import ContactFormSection from "../components/ContactFormSection";
import dynamic from 'next/dynamic';

// Dynamically import the LoanCalculatorSection with no SSR
const LoanCalculatorSection = dynamic(
  () => import("../components/LoanCalculatorSection"),
  { ssr: false }
);

export default function InvestmentsPage() {
  const investmentFeatures = [
    {
      iconPath: "/icons/padlock.svg",
      title: "Diversified Portfolio",
      description:
        "Spread your investments across multiple asset classes for better risk management and optimized returns.",
    },
    {
      iconPath: "/icons/rocket.svg",
      title: "Secure & Regulated",
      description:
        "Your investments are protected with industry-leading security measures and regulatory compliance.",
    },
    {
      iconPath: "/icons/planet.svg",
      title: "Expert Insights",
      description:
        "Get access to professional market analysis and data-driven investment recommendations.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Section 1 - Hero Section */}
      <section
        className="h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/investmentbackground.svg')",
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-black mb-6 leading-tight">
            Grow Your Wealth
            <br />
            Smart Investments
          </h1>
          <p className="text-xl text-black mb-8 leading-relaxed">
            Start your investment journey today
            <br />
            Secure your financial future
          </p>
          <button className="bg-purple-800 hover:bg-purple-900 text-white font-semibold py-3 px-8 rounded-4xl flex items-center justify-center mx-auto transition-colors duration-200">
            <img src="/icons/Frame6.svg" alt="arrow" className="w-5 h-5 mr-2" />
            Start Investing
          </button>
        </div>
      </section>
      
      {/* Section 2 - Features Section */}
      <div className="bg-white">
        <FeaturesSection
          title="Why Choose Our Investment Platform"
          description="Experience the future of investing with our comprehensive suite of tools and features designed for both beginners and experienced investors."
          features={investmentFeatures}
        />
      </div>
      
      {/* Section 3 - Investment Guidance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Div - Image */}
            <div className="lg:w-1/2">
              <img
                src="/images/leftinv.svg"
                alt="Investment Growth"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Right Div - Content */}
            <div className="lg:w-1/2 flex flex-col justify-center ml-4 items-start">
              {/* Pill Header with dot inside */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 tracking-wide bg-purple-100 border border-purple-200 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Smart investing
                </span>
              </div>

              {/* Three-line Header */}
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Build Your Financial
                <br />
                Future With Our
                <br />
                Expert Guidance
              </h2>

              {/* Button with same icon as Section 1 */}
              <button className="bg-purple-800 hover:bg-purple-900 text-white font-semibold py-3 px-8 rounded-4xl flex items-center justify-center transition-colors duration-200">
                <img
                  src="/icons/Frame6.svg"
                  alt="arrow"
                  className="w-5 h-5 mr-2"
                />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 4 - Investment Calculator */}
      <LoanCalculatorSection
        // Header Section - Investment themed
        pillHeader="Calculate Your Investment"
        titleLine1="Plan Your Investment"
        titleLine2="Growth Strategy"
        description="Calculate your potential returns and discover the best investment options for your financial goals."
        buttonText="Start Investing"
        buttonIcon="/icons/Frame6.svg"
        // Calculator Section - Investment themed
        amountQuestion="How much do you want to invest?"
        amountPlaceholder="Enter investment amount"
        tenureQuestion="Investment period?"
        tenurePlaceholder="Select duration"
        calculateButtonText="Calculate Returns"
        calculateButtonIcon="/icons/Frame6.svg"
        resultBoxTitle="Estimated Returns"
        // Optional callbacks
        onCalculate={(amount, tenure) => {
          console.log("Calculating investment:", { amount, tenure });
        }}
        onGetStarted={() => {
          console.log("Start investing clicked");
        }}
      />
      
      {/* Section 5 - Contact Form */}
      <ContactFormSection />
    </div>
  );
}