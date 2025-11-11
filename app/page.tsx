'use client'; 

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Dummy Image Path Constants
const DUMMY_HERO_IMAGE = '/images/heroimage.svg';
const DUMMY_CARD_1_IMAGE = '/images/card1.svg';
const DUMMY_CARD_2_IMAGE = '/images/card2.svg';
const DUMMY_CARD_3_IMAGE = '/images/card3.svg';
const DUMMY_BUTTON_ICON = '/icons/Frame6.svg';
const DUMMY_SECTION_3_IMAGE_1 = '/images/female.svg';
const DUMMY_SECTION_3_IMAGE_2 = '/images/couple.svg';
const DUMMY_SECTION_4_ICON_1 = '/icons/security-shield.svg';
const DUMMY_SECTION_4_ICON_2 = '/icons/rocket.svg';
const DUMMY_SECTION_4_ICON_3 = '/icons/headset.svg';

const TEXT_COLOR = 'text-gray-700';
const PURPLE_COLOR = 'text-purple-700';

// --- Dynamic Components (Section 1) ---

const HorizontalMarquee = () => {
    const TEXTS = ['• Our Products •', '• Payment', '• Savings', '• Budget', '• Loans', '• Partnership']; 
    const SCROLL_ITEMS = [...TEXTS, ...TEXTS];

    const marqueeAnimation = {
        initial: { x: 0 },
        scrollLeft: { x: '-100%' }, 
        scrollRight: { x: 0 }
    };

    return (
        <div className={`text-sm font-medium ${TEXT_COLOR} h-6 mb-4 relative w-44 md:w-56 mx-auto md:mx-0`}> 
            <div className="overflow-hidden whitespace-nowrap w-full">
                <motion.div
                    className="inline-flex"
                    variants={marqueeAnimation}
                    initial="scrollLeft"
                    animate="scrollRight"
                    transition={{ 
                        x: { 
                            duration: 16,
                            ease: "linear", 
                            repeat: Infinity, 
                            repeatType: "reverse" as const,
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

            <div className="absolute inset-y-0 w-4 left-0 bg-linear-to-r from-white to-transparent opacity-100 z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 w-4 right-0 bg-linear-to-l from-white to-transparent opacity-100 z-10 pointer-events-none"></div>
        </div>
    );
};

const VerticalTextCarousel = () => {
    const TEXTS = ['Future', 'You and', 'Everyone']; 
    const [index, setIndex] = useState(0);
    const wordHeight = 85; 

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % TEXTS.length);
        }, 2500); 
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="inline-block overflow-hidden align-bottom ml-3 relative"
            style={{ height: `${wordHeight}px`, width: '300px', paddingTop: '8px' }}> 
            <motion.div 
                animate={{ y: -index * wordHeight }} 
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="relative h-full"
            >
                {TEXTS.map((text, i) => (
                    <div key={i} className="absolute inset-x-0 font-extrabold px-3 text-4xl sm:text-5xl lg:text-6xl leading-none flex items-center"
                        style={{ top: `${i * wordHeight}px`, height: `${wordHeight}px` }}>
                        <span className={text === 'Everyone' ? PURPLE_COLOR : 'text-gray-900'}>
                            {text}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

// --- CTA Buttons ---
interface ButtonProps {
    text: string;
    styleType: 'primary' | 'secondary';
}

const CTAButton = ({ text, styleType }: ButtonProps) => {
    const primaryClasses = "bg-purple-700 text-white hover:bg-purple-800"; 
    const secondaryClasses = "bg-purple-100 text-purple-700 hover:bg-purple-200"; 
    const classes = styleType === 'primary' ? primaryClasses : secondaryClasses;

    return (
        <Link href="#" className={`px-8 py-3 text-base font-medium rounded-full transition-colors duration-200 ${classes}`}>
            {text}
        </Link>
    );
};

const PillIcon = () => (
    <img 
        src={DUMMY_BUTTON_ICON} 
        alt="CTA Arrow" 
        className="w-4 h-4 mr-2 object-contain"
        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/16x16/7C3AED/FFFFFF?text=>>'}}
    />
);

const PillButtonWithIcon = ({ text }: { text: string }) => (
    <Link href="#" className="inline-flex items-center text-purple-700 text-xs border border-purple-100 bg-purple-100 px-5 py-2 rounded-full hover:bg-purple-200 transition-colors">
        <PillIcon />
        {text}
    </Link>
);

// --- Section 2: Feature Cards ---
interface FeatureCardProps {
    imagePath: string;
    title: string;
    description: string;
    ctaContent: React.ReactNode;
}

const FeatureCard = ({ imagePath, title, description, ctaContent }: FeatureCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div className="relative flex flex-col p-3 sm:p-5 pr-0 sm:pr-0 bg-white transition-shadow duration-300 rounded-xl h-full min-h-[360px] border border-gray-200 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            
            <motion.div className="absolute bottom-2 right-4 z-10"
                initial={{ x: '120%', opacity: 0 }}
                animate={{ x: isHovered ? '0%' : '120%', opacity: isHovered ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                style={{ willChange: 'transform, opacity' }}>
                <img src={imagePath} alt={title + " visual"} className="w-[211px] h-[206px] object-contain" 
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/211x206/CCCCCC/FFFFFF?text=SLIDE+IN'}}/>
            </motion.div>

            <div className="flex flex-col grow text-left relative z-20">
                <h3 className="text-xl font-semibold text-gray-900 mb-0 mt-0">{title}</h3> 
                <p className="text-sm text-gray-600 mb-0 max-w-[85%] leading-snug">{description}</p>
                <div className="mt-auto mr-10">{ctaContent}</div> 
            </div>
        </div>
    );
};

const PaymentFeatureCard = () => {
    return (
        <div className="relative flex flex-col p-3 sm:p-5 pr-0 sm:pr-0 bg-white transition-shadow duration-300 rounded-xl h-full min-h-[360px] border border-gray-200">
            <div className="absolute bottom-2 right-4 z-0 opacity-70">
                <img src={DUMMY_CARD_2_IMAGE} alt="Payment icon" className="w-[211px] h-[206px] object-contain"
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/211x206/CCCCCC/FFFFFF?text=CARD+2+VISUAL'}}/>
            </div>

            <div className="flex flex-col grow text-left relative z-20">
                <h3 className="text-xl font-semibold text-gray-900 mb-0 mt-0">Fast Payment anytime, anywhere</h3>
                <p className="text-sm text-gray-600 mb-0 max-w-[85%] leading-snug">Secure and fast payment access to all bank accounts and transfers globally.</p>
                <div className="mt-auto"><PillButtonWithIcon text="Payment" /></div>
            </div>
        </div>
    );
}

// --- Section 3 Components ---
const SectionThreePartOne = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            {/* 1a: Left Content */}
            <div className="w-full md:w-1/2">
                <div className="flex justify-between items-start mb-4">
                    <p className="text-sm font-semibold text-purple-600">• Smart Banking •</p>
                    <span className="text-xs text-purple-700 bg-purple-100 px-3 py-1 rounded-full">New Feature</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Intelligent financial management for modern life
                </h2>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Our advanced algorithms help you save automatically, invest wisely, and grow your wealth 
                    without the complexity. Experience banking that adapts to your lifestyle and goals.
                </p>
                
                <PillButtonWithIcon text="Explore Features" />
            </div>

            {/* 1b: Right Image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img src={DUMMY_SECTION_3_IMAGE_1} alt="Smart banking features" className="w-full max-w-md object-contain"
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/500x400/7C3AED/FFFFFF?text=Smart+Banking'}}/>
            </div>
        </div>
    );
};

const SectionThreePartTwo = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8">
            {/* 2a: Left Image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img src={DUMMY_SECTION_3_IMAGE_2} alt="Secure transactions" className="w-full max-w-md object-contain"
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/500x400/10B981/FFFFFF?text=Secure+Transactions'}}/>
            </div>

            {/* 2b: Right Content */}
            <div className="w-full md:w-1/2">
                <p className="text-sm font-semibold text-purple-600 mb-2">• Security First •</p>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Bank-level security for all your transactions
                </h2>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Your financial data is protected with enterprise-grade encryption and multi-factor authentication. 
                    Rest easy knowing your money and personal information are safe with our advanced security measures.
                </p>
                
                <PillButtonWithIcon text="Learn About Security" />
            </div>
        </div>
    );
};

// --- Section 4: Features with Icons ---
interface FeatureIconCardProps {
    iconPath: string;
    title: string;
    description: string;
}

const FeatureIconCard = ({ iconPath, title, description }: FeatureIconCardProps) => {
    return (
        <div className="bg-purple-100 rounded-xl p-6 sm:p-8 border border-purple-100 transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col items-start text-left">
                <img 
                    src={iconPath} 
                    alt={title + " icon"} 
                    className="w-16 h-16 mb-6 object-contain"
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/64x64/7C3AED/FFFFFF?text=ICON'}}
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

const SectionFour = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-white border-t border-gray-200 relative">
            {/* Header Content */}
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Why Choose Our Financial Platform
                </h2>
                <p className="text-lg text-gray-600">
                    Experience the difference with our comprehensive suite of financial tools designed 
                    to simplify your life and accelerate your financial growth.
                </p>
            </div>

            {/* Decorative Lines and Circles Container */}
            <div className="relative">
                {/* Upper Horizontal Line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gray-200 -mt-4"></div>
                
                {/* Lower Horizontal Line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gray-200 -mb-4"></div>
                
                {/* Left Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200"></div>
                
                {/* Right Vertical Line */}
                <div className="absolute right-8 top-0 bottom-0 w-px bg-gray-200"></div>

                {/* Rings - Upper Line - moved further up */}
                <div className="absolute top-0 left-8 right-8 flex justify-between -mt-5"> {/* Changed from -mt-2 to -mt-6 */}
                    {/* Thick rings (purple-600) */}
                    <div className="w-3 h-3 border-3 border-purple-300 rounded-full bg-white shadow-sm"></div>
                    <div className="w-3 h-3 border-2 border-purple-100 rounded-full bg-white shadow-sm"></div> {/* Faint ring */}
                    <div className="w-3 h-3 border-3 border-purple-300 rounded-full bg-white shadow-sm"></div>
                    <div className="w-3 h-3 border-2 border-purple-100 rounded-full bg-white shadow-sm"></div> {/* Faint ring */}
                </div>

                {/* Rings - Lower Line - moved further down */}
                <div className="absolute bottom-0 left-8 right-8 flex justify-between -mb-5"> {/* Changed from -mb-2 to -mb-6 */}
                    {/* Reverse pattern */}
                    <div className="w-3 h-3 border-2 border-purple-100 rounded-full bg-white shadow-sm"></div> {/* Faint ring */}
                    <div className="w-3 h-3 border-3 border-purple-300 rounded-full bg-white shadow-sm"></div>
                    <div className="w-3 h-3 border-2 border-purple-100 rounded-full bg-white shadow-sm"></div> {/* Faint ring */}
                    <div className="w-3 h-3 border-3 border-purple-300 rounded-full bg-white shadow-sm"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8 relative z-10 px-8">
                    <FeatureIconCard
                        iconPath={DUMMY_SECTION_4_ICON_1}
                        title="Bank-Level Security"
                        description="Your financial data is protected with military-grade encryption and multi-factor authentication. We prioritize your privacy and security above all else."
                    />
                    <FeatureIconCard
                        iconPath={DUMMY_SECTION_4_ICON_2}
                        title="Lightning Fast"
                        description="Experience instant transactions and real-time updates. Our optimized platform ensures you never wait for your financial operations to complete."
                    />
                    <FeatureIconCard
                        iconPath={DUMMY_SECTION_4_ICON_3}
                        title="24/7 Support"
                        description="Get help whenever you need it with our round-the-clock customer support team. We're here to assist you with any questions or concerns."
                    />
                </div>
            </div>
        </section>
    );
};

// --- Main Page Component ---
export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Section 1: Hero Section */}
            <section className="relative w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left z-10">
                            <HorizontalMarquee />
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
                                <span className="block whitespace-nowrap">Smarter finance for a</span>
                                <span className="block whitespace-nowrap">
                                    smarter <VerticalTextCarousel />
                                </span>
                            </h1>
                            <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                                A financial tool that makes your money work for you. Save effortlessly, grow your wealth intelligently, and spend with confidence.
                            </p>
                            <div className="mt-8 flex justify-center md:justify-start space-x-4">
                                <CTAButton text="Contact us" styleType="secondary" /> 
                                <CTAButton text="Download app" styleType="primary" /> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 w-1/2 h-full order-1 md:order-2 flex items-center justify-start pl-8">
                    <div className="w-full h-full max-w-none rounded-l-xl flex items-center justify-center overflow-hidden">
                        <img src={DUMMY_HERO_IMAGE} alt="Hero Visual" className="w-full h-full object-contain pt-10"/>
                    </div>
                </div>
            </section>
            
            {/* Section 2: Features Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-20 md:pb-32 bg-white border-t border-gray-200">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-sm font-semibold text-purple-600 mb-2">• Our Products •</p>
                    <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Designed to help you <span className="text-gray-300">save smarter, </span> spend efficiently, <span className="text-gray-300">plan strategically,</span> and give loans— all through secure, innovative tools.
                    </h2>
                    <p className="text-lg text-gray-600">
                        Select the product that fits your needs and apply today.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        imagePath={DUMMY_CARD_1_IMAGE}
                        title="Activate your Smart Savings"
                        description="Auto save monthly income. Drive more sales and start earning your planned monthly."
                        ctaContent={<PillButtonWithIcon text="Start Saving" />}
                    />
                    <PaymentFeatureCard />
                    <FeatureCard
                        imagePath={DUMMY_CARD_3_IMAGE}
                        title="Budget Smarter, Spend Better"
                        description="View monthly expenses. Get detailed insights and reach your money goals faster."
                        ctaContent={<PillButtonWithIcon text="Budget" />}
                    />
                </div>
            </section>

            {/* Section 3: Additional Features */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-white border-t border-gray-200">
                <SectionThreePartOne />
                <SectionThreePartTwo />
            </section>

            {/* Section 4: Icon Features */}
            <SectionFour />
        </div>
    );
}