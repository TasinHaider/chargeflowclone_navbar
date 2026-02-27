import Image from 'next/image';
import React from 'react';
import chargeflowsecondary from '../../../../../public/companyCardImages/chargeflow-secondary.png';
import chargeflowprimary from '../../../../../public/companyCardImages/chargeflow-primary.png';
import brandsecondary from '../../../../../public/companyCardImages/brand-secondary.png';
import brandprimary from '../../../../../public/companyCardImages/brand-primary.png';
import careerprimary from '../../../../../public/companyCardImages/career-primary.png';
import careersecondary from '../../../../../public/companyCardImages/career-secondary.png';
import partnerprimary from '../../../../../public/companyCardImages/partner-primary.png';
import partnersecondary from '../../../../../public/companyCardImages/partner-secondary.png';
import contactprimary from '../../../../../public/companyCardImages/contact-primary.png';
import contactsecondary from '../../../../../public/companyCardImages/contact-secondary.png';

const CompanyCard = () => {
    const cardBg = { backgroundImage: 'linear-gradient(221deg, #1c1c1c 0%, #151515 98%)' };
    const blueGlow = { background: 'linear-gradient(to top, rgba(52, 72, 255, 0.08) 0%, transparent 80%)' };

    return (
        <div className="flex w-full items-start justify-center p-4 bg-transparent gap-2 font-inter md:max-w-[760px] lg:max-w-[1240px] mx-auto">

            {/* CARD 1: FEATURED CASE STUDY */}
            <div
                style={cardBg}
                // Original h-[318px] and w-[650px] now explicitly lg:
                className="group relative w-full md:w-[350px] md:h-[280px] lg:h-[318px] lg:w-[650px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/[0.05] p-8 transition-all duration-500 hover:border-white/[0.15] will-change-transform font-inter"
            >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" style={blueGlow} />

                <div className="absolute inset-0 pointer-events-none z-10">
                    <Image
                        src={chargeflowprimary}
                        alt=""
                        fill
                        className="object-contain object-bottom grayscale opacity-30 transition-all duration-700"
                        priority
                    />
                    <Image
                        src={chargeflowsecondary}
                        alt=""
                        fill
                        className="object-contain object-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent z-20 group-hover:opacity-0 transition-opacity duration-500" />
                </div>

                <div className="relative z-30">
                    <h5 className="text-[16px] font-medium text-white tracking-tight">Who We Are</h5>
                    <p className="mt-4 text-[#97A3B6] text-[14px] leading-relaxed max-w-[280px] pr-20">
                        The story behind the Chargeflow.
                    </p>
                </div>

                <span
                    className="absolute bottom-8 right-8 z-30 px-4 py-1.5 rounded-full text-[13px] font-medium text-white 
                    opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
                    border border-white/10 hover:border-white/40
                    transition-all duration-500 ease-out cursor-pointer"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
                >
                    Learn More
                </span>
            </div>

            {/* CARD 2: GRID SECTIONS */}
            <div className='grid grid-cols-2 gap-2 flex-grow'>

                {/* Brand Card - Original h-[155px] w-[240px] now lg: */}
                <div style={cardBg} className="group relative w-full md:w-[170px] md:h-[136px] lg:h-[155px] lg:w-[240px] cursor-pointer overflow-hidden rounded-2xl border border-white/[0.05] p-6 transition-all duration-500 hover:border-white/[0.15] will-change-transform">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" style={blueGlow} />
                    <div className="absolute inset-0 pointer-events-none z-10 p-2">
                        <Image src={brandprimary} alt="" fill className="object-contain object-bottom grayscale opacity-30 transition-all duration-700 scale-95" priority />
                        <Image src={brandsecondary} alt="" fill className="object-contain object-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 scale-95" priority />
                    </div>
                    <h5 className="relative z-30 text-[16px] font-medium text-white tracking-tight">Brand</h5>
                </div>

                {/* Careers Card - Original h-[155px] w-[240px] now lg: */}
                <div style={cardBg} className="group relative w-full md:w-[170px] md:h-[136px] lg:h-[155px] lg:w-[240px] cursor-pointer overflow-hidden rounded-2xl border border-white/[0.05] p-6 transition-all duration-500 hover:border-white/[0.15] will-change-transform">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" style={blueGlow} />
                    <div className="absolute inset-0 pointer-events-none z-10 p-2">
                        <Image src={careerprimary} alt="" fill className="object-contain object-bottom grayscale opacity-30 transition-all duration-700 scale-95" priority />
                        <Image src={careersecondary} alt="" fill className="object-contain object-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 scale-95" priority />
                    </div>
                    <header className="relative z-30 flex items-center justify-between">
                        <h5 className="text-white text-[16px] font-medium">Careers</h5>
                        <span className="px-1.5 py-0.5 rounded-full bg-white/10 text-[10px] font-bold text-[#97A3B6] uppercase tracking-tight">Hiring</span>
                    </header>
                </div>

                {/* Partner Card - Original h-[155px] w-[240px] now lg: */}
                <div style={cardBg} className="group relative w-full md:w-[170px] md:h-[136px] lg:h-[155px] lg:w-[240px] cursor-pointer overflow-hidden rounded-2xl border border-white/[0.05] p-6 transition-all duration-500 hover:border-white/[0.15] will-change-transform">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" style={blueGlow} />
                    <div className="absolute inset-0 pointer-events-none z-10 p-2">
                        <Image src={partnerprimary} alt="" fill className="object-contain object-bottom grayscale opacity-30 transition-all duration-700 scale-95" priority />
                        <Image src={partnersecondary} alt="" fill className="object-contain object-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 scale-95" priority />
                    </div>
                    <h5 className="relative z-30 text-[16px] font-medium text-white tracking-tight">Become a Partner</h5>
                </div>

                {/* Contact Card - Original h-[155px] w-[240px] now lg: */}
                <div style={cardBg} className="group relative w-full md:w-[170px] md:h-[136px] lg:h-[155px] lg:w-[240px] cursor-pointer overflow-hidden rounded-2xl border border-white/[0.05] p-6 transition-all duration-500 hover:border-white/[0.15] will-change-transform">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out pointer-events-none z-10" style={blueGlow} />
                    <div className="absolute inset-0 pointer-events-none z-10 p-2">
                        <Image src={contactprimary} alt="" fill className="object-contain object-bottom grayscale opacity-30 transition-all duration-700 scale-95" priority />
                        <Image src={contactsecondary} alt="" fill className="object-contain object-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 scale-95" priority />
                    </div>
                    <h5 className="relative z-30 text-[16px] font-medium text-white tracking-tight">Contact Us</h5>
                </div>
            </div>
        </div>
    );
};

export default CompanyCard;