"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from "motion/react";
import MarqueePage from '../Marquee/page';
import icon from "../../../../public/icon.svg";
import chargeflow from '../../../../public/chargeflow.svg';

// Dropdowns
import CustomersDropdown from '../NavItems/CustomersDropdown/CustomersCard';
import PreventCard from '../NavItems/ProductDropDown/PreventCard';
import IntegrationCard from '../NavItems/IntegrationsDropDown/IntegrationCard';
import ResoucesCard from '../NavItems/ResourcesDropDown/ResoucesCard';
import CompanyCard from '../NavItems/CompanyDropDown/CompanyCard';
import { MdArrowOutward } from 'react-icons/md';

const NavbarDesktop = ({ isHovered, setIsHovered, activeTab, setActiveTab }) => {
    const transitionConfig = { duration: 0.7, ease: [0.23, 1, 0.32, 1] };
    const smoothTransition = "transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]";

    return (
        <div className="hidden md:flex flex-col items-center w-full">
            {/* Desktop Marquee */}
            <div
                style={{ maxWidth: isHovered ? '1200px' : '100%' }}
                className={`${smoothTransition} w-full overflow-hidden bg-black ${isHovered ? 'rounded-t-2xl border-x border-t border-white/5' : 'border-b border-white/0'}`}>
                <div className="min-h-[40px] px-2">
                    <MarqueePage />
                </div>
            </div>

            {/* Desktop Main Bar */}
            <div
                style={{ maxWidth: isHovered ? '1200px' : '100%' }}
                className={`${smoothTransition} w-full bg-black relative z-[70] ${isHovered ? 'rounded-b-2xl border-x border-b border-white/5 -mt-[2px]' : 'border-white/0 -mt-[2px]'}`}
            >
                <div className='max-w-[1200px] mx-auto px-4 lg:px-6 flex justify-between items-center py-2'>
                    <div className='flex items-center gap-1 overflow-hidden shrink-0'>
                        <Image src={icon} alt="Logo" className="brightness-0 invert shrink-0 lg:w-[25px] lg:h-full md:w-[20px]" width={24} height={24} />
                        <motion.div
                            initial={false}
                            animate={{ width: isHovered ? 0 : "auto", opacity: isHovered ? 0 : 1, marginRight: isHovered ? 0 : 4 }}
                            transition={transitionConfig}
                            className="flex overflow-hidden whitespace-nowrap items-center"
                        >
                            <Image src={chargeflow} alt="Chargeflow" className="brightness-0 invert lg:w-[130px] lg:h-full md:w-[100px] md:h-full" />
                        </motion.div>
                    </div>

                    <nav className='md:px-3 lg:px-5 py-2 bg-[#1A1A1A] hover:bg-black backdrop-blur-md border border-white/10 rounded-full hover:border-white/20 transition-colors'>
                        <ul className='flex items-center md:gap-4 lg:gap-6 font-inter font-semibold md:text-[8px] lg:text-[12px] text-white uppercase tracking-tight'>
                            <li onMouseEnter={() => { setIsHovered(true); setActiveTab('product'); }}><Link href='/'>Product</Link></li>
                            <li onMouseEnter={() => { setIsHovered(true); setActiveTab('customers'); }}><Link href='/'>Customers</Link></li>
                            <li onMouseEnter={() => { setIsHovered(true); setActiveTab('pricing'); }}><Link href='/'>Pricing</Link></li>
                            <li onMouseEnter={() => { setIsHovered(true); setActiveTab('integrations'); }}><Link href='/'>Integrations</Link></li>
                            <li onMouseEnter={() => { setIsHovered(true); setActiveTab('resources'); }}><Link href='/'>Resources</Link></li>
                            <li onMouseEnter={() => { setIsHovered(true); setActiveTab('company'); }}><Link href='/'>Company</Link></li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-2 lg:gap-3 shrink-0">
                        <div className="hidden sm:flex items-center gap-1 lg:gap-3">
                            <Link href="/" className="group flex items-center gap-1 md:px-3 lg:px-4 py-2 font-inter font-semibold md:text-[8px] lg:text-[12px] text-white uppercase tracking-wider rounded-full hover:bg-white/10 transition-all">
                                Sign in <MdArrowOutward className="text-[14px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                            <Link href="/" className="group flex items-center gap-1 px-3 lg:px-4 py-2 bg-[#3448FF] text-white font-inter font-semibold md:text-[8px] lg:text-[12px] rounded-full uppercase tracking-wider hover:bg-[#2333c4] transition-all">
                                Sign up <MdArrowOutward className="text-[14px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {activeTab && (
                        <motion.div
                            key={activeTab}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={transitionConfig}
                            className="w-full bg-black/40 backdrop-blur-xl overflow-hidden rounded-b-2xl"
                        >
                            <div className="relative z-10">
                                {activeTab === 'product' && <PreventCard />}
                                {activeTab === 'customers' && <CustomersDropdown />}
                                {activeTab === 'integrations' && <IntegrationCard />}
                                {activeTab === 'resources' && <ResoucesCard />}
                                {activeTab === 'company' && <CompanyCard />}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default NavbarDesktop;