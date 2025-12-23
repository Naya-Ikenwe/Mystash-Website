"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import FeaturesSection from "@/app/components/FeaturesSection";
import ContactFormSection from "@/app/components/ContactFormSection";
import AppDownloadSection from "@/app/components/AppDownloadSection";

// ============ DUMMY IMAGE PATHS (EXACT SAME AS REFERENCE) ============
const DUMMY_CORNER_TOP_LEFT = "/images/businessheroimg1.svg";
const DUMMY_CORNER_TOP_RIGHT = "/images/businessheroimg2.svg";
const DUMMY_CORNER_BOTTOM_LEFT = "/images/businessheroimg3.svg";
const DUMMY_CORNER_BOTTOM_RIGHT = "/images/businessheroimg4.svg";
const DUMMY_BUTTON_ICON = "/icons/download-icon.svg";
const DUMMY_HERO_BACKGROUND = "/images/businessherobg.svg"; // Added background image path

// SECTION 2 PATHS (EXACT SAME AS REFERENCE)
const DUMMY_CARD_1_IMAGE = "/images/card1.svg"; // EXACT SAME
const DUMMY_CARD_2_IMAGE = "/images/card2.svg"; // EXACT SAME
const DUMMY_CARD_3_IMAGE = "/images/card3.svg"; // EXACT SAME
const DUMMY_BUTTON_ICON_SECTION2 = "/icons/Frame6.svg"; // EXACT SAME

// SECTION 4 PATHS
const DUMMY_BUSINESS_STACKED_1 = "/images/businessstack1.svg";
const DUMMY_BUSINESS_STACKED_2 = "/images/businessstack2.svg";
const DUMMY_BUSINESS_STACKED_3 = "/images/businessstack3.svg";

const BUTTON_PATHS: Record<string, string> = {
  "Start Saving": "/business/savings",
  "Explore Features": "/loans",
  "Learn About Security": "/security",
  Budget: "/business/budget",
  Payments: "/business/payments",
};

// ============ BUSINESS TESTIMONIALS DATA ============
const businessTestimonials = [
  {
    id: 1,
    message: "MyStash Business Banking transformed how we manage our company finances. The cash flow insights are invaluable!",
    name: "David Chen",
    location: "Tech Startup Founder, Lagos"
  },
  {
    id: 2,
    message: "As a small business owner, the payment processing tools have saved me hours every week. Highly recommended!",
    name: "Sarah Johnson",
    location: "Boutique Owner, Abuja"
  },
  {
    id: 3,
    message: "The business loan process was seamless and fast. Got the funding we needed to expand our operations.",
    name: "Michael Adekunle",
    location: "Manufacturing Business, Port Harcourt"
  },
  {
    id: 4,
    message: "Corporate accounts with MyStash have simplified our payroll and vendor payments. Excellent service!",
    name: "Chinwe Okonkwo",
    location: "Finance Director, Ibadan"
  },
  {
    id: 5,
    message: "The analytics dashboard helped us identify cost-saving opportunities we never knew existed.",
    name: "James Okafor",
    location: "Restaurant Chain Owner, Enugu"
  },
  {
    id: 6,
    message: "From merchant services to business savings, MyStash covers all our banking needs in one platform.",
    name: "Fatima Bello",
    location: "E-commerce Entrepreneur, Kano"
  }
];

// ============ SECTION 1 COMPONENTS ============

// Horizontal Marquee Component (exact width match from reference)
const BusinessHorizontalMarquee = () => {
  const TEXTS = [
    "• Our Product •",
    "• Payments •",
    "• Savings •",
    "• Budget •",
  ];
  const SCROLL_ITEMS = [...TEXTS, ...TEXTS];

  return (
    <div className="text-sm font-medium text-gray-700 h-6 mb-8 relative w-44 md:w-56 mx-auto">
      <div className="overflow-hidden whitespace-nowrap w-full">
        <motion.div
          className="inline-flex"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            x: {
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        >
          {SCROLL_ITEMS.map((text, i) => (
            <span key={i} className="shrink-0 mx-2">
              <span className="inline-block px-3 py-1 bg-gray-100 rounded-full whitespace-nowrap">
                {text}
              </span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Gradient fades on both sides */}
      <div className="absolute inset-y-0 w-4 left-0 bg-linear-to-r from-white to-transparent opacity-100 z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 w-4 right-0 bg-linear-to-l from-white to-transparent opacity-100 z-10 pointer-events-none"></div>
    </div>
  );
};

// Download Button Component with Icon
const DownloadButton = () => {
  return (
    <Link 
    href="/download" 
    className="bg-purple-500 hover:bg-purple-900 text-white font-medium py-2 px-2 rounded-4xl flex items-center justify-center transition-colors duration-200"
  >
    <img
      src="/icons/Frame5.svg"
      alt="Download app icon"
      className="w-7 h-7 mr-17"
    />
    <span className="mr-19">Download app</span>
  </Link>
  );
};

// Corner Icon Component - Updated with specific positioning
const CornerIcon = ({ position, src }: { position: string; src: string }) => {
  const positionClasses = {
    "top-left": "top-[27%]  -translate-y-1/2 left-18 lg:left-28 xl:left-50",
    "top-right": "top-[24%]  -translate-y-1/2 right-4 lg:right-8 xl:right-54 ",
    "bottom-left": "bottom-4 lg:bottom-12 left-12 lg:left-20 xl:left-63",
    "bottom-right": "bottom-4 lg:bottom-30 right-4 lg:right-8 xl:right-70",
  }[position];

  return (
    <div className={`absolute ${positionClasses} z-20`}>
      <img
        src={src}
        alt={`${position} decoration`}
        className="w-20 h-20 lg:w-32 lg:h-32 object-contain"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://placehold.co/64x64/CCCCCC/FFFFFF?text=ICON";
        }}
      />
    </div>
  );
};

// ============ SECTION 2 COMPONENTS (EXACT SAME AS REFERENCE) ============

// Pill Icon Component (EXACT SAME AS REFERENCE)
const PillIcon = () => (
  <img
    src={DUMMY_BUTTON_ICON_SECTION2}
    alt="CTA Arrow"
    className="w-6 h-6 mr-2 object-contain"
    onError={(e) => {
      e.currentTarget.onerror = null;
      e.currentTarget.src = "https://placehold.co/16x16/7C3AED/FFFFFF?text=>>";
    }}
  />
);

// Pill Button with Icon (EXACT SAME AS REFERENCE)
const PillButtonWithIcon = ({ text }: { text: string }) => {
  // Get the path from mapping, fallback to "/" if not found
  const path = BUTTON_PATHS[text] || "/";

  return (
    <Link
      href={path}
      className="inline-flex items-center text-purple-700 text-sm border border-purple-100 bg-purple-100 px-4 py-2 rounded-full hover:bg-purple-200 transition-colors"
    >
      <PillIcon />
      {text}
    </Link>
  );
};

// Feature Card Component (EXACT SAME AS REFERENCE)
interface FeatureCardProps {
  imagePath: string;
  title: string;
  description: string;
  ctaContent: React.ReactNode;
}

const FeatureCard = ({
  imagePath,
  title,
  description,
  ctaContent,
}: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col p-3 sm:p-5 pr-0 sm:pr-0 bg-white transition-shadow duration-300 rounded-3xl h-full min-h-[360px] border border-gray-200 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute bottom-0 right-0 z-0"
        initial={{ x: "120%", opacity: 0 }}
        animate={{ x: isHovered ? "0%" : "120%", opacity: isHovered ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{ willChange: "transform, opacity" }}
      >
        <img
          src={imagePath}
          alt={title + " visual"}
          className="w-[211px] h-[206px] object-contain"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/211x206/CCCCCC/FFFFFF?text=SLIDE+IN";
          }}
        />
      </motion.div>

      <div className="flex flex-col grow text-left relative z-20">
        <h3 className="text-xl font-semibold text-gray-900 mb-0 mt-0">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-0 max-w-[85%] mt-3 leading-snug">
          {description}
        </p>
        <div className="mt-auto mr-10">{ctaContent}</div>
      </div>
    </div>
  );
};

// Payment Feature Card (EXACT SAME AS REFERENCE)
const PaymentFeatureCard = () => {
  return (
    <div className="relative flex flex-col p-3 sm:p-5 pr-0 sm:pr-0 bg-white transition-shadow duration-300 rounded-xl h-full min-h-[360px] border border-gray-200">
      <div className="absolute bottom-0 right-0 z-0 opacity-70">
        <img
          src={DUMMY_CARD_2_IMAGE}
          alt="Payment icon"
          className="w-[211px] h-[206px] object-contain"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/211x206/CCCCCC/FFFFFF?text=CARD+2+VISUAL";
          }}
        />
      </div>

      <div className="flex flex-col grow text-left relative z-20">
        <h3 className="text-xl font-semibold text-gray-900 mb-0 mt-0">
          Activate your Smart Savings
        </h3>
        <p className="text-sm text-gray-600 mb-0 max-w-[85%] mt-3 leading-snug">
          Set automatic savings in USD or NGN directly from your business income or daily spending
        </p>
        <div className="mt-auto">
          <PillButtonWithIcon text="Start Saving" />
        </div>
      </div>
    </div>
  );
};

// ============ SECTION 4: SLIDING STACK EFFECT ============

// Individual Sliding Card Component
const SlidingCard = ({ 
  index, 
  imagePath, 
  pillText, 
  titleLines, 
  buttonText 
}: { 
  index: number; 
  imagePath: string; 
  pillText: string; 
  titleLines: string[]; 
  buttonText: string; 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Use scroll tracking for this specific card
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Calculate position based on index and scroll
  // All cards should end up at y=0 when stacked
  const yPosition = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [
      index * 20,          // Start apart (spaced by 20px each)
      0,                   // ALL stack at same position (y=0) - perfect overlap
      0,                   // Stay stacked at same position
      index * 20           // Return to spaced position
    ]
  );

  // Get the path for the button from BUTTON_PATHS mapping
  const buttonPath = BUTTON_PATHS[buttonText] || "/";

  return (
    <motion.div
      ref={cardRef}
      style={{
        y: yPosition,
        position: "sticky",
        top: "20vh"
      }}
      className="w-full"
    >
      <div className="bg-purple-100 rounded-2xl mb-2 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="lg:w-1/2 flex items-center h-full">
              <img
                src={imagePath}
                alt={pillText}
                className="w-full h-[350px] object-cover "
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://placehold.co/600x400/7C3AED/FFFFFF?text=Business";
                }}
              />
            </div>
            
            {/* Right Content */}
            <div className="lg:w-1/2">
              {/* Pill */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 text-sm font-[580] text-purple-600 bg-purple-200 border border-purple-200 rounded-full px-4 py-2">
                  
                  {pillText}
                </span>
              </div>
              
              {/* Title */}
              <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 mb-6">
                {titleLines[0]}<br />
                {titleLines[1]}<br />
                {titleLines[2]}
              </h2>
              
              {/* Button - Updated to use Link with proper path */}
              <Link
                href={buttonPath}
                className="inline-flex items-center bg-purple-600 hover:bg-purple-900 text-white font-medium py-2 px-2 rounded-full transition-colors"
              >
                <img
                  src={DUMMY_BUTTON_ICON_SECTION2}
                  alt="arrow"
                  className="w-7 h-7 mr-2"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://placehold.co/20x20/FFFFFF/7C3AED?text=→";
                  }}
                />
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Sliding Stack Container
const SlidingStackContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative py-10">
      <div className="sticky top-0">
        <div>
          <SlidingCard
            index={0}
            imagePath={DUMMY_BUSINESS_STACKED_1}
            pillText="• Why you should save with us"
            titleLines={["You sit back, relax and watch", "your business savings Grow with", "myStash effortlessly."]}
            buttonText="Start Saving"
          />
          
          <SlidingCard
            index={1}
            imagePath={DUMMY_BUSINESS_STACKED_2}
            pillText="• Payment clarity at every step"
            titleLines={["Effortless global business", "payments, anytime, anywhere", "that's the myStash way."]}
            buttonText="Payments"
          />
          
          <SlidingCard
            index={2}
            imagePath={DUMMY_BUSINESS_STACKED_3}
            pillText="• Budgeting made crystal clear"
            titleLines={["Create better business budgets", "every day so you can plan smarter", "and satisfy your customers."]}
            buttonText="Budget"
          />
        </div>
      </div>
    </section>
  );
};

// ============ SECTION 5: TESTIMONIALS CAROUSEL ============

// Testimonial Card Component
const TestimonialCard = ({ testimonial }: { testimonial: typeof businessTestimonials[0] }) => {
  const firstLetter = testimonial.name.charAt(0).toUpperCase();

   return (
  <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-300  transition-all duration-300 min-h-60 flex flex-col relative mb-2">
    {/* Message */}
    <p className="text-gray-700 leading-relaxed mb-6 grow text-sm">
      "{testimonial.message}"
    </p>
    
    {/* User Info - FIXED LAYOUT */}
    <div className="mt-auto">
      {/* Purple initial and name on same line */}
      <div className="flex items-center space-x-3">
        {/* Initial - Made smaller */}
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shrink-0">
          <span className="text-white font-medium text-base">
            {firstLetter}
          </span>
        </div>
        
        {/* Name beside the initial */}
        <div>
          <h4 className="font-semibold text-gray-900 text-sm mt-3 -ml-1">
            {testimonial.name}
          </h4>
        </div>
      </div>
      
      {/* Location - starts aligned with purple circle */}
      <div className="mt-1 "> {/* ml-13 = w-10 (initial) + space-x-3 */}
        <p className="text-gray-500 text-sm">
          {testimonial.location}
        </p>
      </div>
    </div>
  </div>
);
};

// Section Five Component (Testimonials Carousel)
const SectionFive = () => {
  const [key, setKey] = useState(0);
  const [isReversing, setIsReversing] = useState(false);

  // Calculate total width needed for all testimonials (card width + gap)
  const cardWidth = 384; // w-96 = 384px
  const gap = 24; // gap-6 = 24px
  const totalWidth = (cardWidth + gap) * businessTestimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsReversing((prev) => !prev);
      setKey((prev) => prev + 1); // Force re-render
    }, 15000); // Reverse direction every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    // Section is full-bleed; header constrained inside
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - constrained */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">
            Hear from the people who trust and
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight mt-0">
            grow with myStash.
          </p>
        </div>
      </div>

      {/* Full-bleed Testimonials Carousel */}
      <div className="w-full overflow-hidden">
        <div className="relative">
          <motion.div
            key={key}
            className="flex space-x-6 px-4 sm:px-6 lg:px-8"
            animate={{
              x: isReversing ? [0, -totalWidth] : [-totalWidth, 0],
            }}
            transition={{
              x: {
                duration: 15,
                ease: "linear",
              },
            }}
          >
            {[...businessTestimonials, ...businessTestimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="shrink-0 w-80 sm:w-96"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </motion.div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

// ============ MAIN BUSINESS PAGE COMPONENT ============

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ============ SECTION 1: HERO SECTION ============ */}
      <section className="relative w-full min-h-screen bg-white -mb-10 overflow-hidden">
        {/* Background Image - Full width and height */}
        <div 
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: `url(${DUMMY_HERO_BACKGROUND})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Optional overlay for better text readability */}
          <div className=" "></div>
        </div>

        {/* Four Corner Icons with updated positions */}
        <CornerIcon position="top-left" src={DUMMY_CORNER_TOP_LEFT} />
        <CornerIcon position="top-right" src={DUMMY_CORNER_TOP_RIGHT} />
        <CornerIcon position="bottom-left" src={DUMMY_CORNER_BOTTOM_LEFT} />
        <CornerIcon position="bottom-right" src={DUMMY_CORNER_BOTTOM_RIGHT} />

        {/* Main Content - Centered */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-32 md:pb-48">
          {/* Horizontal Marquee (Centered with exact width) */}
          <div className="w-full flex justify-center mb-4">
            <BusinessHorizontalMarquee />
          </div>
          {/* Three Line Header with relative positioning for corner icons */}
          <div className="relative text-center max-w-4xl mx-auto w-full">
            {/* Three Line Header */}
            <div className="relative z-20">
              {/* Line 1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-[54px] font-bold text-gray-900 mb-1">
                Effortless and Intelligent
              </h1>

              {/* Line 2 */}
              <h1 className="text-3xl sm:text-4xl lg:text-[54px] font-bold text-gray-900 mb-1">
                Finance Management for Your
              </h1>

              {/* Line 3 - Purple with Underline */}
              <div className="relative inline-block">
                <h1 className="text-3xl sm:text-4xl lg:text-[54px] font-bold text-purple-600 mb-2">
                  Business
                </h1>
                {/* Underline */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4/4 h-1.5 bg-purple-600 rounded-full "></div>
              </div>
            </div>
          </div>
          {/* Two Line Sentence */}
          <div className="relative z-20 text-center max-w-2xl mx-auto mt-6 mb-10">
            <p className="text-lg sm:text-xl text-gray-600 mb-1 whitespace-nowrap">
             A smart financial tool designed for businesses to optimize cash flow, grow
            </p>
            <p className="text-lg sm:text-xl text-gray-600">
                your capital intelligently, and manage expenditures with confidence.
            </p>
          </div>
          {/* Download Button */}
          <div className="relative z-20 mt-2">
            <DownloadButton />
          </div>
        </div>
      </section>

      {/* ============ SECTION 2: FEATURES GRID (EXACT SAME AS REFERENCE) ============ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-12 md:pb-20 bg-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-medium text-black mb-2 border border-gray-300 rounded-full px-4 py-1 inline-block bg-transparent">
            • Our Products •
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Designed to help your business{" "}
            <span className="text-gray-400">save smarter, </span> spend <br />
            efficiently,{" "}
            <span className="text-gray-400">plan strategically.</span> 
          </h2>
          <p className="text-base text-gray-600">
            Select the product that fits your needs and apply today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            imagePath={DUMMY_CARD_1_IMAGE}
            title="Fast Payment anytime, anywhere"
            description="Both local and international payment, fast, secure, and effortless transactions"
            ctaContent={<PillButtonWithIcon text="Payments" />}
          />
          <PaymentFeatureCard />
          <FeatureCard
            imagePath={DUMMY_CARD_3_IMAGE}
            title="Budget Smarter, Spend Better"
            description="Automatically save in USD or NGN while gaining control over how your business budgets."
            ctaContent={<PillButtonWithIcon text="Budget" />}
          />
        </div>
      </section>

      <FeaturesSection
        title="With myStash you get"
        description="Our core values as an organization reflects in our business ethics"
        features={[
          {
            iconPath: "/icons/padlock.svg",
            title: "Secure Funds",
            description:
              "Your Business fund is protected with advanced encryption and trusted systems-giving you total peace of mind.",
          },
          {
            iconPath: "/icons/rocket.svg",
            title: "Data security",
            description:
              " Bank-grade encryptions and industry-leading security protocols keep your dara secure in transit and at rest.",
          },
          {
            iconPath: "/icons/planet.svg",
            title: "Diverse Options",
            description:
              "From budgets, to savings and payment,  we provide solutions that fit every business financial journey.",
          },
        ]}
      />

      {/* ============ SECTION 4: SLIDING STACK EFFECT ============ */}
      <SlidingStackContainer />

      {/* ============ SECTION 5: TESTIMONIALS CAROUSEL ============ */}
      <SectionFive />
      <ContactFormSection />
      <AppDownloadSection showHeaderAndLogos={true} />
    </div>
  );
}