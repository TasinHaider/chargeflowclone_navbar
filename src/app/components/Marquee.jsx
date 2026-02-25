import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import Marquee from "react-fast-marquee";
import logomark from "../../../public/logomark.svg";
import Image from 'next/image';

const MarqueePage = () => {
    return (
        <section>
            <Marquee
                className='py-2.5 bg-black text-white'
                speed={20}
                gradient={false}
                direction="left"
                pauseOnHover={true} // Only this prop is added to your original code
            >
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-4'>
                        <Image
                            src={logomark}
                            alt="Chargeflow Logo"
                            width={18}
                            height={18}
                            className="brightness-0 invert"
                        />
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#C3F967] drop-shadow-[0_0_3px_rgba(195,249,103,0.5)]"
                        >
                            <path
                                d="M15 1L4 17H13L11 29L22 13H13L15 1Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.5"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className='flex '><p className='font-inter font-normal text-[12px] '><span className='text-[#C3F967]'>ANNOUNCING OUT $35M SERIES A FUNDING</span> TO TAKE DOWN FRIENDLY FRAUD-READ MORE</p> <FiArrowRight />
                    </div>
                    <div className='flex items-center gap-4'>
                        <Image
                            src={logomark}
                            alt="Chargeflow Logo"
                            width={18}
                            height={18}
                            className="brightness-0 invert"
                        />
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#C3F967] drop-shadow-[0_0_3px_rgba(195,249,103,0.5)]"
                        >
                            <path
                                d="M15 1L4 17H13L11 29L22 13H13L15 1Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.5"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className='flex '><p className='font-inter font-normal text-[12px] '><span className='text-[#C3F967]'>ANNOUNCING OUT $35M SERIES A FUNDING</span> TO TAKE DOWN FRIENDLY FRAUD-READ MORE</p> <FiArrowRight />
                    </div>
                    <div className='flex items-center gap-4'>
                        <Image
                            src={logomark}
                            alt="Chargeflow Logo"
                            width={18}
                            height={18}
                            className="brightness-0 invert"
                        />
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#C3F967] drop-shadow-[0_0_3px_rgba(195,249,103,0.5)]"
                        >
                            <path
                                d="M15 1L4 17H13L11 29L22 13H13L15 1Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.5"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className='flex '><p className='font-inter font-normal text-[12px] '><span className='text-[#C3F967]'>ANNOUNCING OUT $35M SERIES A FUNDING</span> TO TAKE DOWN FRIENDLY FRAUD-READ MORE</p> <FiArrowRight />
                    </div>
                </div>
            </Marquee>
        </section>
    )
}

export default MarqueePage