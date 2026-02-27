"use client";

import React from 'react';
import Image from 'next/image';

// Image Imports
import preventsecondary from '../../../../../public/productCardImages/preventsecondary.png';
import preventsprimary from '../../../../../public/productCardImages/preventprimary.png';
import automationsecondary from '../../../../../public/productCardImages/automation-secondary.png';
import automationprimary from '../../../../../public/productCardImages/automation-primary.png';
import alertssecondary from '../../../../../public/productCardImages/alerts-secondary.png';
import alertsprimary from '../../../../../public/productCardImages/alerts-primary.png';
import insightsprimary from '../../../../../public/productCardImages/insights.png';
import contactsecondary from '../../../../../public/productCardImages/connect-secondary.png';
import contactprimary from '../../../../../public/productCardImages/connect-primary.png';

const PreventCardMobile = () => {
    return (
        <div className="flex flex-col w-full gap-2 px-0 py-4">

            {/* CARD 1: PREVENT */}
            <div
                style={{ backgroundImage: 'linear-gradient(221deg, #161616 0%, #0b0b0b 98%)' }}
                className="group relative w-full h-[136px] rounded-[14px] overflow-hidden font-inter transition-all duration-500 cursor-pointer flex flex-col justify-center p-5"
            >
                <div className="relative z-30 w-full flex flex-col pointer-events-none">
                    <header className="flex items-center gap-2">
                        <h5 className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[-0.05em]">
                            Prevent
                        </h5>
                        <div className="px-2 py-2 rounded-full bg-white flex items-center justify-center">
                            <span className="text-black text-[10px] font-bold leading-none tracking-tight uppercase">
                                NEW
                            </span>
                        </div>
                    </header>
                    <p className="mt-[8px] text-[#97a3b6] text-[14px] leading-[1.34] font-normal normal-case tracking-[-0.02em] max-w-[90%]">
                        Stop friendly fraud, block digital shoplifters & prevent the next chargeback before it happens.
                    </p>
                </div>

                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    <div className="absolute bottom-8 left-20 w-[200px] h-full">
                        <Image
                            src={preventsecondary}
                            alt="Prevent Background"
                            width={220}
                            height={150}
                            style={{ objectFit: 'contain', objectPosition: 'right center', scale: '1.6' }}
                            className="w-full h-full grayscale opacity-100 transition-all duration-700 group-hover:opacity-0"
                        />
                        <Image
                            src={preventsprimary}
                            alt="Prevent Foreground"
                            width={200}
                            height={136}
                            style={{ objectFit: 'contain', objectPosition: 'right center', scale: '1.6' }}
                            className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700 z-20"
                        />
                    </div>
                </div>
            </div>

            {/* CARD 2: AUTOMATION */}
            <div
                style={{ backgroundImage: 'linear-gradient(221deg, #1c1c1c 0%, #151515 98%)' }}
                className="group relative w-full h-[136px] rounded-[14px] overflow-hidden font-inter transition-all duration-500 cursor-pointer flex flex-col justify-center p-5"
            >
                <div className="relative z-30 w-full flex flex-col pointer-events-none">
                    <header className="flex items-center gap-2">
                        <h5 className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[-0.05em]">
                            Automation
                        </h5>
                    </header>
                    <p className="mt-[8px] text-[#97a3b6] text-[14px] leading-[1.34] font-normal normal-case tracking-[-0.02em] max-w-[90%]">
                        Fully automated chargeback recovery with 4x ROI guarantee.
                    </p>
                </div>

                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    <div className="absolute bottom-8 left-20 w-[200px] h-full">
                        <Image
                            src={automationsecondary}
                            alt="Automation Background"
                            width={220}
                            height={150}
                            style={{ objectFit: 'contain', objectPosition: 'right center', scale: '1.6' }}
                            className="w-full h-full grayscale opacity-100 transition-all duration-700 group-hover:opacity-0"
                        />
                        <Image
                            src={automationprimary}
                            alt="Automation Foreground"
                            width={200}
                            height={136}
                            style={{ objectFit: 'contain', objectPosition: 'right center', scale: '1.6' }}
                            className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700 z-20"
                        />
                    </div>
                </div>
            </div>

            {/* CARD 3: ALERTS */}
            <div
                style={{ backgroundImage: 'linear-gradient(221deg, #1c1c1c 0%, #151515 98%)' }}
                className="group relative w-full h-[136px] rounded-[14px] overflow-hidden font-inter transition-all duration-500 cursor-pointer flex flex-col justify-center p-5"
            >
                <div className="relative z-30 w-full flex flex-col pointer-events-none">
                    <header className="flex items-center gap-2">
                        <h5 className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[-0.05em]">
                            Alerts
                        </h5>
                    </header>
                    <p className="mt-[8px] text-[#97a3b6] text-[14px] leading-[1.34] font-normal normal-case tracking-[-0.02em] max-w-[90%] pr-2.5">
                        Cut 90% of chargebacks before they happen, powered by Visa and Mastercard.
                    </p>
                </div>

                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    <div className="absolute bottom-8 left-20 w-[200px] h-full">
                        <Image
                            src={alertssecondary}
                            alt="Alerts Background"
                            width={220}
                            height={150}
                            style={{ objectFit: 'contain', objectPosition: 'right center', scale: '1.6' }}
                            className="w-full h-full grayscale opacity-100 transition-all duration-700 group-hover:opacity-0"
                        />
                        <Image
                            src={alertsprimary}
                            alt="Alerts Foreground"
                            width={200}
                            height={136}
                            style={{ objectFit: 'contain', objectPosition: 'right center', scale: '1.6' }}
                            className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700 z-20"
                        />
                    </div>
                </div>
            </div>

            {/* CARD 4: INSIGHTS */}
            <div
                style={{ backgroundImage: 'linear-gradient(221deg, #1c1c1c 0%, #151515 98%)' }}
                className="group relative w-full h-[136px] rounded-[14px] overflow-hidden font-inter transition-all duration-500 cursor-pointer flex flex-col justify-center p-5"
            >
                <div className="relative z-30 w-full flex flex-col pointer-events-none">
                    <header className="flex items-center gap-2">
                        <h5 className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[-0.05em]">
                            Insights
                        </h5>
                        <div className="px-2 py-2 rounded-full bg-gray-800 flex items-center justify-center">
                            <span className="text-[#97A3B6] text-[10px] font-bold leading-none uppercase">FREE</span>
                        </div>
                    </header>
                    <p className="mt-[8px] text-[#97a3b6] text-[14px] leading-[1.34] font-normal normal-case tracking-[-0.02em] max-w-[90%]">
                        Get a bird's-eye view into your payments and chargebacks, all in a single, powerful dashboard.
                    </p>
                </div>

                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    <div className="absolute bottom-8 left-20 w-[200px] h-full">
                        <Image
                            src={insightsprimary}
                            alt="Insights"
                            width={220}
                            height={150}
                            style={{ objectFit: 'contain', objectPosition: 'right center', scale: '1.6' }}
                            className="w-full h-full grayscale opacity-100 transition-all duration-700 group-hover:opacity-0"
                        />
                        <Image
                            src={insightsprimary}
                            alt="Insights Foreground"
                            width={200}
                            height={136}
                            style={{ objectFit: 'contain', objectPosition: 'right center', scale: '1.6' }}
                            className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700 z-20"
                        />
                    </div>
                </div>
            </div>

            {/* CARD 5: CONNECT */}
            <div
                style={{ backgroundImage: 'linear-gradient(221deg, #1c1c1c 0%, #151515 98%)' }}
                className="group relative w-full h-[136px] rounded-[14px] overflow-hidden font-inter transition-all duration-500 cursor-pointer flex flex-col justify-center p-5"
            >
                <div className="relative z-30 w-full flex flex-col pointer-events-none">
                    <header className="flex items-center gap-2">
                        <h5 className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[-0.05em]">
                            Connect
                        </h5>
                        <div className="px-2 py-2 rounded-full bg-gray-800 flex items-center justify-center">
                            <span className="text-[#97A3B6] text-[10px] font-bold leading-none uppercase">PLATFORMS</span>
                        </div>
                    </header>
                    <p className="mt-[8px] text-[#97a3b6] text-[14px] leading-[1.34] font-normal normal-case tracking-[-0.02em] max-w-[90%]">
                        Integrate Chargeflow into your platform via Embedding or API.
                    </p>
                </div>

                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    <div className="absolute bottom-8 left-20 w-[200px] h-full">
                        <Image
                            src={contactsecondary}
                            alt="Connect Background"
                            width={220}
                            height={150}
                            style={{ objectFit: 'contain', objectPosition: 'right center', scale: '1.6' }}
                            className="w-full h-full grayscale opacity-100 transition-all duration-700 group-hover:opacity-0"
                        />
                        <Image
                            src={contactprimary}
                            alt="Connect Foreground"
                            width={200}
                            height={136}
                            style={{ objectFit: 'contain', objectPosition: 'right center', scale: '1.6' }}
                            className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700 z-20"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreventCardMobile;