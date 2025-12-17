"use client";

// app/investments/page.tsx
import FeaturesSection from "../../components/FeaturesSection";
import ContactFormSection from "../../components/ContactFormSection";
import dynamic from "next/dynamic";

const LoanCalculatorSection = dynamic(
  () => import("../../components/LoanCalculatorSection"),
  { ssr: false }
);

export default function InvestmentsPage() {
  const investmentFeatures = [
    {
      iconPath: "/icons/padlock.svg",
      title: "Secure Funds",
      description:
        "Your fund is protected with advanced encryption and trusted systems- giving you total peace of mind",
    },
    {
      iconPath: "/icons/rocket.svg",
      title: "Smart Investing",
      description:
        "Invest Smartly with minimum of ₦1,000,000. It's simple, accessible, rewarding and designed to grow your wealth effortlessly.",
    },
    {
      iconPath: "/icons/planet.svg",
      title: "Quick, Seasmless Payouts",
      description:
        "We are committed to keeping your finances simple and swift-from instant payouts to smart porfolio tracking and timely returns",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Section 1 - Hero Section */}
      <section
        className="h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/investmentbackground.svg')",
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4 -mt-40">
          <div className="inline-flex items-center justify-center mb-4 md:justify-start">
            <span className="text-sm font-semibold text-purple-500 bg-purple-100 border border-gray-200 px-6 py-2 mt-10 rounded-full">
              • Investment •
            </span>
          </div>
          <h1 className="text-6xl font-semibold text-black mb-2  leading-tight">
            Grow your Wealth with
            <br />
            ease and purpose
          </h1>
          <p className="text-xl text-black mb-8 leading-relaxed">
            Effortlessly grow and diversify your portfolio, no idle funds, just
            <br />
            progress with smarter and automated investing
          </p>
          <button className="bg-purple-500 hover:bg-purple-900 text-white font-medium py-3 px-8 rounded-4xl flex items-center justify-center mx-auto transition-colors duration-200">
            <img src="/icons/Frame6.svg" alt="arrow" className="w-6 h-6 mr-20" />
            <p className="mr-20"> Start Investing</p>
          </button>
        </div>
      </section>

      {/* Section 2 - Features Section */}
      <div className="bg-white pb-3 ">
        <FeaturesSection
          title="Here's Why Investing With us Just Feels Right"
          description="We've made it easier for anyone to get started."
          features={investmentFeatures}
        />
      </div>

      {/* Section 3 - Investment Guidance */}
      <section className=" bg-purple-100  ">
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
                <span className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 tracking-wide bg-purple-200 border border-purple-200 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Why you should invest with us
                </span>
              </div>

              {/* Three-line Header */}
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Get up to 20% ROI in just 12
                <br />
                months, with flexible interest
                <br />
                payments on your own terms
              </h2>

              {/* Button with same icon as Section 1 */}
              <button className="bg-purple-500 hover:bg-purple-900 text-white font-medium py-3 px-8 rounded-4xl flex items-center justify-center transition-colors duration-200">
                <img
                  src="/icons/Frame6.svg"
                  alt="arrow"
                  className="w-6 h-6 mr-2"
                />
                Start Investing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Investment Calculator */}
      <LoanCalculatorSection
        mode="investment"
        // Header Section - Investment themed
        pillHeader="Investment Calculator"
        titleLine1="ROI Calculator"
        titleLine2=""
        description="Sit back and watch the numbers add up-Partner Funds does the magic. because smart wealthgrowth should be effortless."
        buttonText="Start Investing"
        buttonIcon="/icons/Frame6.svg"
        // Calculator Section - Investment themed
        amountQuestion="Investment amount"
        amountPlaceholder="Minimum ₦1,000,000.00 naira"
        tenureQuestion="Investment duration?"
        tenurePlaceholder="Select duration"
        calculateButtonText="Calculate Returns"
        calculateButtonIcon="/icons/Frame6.svg"
        resultBoxTitle="Interest"
        // Optional callbacks
        onCalculate={(amount, tenure, result) => {
          console.log("Calculating investment:", { amount, tenure, result });
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
