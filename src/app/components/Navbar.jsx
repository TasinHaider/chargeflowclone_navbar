"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";
import MarqueePage from './Marquee';
import icon from "../../../public/icon.svg";
import chargeflow from '../../../public/chargeflow.svg';
import { AnimatePresence, motion } from "motion/react";
import CustomersDropdown from './CustomersDropdown/CustomersCard';
import PreventCard from './ProductDropDown/PreventCard';
import IntegrationCard from './IntegrationsDropDown/IntegrationCard';
import ResoucesCard from './ResourcesDropDown/ResoucesCard';
import CompanyCard from './CompanyDropDown/CompanyCard';

const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const transitionConfig = { duration: 0.7, ease: [0.23, 1, 0.32, 1] };
    const smoothTransition = "transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]";

    const handleMouseEnter = (tab) => {
        setIsHovered(true);
        setActiveTab(tab);
    };

    if (!mounted) return null;

    return (
        <section
            onMouseLeave={() => {
                setIsHovered(false);
                setActiveTab(null);
            }}
            className="fixed top-0 left-0 w-full z-50 flex flex-col items-center"
        >
            {/* 1. Marquee Container */}
            <div
                style={{ maxWidth: isHovered ? '1200px' : '100%' }}
                className={`${smoothTransition} w-full overflow-hidden bg-black ${isHovered ? 'rounded-t-2xl border-x border-t border-white/5' : 'border-b border-white/0'
                    }`}
            >
                <div className="min-h-[40px] px-2">
                    <MarqueePage />
                </div>
            </div>

            {/* 2. Main Navbar Section */}
            <div
                style={{ maxWidth: isHovered ? '1200px' : '100%' }}
                className={`${smoothTransition} w-full bg-black relative ${isHovered ? 'rounded-b-2xl border-x border-b border-white/5 -mt-[2px]' : 'border-white/0 -mt-[2px]'
                    }`}
            >
                {/* FIX: replaced `container mx-auto` with `max-w-[1200px] mx-auto` */}
                <div className='max-w-[1200px] mx-auto px-6 flex justify-between items-center py-2'>
                    {/* Logo Group */}
                    <div className='flex items-center gap-1 overflow-hidden shrink-0'>
                        <Image src={icon} alt="Logomark" className="brightness-0 invert shrink-0" />
                        <motion.div
                            initial={false}
                            animate={{
                                width: isHovered ? 0 : "auto",
                                opacity: isHovered ? 0 : 1,
                                marginRight: isHovered ? 0 : 4
                            }}
                            transition={transitionConfig}
                            className="overflow-hidden whitespace-nowrap flex items-center"
                        >
                            <Image src={chargeflow} alt="Chargeflow" className="brightness-0 invert" />
                        </motion.div>
                    </div>

                    {/* Navigation */}
                    <nav className='px-5 py-2 bg-[#1A1A1A] backdrop-blur-md border border-white/10 rounded-full hidden md:block hover:border-white/20 transition-colors'>
                        <ul className='flex items-center gap-6 font-inter font-semibold text-[12px] text-white/80'>
                            <li onMouseEnter={() => handleMouseEnter('product')} className="hover:text-white transition-colors cursor-pointer uppercase tracking-tight">
                                <Link href='/'>Product</Link>
                            </li>
                            <li onMouseEnter={() => handleMouseEnter('customers')} className="hover:text-white transition-colors cursor-pointer uppercase tracking-tight">
                                <Link href='/'>Customers</Link>
                            </li>
                            <li onMouseEnter={() => handleMouseEnter('pricing')} className="hover:text-white transition-colors cursor-pointer uppercase tracking-tight">
                                <Link href='/'>Pricing</Link>
                            </li>
                            <li onMouseEnter={() => handleMouseEnter('integrations')} className="hover:text-white transition-colors cursor-pointer uppercase tracking-tight">
                                <Link href='/'>Integrations</Link>
                            </li>
                            <li onMouseEnter={() => handleMouseEnter('resources')} className="hover:text-white transition-colors cursor-pointer uppercase tracking-tight">
                                <Link href='/'>Resources</Link>
                            </li>
                            <li onMouseEnter={() => handleMouseEnter('company')} className="hover:text-white transition-colors cursor-pointer uppercase tracking-tight">
                                <Link href='/'>Company</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Buttons */}
                    <div className="flex items-center gap-3 shrink-0">
                        <Link href="/" className="group flex items-center gap-1 px-4 py-2 font-inter font-semibold text-[12px] text-white uppercase tracking-wider rounded-full hover:bg-white/10 transition-all">
                            Sign in <MdArrowOutward className="text-[14px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                        <Link href="/" className="group flex items-center gap-1 px-4 py-2 bg-[#3448FF] text-white font-inter font-semibold text-[12px] rounded-full uppercase tracking-wider hover:bg-[#2333c4] transition-all">
                            Sign up <MdArrowOutward className="text-[14px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>
                </div>

                {/* Dropdown Content */}
                <motion.div
                    key={activeTab}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={transitionConfig}
                    className="w-full bg-black/40 backdrop-blur-xl overflow-hidden rounded-b-2xl"
                >
                    <div>
                        {activeTab === 'product' && <PreventCard />}
                        {activeTab === 'customers' && <CustomersDropdown />}
                        {activeTab === 'integrations' && <IntegrationCard />}
                        {activeTab === 'resources' && <ResoucesCard />}
                        {activeTab === 'company' && <CompanyCard />}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Navbar;