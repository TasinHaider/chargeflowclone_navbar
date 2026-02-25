"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";
import MarqueePage from './Marquee';
import icon from "../../../public/icon.svg";
import chargeflow from '../../../public/chargeflow.svg';

const Navbar = () => {
    const [mounted, setMounted] = useState(false);

    //prevent Hydration Mismatch errors
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="fixed top-0 left-0 w-full z-50">
            <div className="min-h-[40px] bg-black overflow-hidden">
                {mounted ? (
                    <MarqueePage />
                ) : (
                    <div className="h-[40px] w-full bg-black" />
                )}
            </div>

            <div className="w-full py-1 bg-black">
                <div className='container mx-auto px-6 flex justify-between items-center'>

                    <div className='flex items-center gap-1'>
                        <Image
                            src={icon}
                            alt="Logomark"
                            className="brightness-0 invert"
                        />
                        <Image
                            src={chargeflow}
                            alt="Chargeflow"
                            className="brightness-0 invert"
                        />
                    </div>

                    <nav className='px-5 py-2 bg-[#1A1A1A] backdrop-blur-md border border-white/10 rounded-full hidden md:block'>
                        <ul className='flex items-center gap-6 font-inter font-semibold text-[12px] text-white/80'>
                            <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-tight">
                                <Link href='/'>Product</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-tight">
                                <Link href='/'>Customers</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-tight">
                                <Link href='/'>Pricing</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-tight">
                                <Link href='/'>Integrations</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-tight">
                                <Link href='/'>Resources</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-tight">
                                <Link href='/'>Company</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/"
                            className="group flex items-center gap-1 px-4 py-2 font-inter font-semibold text-[12px] text-white uppercase tracking-wider rounded-full transition-all duration-300 hover:bg-white/10"
                        >
                            Sign in
                            <MdArrowOutward className="text-[14px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>

                        <Link
                            href="/"
                            className="group flex items-center gap-1 px-4 py-2 bg-[#3448FF] text-white font-inter font-semibold text-[12px] rounded-full transition-all duration-300 uppercase tracking-wider hover:bg-[#2333c4]"
                        >
                            Sign up
                            <MdArrowOutward className="text-[14px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Navbar;