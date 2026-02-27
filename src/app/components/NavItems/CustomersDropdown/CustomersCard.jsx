import Image from 'next/image';
import React from 'react';
import allcasesecondary from '../../../../../public/customersCardImages/all-case-studies-secondary.png';
import allcaseprimary from '../../../../../public/customersCardImages/all-case-studies-primary.png';
import obvisecondary from '../../../../../public/customersCardImages/obvi-secondary.png';
import obviprimary from '../../../../../public/customersCardImages/obvi-primary.png';
import obvi from '../../../../../public/customersCardImages/obvilogo.png';
import elementorsecondary from '../../../../../public/customersCardImages/elementor-secondary.png';
import elementorprimary from '../../../../../public/customersCardImages/elementor-primary.png';
import elementorlogo from '../../../../../public/customersCardImages/elementorlogo.png';
import fanaticssecondary from '../../../../../public/customersCardImages/fanatics-secondary.png';
import fanaticsprimary from '../../../../../public/customersCardImages/fanatics-primary.png';
import fanaticslogo from '../../../../../public/customersCardImages/fanaticslogo.png';
import hexcladsecondary from '../../../../../public/customersCardImages/hexclad-secondary.png';
import hexcladprimary from '../../../../../public/customersCardImages/hexclad-primary.png';
import hexcladlogo from '../../../../../public/customersCardImages/hexcladlogo.png';

const cardStyle = { backgroundImage: 'linear-gradient(221deg, #1c1c1c 0%, #151515 98%)' };
const blueGlowStyle = { background: 'linear-gradient(to top, rgba(52, 72, 255, 0.06) 0%, transparent 100%)' };

const CustomersCard = () => {
  // Shared class for the category spans to ensure pixel-level consistency
  const categorySpanClass = "self-end px-2.5 py-1 rounded-full bg-gray-900 border border-white/[0.08] text-[#97a3b6] text-[9px] font-bold uppercase tracking-widest group-hover:text-white group-hover:border-white/[0.2] transition-all duration-700";

  return (
    <div className="flex w-full justify-between p-4 bg-transparent gap-2 font-inter max-w-[1240px] mx-auto">

      {/* CARD 1: ALL CASE STUDIES */}
      <div
        style={cardStyle}
        className="group relative h-[315px] w-[370px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/[0.04] p-8 transition-all duration-500 hover:border-white/[0.12]"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out pointer-events-none z-10" style={blueGlowStyle} />
        <div className="absolute botttom-0 right-0 w-full h-full pointer-events-none">
          <Image src={allcasesecondary} alt="" fill className="object-contain grayscale opacity-100 transition-none" priority />
          <Image src={allcaseprimary} alt="" fill className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent z-25 group-hover:opacity-0 transition-opacity duration-500" />
        </div>
        <div className="relative z-30">
          <h5 className="text-[16px] font-medium text-white tracking-tight">All Case Studies</h5>
        </div>
      </div>

      {/* CARD 2: OBVI */}
      <div
        style={cardStyle}
        className="group relative w-[185px] h-[315px] flex-shrink-0 p-6 rounded-2xl border border-white/[0.04] overflow-hidden cursor-pointer transition-all duration-500 hover:border-white/[0.12]"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out pointer-events-none z-10" style={blueGlowStyle} />
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src={obviprimary}
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 80%' }}
            className="opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent z-20 group-hover:opacity-0 transition-opacity duration-500" />
        </div>
        <div className="relative z-30 flex flex-col h-full justify-between">
          <div className="w-[80px] h-[40px] relative grayscale brightness-150 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700">
            <Image src={obvi} alt="obvi logo" fill className="object-contain object-left" priority />
          </div>
          <span className={categorySpanClass}>eCommerce</span>
        </div>
      </div>

      {/* CARD 3: ELEMENTOR */}
      <div
        style={cardStyle}
        className="group relative w-[185px] h-[315px] flex-shrink-0 p-6 rounded-2xl border border-white/[0.04] overflow-hidden cursor-pointer transition-all duration-500 hover:border-white/[0.12]"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out pointer-events-none z-10" style={blueGlowStyle} />
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src={elementorprimary}
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 80%' }}
            className="opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent z-20 group-hover:opacity-0 transition-opacity duration-500" />
        </div>
        <div className="relative z-30 flex flex-col h-full justify-between">
          <div className="w-[110px] h-[30px] relative brightness-0 invert transition-all duration-700">
            <Image src={elementorlogo} alt="elementor logo" fill className="object-contain object-left" priority />
          </div>
          <span className={categorySpanClass}>SaaS</span>
        </div>
      </div>

      {/* CARD 4: FANATICS */}
      <div
        style={cardStyle}
        className="group relative w-[185px] h-[315px] flex-shrink-0 p-6 rounded-2xl border border-white/[0.04] overflow-hidden cursor-pointer transition-all duration-500 hover:border-white/[0.12]"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out pointer-events-none z-10" style={blueGlowStyle} />
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src={fanaticsprimary}
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 80%' }}
            className="opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent z-20 group-hover:opacity-0 transition-opacity duration-500" />
        </div>
        <div className="relative z-30 flex flex-col h-full justify-between">
          <div className="w-[85px] h-[30px] relative brightness-0 invert transition-all duration-700">
            <Image src={fanaticslogo} alt="fanatics logo" fill className="object-contain object-left" priority />
          </div>
          <span className={categorySpanClass}>Marketplace</span>
        </div>
      </div>

      {/* CARD 5: HEXCLAD */}
      <div
        style={cardStyle}
        className="group relative w-[185px] h-[315px] flex-shrink-0 p-6 rounded-2xl border border-white/[0.04] overflow-hidden cursor-pointer transition-all duration-500 hover:border-white/[0.12]"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out pointer-events-none z-10" style={blueGlowStyle} />
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src={hexcladprimary}
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 80%' }}
            className="opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent z-20 group-hover:opacity-0 transition-opacity duration-500" />
        </div>
        <div className="relative z-30 flex flex-col h-full justify-between">
          <div className="w-[80px] h-[30px] relative brightness-0 invert transition-all duration-700">
            <Image src={hexcladlogo} alt="hexclad logo" fill className="object-contain object-left" priority />
          </div>
          <span className={categorySpanClass}>Travel</span>
        </div>
      </div>

    </div>
  );
};

export default CustomersCard;