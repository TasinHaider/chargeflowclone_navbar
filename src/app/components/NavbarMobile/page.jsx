"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowOutward, MdOutlineClose } from "react-icons/md";
import { RiMenuLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import icon from "../../../../public/icon.svg";
import { FaArrowDown } from "react-icons/fa";
import PreventCardMobile from '../NavItems/PreventCardMobile/PreventCardMobile';

const DashedLine = () => (
    <svg
        width="100%"
        height="6"
        viewBox="0 0 1200 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-100 w-full"
        preserveAspectRatio="none" >
        {/* Left Diamond */}
        <path d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3Z" fill="#364153" />
        {/* Right Diamond  */}
        <path d="M1199.89 3L1197 0.113249L1194.11 3L1197 5.88675L1199.89 3Z" fill="#364153" />
        {/* Dashed Line Path */}
        <line
            x1="6"
            y1="3"
            x2="1194"
            y2="3"
            stroke="#364153"
            strokeWidth="1"
            strokeDasharray="4 4" />
    </svg>
);

const NavbarMobile = () => {
    const [show, setShow] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isCustomersOpen, setIsCustomersOpen] = useState(false);
    const [isIntegrationOpen, setIsIntegrationOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);

    const listVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="md:hidden w-full px-4 mt-5 fixed top-0 left-0 z-[100]">
            <div className={`transition-all duration-700 rounded-2xl border 
                ${show
                    ? 'bg-black/90 backdrop-blur-2xl shadow-2xl border-white/[0.05] h-auto'
                    : 'bg-black border-white/[0.05] h-auto'} overflow-hidden flex flex-col`}>
                {/* Mobile Header */}
                <div className="flex justify-between items-center p-4 flex-shrink-0">
                    <Image src={icon} alt="Logo" className="brightness-0 invert cursor-pointer" width={22} height={22} />
                    <div className="text-white text-2xl cursor-pointer" onClick={() => setShow(!show)}>
                        {show ? <MdOutlineClose /> : <RiMenuLine />}
                    </div>
                </div>

                {/* Scrollable Content Area */}
                <AnimatePresence>
                    {show && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" >
                            <motion.ul
                                variants={listVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-col text-white font-bold uppercase tracking-widest" >

                                {/* SIGN IN / SIGN UP */}
                                <motion.li variants={itemVariants} className='py-4'>
                                    <div className="flex items-center justify-center gap-3 w-full">
                                        <Link
                                            href="/"
                                            className="w-2/5 group flex justify-center items-center gap-1 px-4 py-1.5 font-inter font-semibold text-[12px] text-white uppercase tracking-wider rounded-3xl transition-all duration-300 border border-transparent hover:border-white/10 hover:bg-white/5" >
                                            Sign in
                                            <MdArrowOutward className="text-[14px] opacity-60" />
                                        </Link>
                                        <Link href="/" className="w-3/5 group flex justify-center items-center gap-1 px-2.5 py-1.5 bg-[#3448FF] text-white font-inter font-semibold text-[12px] rounded-3xl uppercase tracking-wider hover:bg-[#2333c4]">
                                            Schedule a demo
                                            <MdArrowOutward className="text-[14px]" />
                                        </Link>
                                    </div>
                                </motion.li>

                                <DashedLine />
                                {/* PRODUCT SECTION */}
                                <motion.li variants={itemVariants} className='py-4'>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center justify-between cursor-pointer' onClick={() => setIsProductOpen(!isProductOpen)}>
                                            <span className='text-[#97A3B6] text-[11px]'>Product</span>
                                            <FaArrowDown className={`text-[#97A3B6] text-[10px] transition-transform duration-300 ${isProductOpen ? 'rotate-180' : ''}`} />
                                        </div>
                                        <AnimatePresence>
                                            {isProductOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                                                    className="overflow-hidden" >
                                                    <PreventCardMobile />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.li>

                                <DashedLine />

                                {/* Customer section */}
                                <motion.li variants={itemVariants} className='py-4'>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center justify-between cursor-pointer' onClick={() => setIsCustomersOpen(!isCustomersOpen)}>
                                            <span className='text-[#97A3B6] text-[11px]'>Customers</span>
                                            <FaArrowDown className={`text-[#97A3B6] text-[10px] transition-transform duration-300 ${isCustomersOpen ? 'rotate-180' : ''}`} />
                                        </div>
                                        <AnimatePresence>
                                            {isCustomersOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                                                    className="overflow-hidden" >
                                                    {/* Customer headlines */}
                                                    <ul className="flex flex-col gap-1 pt-4">
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">All Case Studies</li>
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">Obvi</li>
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">Elementor</li>
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">Wordtune</li>
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">Kyte</li>
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.li>
                                <DashedLine />

                                <motion.li variants={itemVariants} className='py-4'>
                                    <Link className='text-[#97A3B6] text-[11px]' href="/" onClick={() => setShow(false)}>PRICING</Link>
                                </motion.li>

                                <DashedLine />

                                {/* Integration section */}
                                <motion.li variants={itemVariants} className='py-4'>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center justify-between cursor-pointer' onClick={() => setIsIntegrationOpen(!isIntegrationOpen)}>
                                            <span className='text-[#97A3B6] text-[11px] uppercase'>Integrations</span>
                                            <FaArrowDown className={`text-[#97A3B6] text-[10px] transition-transform duration-300 ${isIntegrationOpen ? 'rotate-180' : ''}`} />
                                        </div>
                                        <AnimatePresence>
                                            {isIntegrationOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                                                    className="overflow-hidden" >
                                                    {/* Integrations headlines */}
                                                    <ul className="flex flex-col gap-1 pt-4">
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">All Integrations</li>
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">Stripe</li>
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">Shopify</li>
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">WooCommerce</li>
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.li>

                                <DashedLine />

                                {/* Resources section */}
                                <motion.li variants={itemVariants} className='py-4'>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center justify-between cursor-pointer' onClick={() => setIsResourcesOpen(!isResourcesOpen)}>
                                            <span className='text-[#97A3B6] text-[11px] uppercase'>Resources</span>
                                            <FaArrowDown className={`text-[#97A3B6] text-[10px] transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                                        </div>
                                        <AnimatePresence>
                                            {isResourcesOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                                                    className="overflow-hidden" >
                                                    {/* Resources headlines */}
                                                    <ul className="flex flex-col gap-1 pt-4">
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">Blog</li>
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">Webinars</li>
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">Reports</li>
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">Podcast</li>
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">ROI Calculator</li>
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">Reason Codes</li>
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.li>

                                <DashedLine />

                                {/* company section */}
                                <motion.li variants={itemVariants} className='py-4'>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center justify-between cursor-pointer' onClick={() => setIsCompanyOpen(!isCompanyOpen)}>
                                            <span className='text-[#97A3B6] text-[11px] uppercase'>Company</span>
                                            <FaArrowDown className={`text-[#97A3B6] text-[10px] transition-transform duration-300 ${isCompanyOpen ? 'rotate-180' : ''}`} />
                                        </div>
                                        <AnimatePresence>
                                            {isCompanyOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                                                    className="overflow-hidden" >
                                                    {/* Company headlines */}
                                                    <ul className="flex flex-col gap-1 pt-4">
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">Who we are</li>
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">Brand</li>
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">Become a Partner</li>
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">Careers</li>
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">ROI Calculator</li>
                                                        <li className="text-white text-[16px] font-medium leading-[1.2] normal-case tracking-[0px]">Contact us</li>
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.li>

                            </motion.ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default NavbarMobile;