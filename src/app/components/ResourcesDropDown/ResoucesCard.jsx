import Image from 'next/image'
import React from 'react'
import blogprimary from '../../../../public/resourcesCardImages/blog-primary.png';
import blogsecondary from '../../../../public/resourcesCardImages/blog-secondary.png';
import reportsprimary from '../../../../public/resourcesCardImages/report-primary.png';
import reportssecondary from '../../../../public/resourcesCardImages/report-secondary.png';
import podcastprimary from '../../../../public/resourcesCardImages/podcast-primary.png';
import podcastsecondary from '../../../../public/resourcesCardImages/podcast-secondary.png';
import webinarsprimary from '../../../../public/resourcesCardImages/webinars-primary.png';
import webinarssecondary from '../../../../public/resourcesCardImages/webinars-secondary.png';
import { IoSearch } from "react-icons/io5";

const ResoucesCard = () => {
    return (
        <section>
            <div className='flex w-full justify-between p-4 bg-transparent'>

                {/* CARD 1: BLOG */}
                <div className="group relative w-[228px] h-[315px] flex-shrink-0 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden font-inter transition-all duration-500 hover:border-white/10 cursor-pointer">
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                        style={{ backgroundImage: 'linear-gradient(221deg, #1c1c1c 0%, #151515 98%)' }}
                    />
                    <div className="absolute w-80 h-80 left-4 top-10 pointer-events-none z-20">
                        <Image
                            src={blogprimary}
                            alt=""
                            fill
                            className="object-contain object-bottom grayscale opacity-30 transition-none"
                            priority
                        />
                        <Image
                            src={blogsecondary}
                            alt=""
                            fill
                            className="object-contain object-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent z-20 group-hover:opacity-0 transition-opacity duration-500" />
                    </div>
                    <div className="relative z-30">
                        <h5 className="text-white text-[16px] font-medium">Blog</h5>
                    </div>
                </div>

                {/* CARD 2 */}
                <div className="group relative w-[228px] h-[315px] flex-shrink-0 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden font-inter transition-all duration-500 hover:border-white/10 cursor-pointer">
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                        style={{ backgroundImage: 'linear-gradient(221deg, #1c1c1c 0%, #151515 98%)' }} />
                    <div className="absolute w-80 h-80 left-4 top-10 pointer-events-none z-20">
                        <Image
                            src={reportsprimary}
                            alt=""
                            fill
                            className="object-contain object-bottom grayscale opacity-30 transition-none"
                            priority
                        />
                        <Image
                            src={reportssecondary}
                            alt=""
                            fill
                            className="object-contain object-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent z-20 group-hover:opacity-0 transition-opacity duration-500" />
                    </div>
                    <div className="relative z-30">
                        <h5 className="text-white text-[16px] font-medium">Reports</h5>
                    </div>
                </div>

                {/* CARD 3 */}
                <div className="group relative w-[228px] h-[315px] flex-shrink-0 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden font-inter transition-all duration-500 hover:border-white/10 cursor-pointer">
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                        style={{ backgroundImage: 'linear-gradient(221deg, #1c1c1c 0%, #151515 98%)' }}
                    />
                    <div className="absolute w-80 h-80 left-4 top-10 pointer-events-none z-20">
                        <Image
                            src={podcastprimary}
                            alt=""
                            fill
                            className="object-contain object-bottom grayscale opacity-30 transition-none"
                            priority
                        />
                        <Image
                            src={podcastsecondary}
                            alt=""
                            fill
                            className="object-contain object-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent z-20 group-hover:opacity-0 transition-opacity duration-500" />
                    </div>
                    <div className="relative z-30">
                        <h5 className="text-white text-[16px] font-medium">Podcast</h5>
                    </div>
                </div>

                {/* CARD 4 */}
                <div className="group relative w-[228px] h-[315px] flex-shrink-0 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden font-inter transition-all duration-500 hover:border-white/10 cursor-pointer">
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                        style={{ backgroundImage: 'linear-gradient(221deg, #1c1c1c 0%, #151515 98%)' }} />
                    <div className="absolute w-80 h-80 left-4 top-10 pointer-events-none z-20">
                        <Image
                            src={webinarsprimary}
                            alt=""
                            fill
                            className="object-contain object-bottom grayscale opacity-30 transition-none"
                            priority
                        />
                        <Image
                            src={webinarssecondary}
                            alt=""
                            fill
                            className="object-contain object-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent z-20 group-hover:opacity-0 transition-opacity duration-500" />
                    </div>
                    <div className="relative z-30">
                        <h5 className="text-white text-[16px] font-medium">Webinars</h5>
                    </div>
                </div>

                {/* CARD 5: ROI & Reason Codes - Fixed Radius */}
                <div className="flex flex-col gap-2 w-[195px] h-[315px] flex-shrink-0">
                    {/* TOP PARTITION */}
                    <div className="group flex-1 p-5 flex flex-col justify-between bg-[#151515] rounded-2xl border border-white/5 transition-all duration-500 hover:border-white/10 cursor-pointer overflow-hidden relative">

                        {/* Bottom Blue Glow Overlay */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                            style={{
                                background: 'linear-gradient(to top, rgba(52, 72, 255, 0.15) 0%, transparent 60%)'
                            }}
                        />

                        <div className="relative z-10">
                            <h5 className="text-white text-[14px] font-medium leading-tight">ROI Calculator</h5>
                            <div className='mt-4 p-2.5 border-2 border-gray-700 rounded-3xl flex items-center justify-between font-inter font-bold'>
                                <p className='text-[9px] text-[#97A3B6] transition-colors duration-300 group-hover:text-[#3448FF]'>1.020</p>
                                <p className='text-[10px] text-white'>HOURS</p>
                            </div>
                            <div className='mt-1.5 p-2.5 border-2 border-gray-700 rounded-3xl flex items-center justify-between font-inter font-bold'>
                                <p className='text-[9px] text-[#97A3B6] transition-colors duration-300 group-hover:text-[#3448FF]'>$7,500</p>
                                <p className='text-[10px] text-white'>USD</p>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM PARTITION */}
                    <div className="group flex-1 p-5 flex flex-col justify-start bg-[#151515] rounded-3xl border border-white/5 transition-all duration-500 hover:border-white/10 cursor-pointer overflow-hidden relative">

                        {/* Bottom Blue Glow Overlay */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                            style={{
                                background: 'linear-gradient(to top, rgba(52, 72, 255, 0.15) 0%, transparent 60%)'
                            }}
                        />

                        <div className="relative z-10">
                            <h5 className="text-white text-[14px] font-medium leading-tight">Reason Codes</h5>
                            <div className='mt-12 p-2.5 border-2 border-gray-700 rounded-3xl flex items-center justify-between font-inter font-bold'>
                                <p className='text-[9px] text-white'>
                                    Enter Code:{" "}
                                    <span className="text-[#97A3B6] transition-colors duration-300 group-hover:text-[#3448FF]">
                                        12.7
                                    </span>
                                </p>
                                <p className='text-[10px] text-white'>
                                    <IoSearch className="transition-transform duration-300 group-hover:scale-110" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ResoucesCard