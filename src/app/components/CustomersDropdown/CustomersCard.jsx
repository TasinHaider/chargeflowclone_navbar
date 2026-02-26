import Image from 'next/image';
import React from 'react';
import allcasebg from '../../../../public/customersCardImages/allcasestudies.png';
import obvibg from '../../../../public/customersCardImages/obvibg.png';
import obvi from '../../../../public/customersCardImages/obvilogo.png';
import elementorbg from '../../../../public/customersCardImages/elementor.png';
import elementor from '../../../../public/customersCardImages/elementorlogo.png';
import fanaticsbg from '../../../../public/customersCardImages/fanatics.png';
import fanatics from '../../../../public/customersCardImages/fanaticslogo.png';
import hexcladbg from '../../../../public/customersCardImages/hexclad.png';
import hexclad from '../../../../public/customersCardImages/hexcladlogo.png';

const CustomersCard = () => {
  return (
    <div className="flex w-full justify-between p-4 bg-transparent gap-2">

      {/* CARD 1: ALL CASE STUDIES */}
      <div className="group relative h-[315px] w-[370px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-[#151515] p-6 font-inter transition-all duration-500 hover:border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src={allcasebg}
            alt=""
            fill
            className="object-contain brightness-110 contrast-125 grayscale group-hover:opacity-0 transition-opacity duration-500"
            priority
          />
          <Image
            src={allcasebg}
            alt=""
            fill
            className="object-contain opacity-0 group-hover:opacity-100 group-hover:brightness-[1.4] group-hover:saturate-[1.6] transition-all duration-500 z-20"
            priority
          />
        </div>
        <div className="relative z-30">
          <h5 className="text-[16px] font-medium text-white tracking-tight">All Case Studies</h5>
        </div>
      </div>

      {/* CARD 2: OBVI */}
      <div className="group relative w-[185px] h-[315px] flex-shrink-0 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden cursor-pointer transition-all duration-500 hover:border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <Image src={obvibg} alt="" fill className="object-contain brightness-110 contrast-125 grayscale group-hover:opacity-0 transition-opacity duration-500" />
          <Image
            src={obvibg}
            alt=""
            fill
            className="object-contain opacity-0 group-hover:opacity-100 group-hover:brightness-[1.4] group-hover:saturate-[1.8] transition-all duration-700 z-20"
          />
        </div>
        <div className="relative z-30 flex flex-col h-full justify-between">
          <div className="grayscale brightness-150 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500">
            <Image src={obvi} alt="obvi logo" className="object-contain" priority />
          </div>
          <span className="self-end px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#97a3b6] text-[9px] font-bold uppercase tracking-widest">
            eCommerce
          </span>
        </div>
      </div>

      {/* CARD 3: ELEMENTOR */}
      <div className="group relative w-[185px] h-[315px] flex-shrink-0 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden cursor-pointer transition-all duration-500 hover:border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <Image src={elementorbg} alt="" fill className="object-contain brightness-110 contrast-125 grayscale group-hover:opacity-0 transition-opacity duration-500" />
          <Image src={elementorbg} alt="" fill className="object-contain opacity-0 group-hover:opacity-100 group-hover:brightness-[1.4] group-hover:saturate-[1.8] transition-all duration-700 z-20" />
        </div>
        <div className="relative z-30 flex flex-col h-full justify-between">
          <div className="grayscale brightness-150 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500">
            <Image src={elementor} alt="elementor logo" className="object-contain" priority />
          </div>
          <span className="self-end px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#97a3b6] text-[9px] font-bold uppercase tracking-widest">
            Saas
          </span>
        </div>
      </div>

      {/* CARD 4: FANATICS */}
      <div className="group relative w-[185px] h-[315px] flex-shrink-0 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden cursor-pointer transition-all duration-500 hover:border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <Image src={fanaticsbg} alt="" fill className="object-contain brightness-110 contrast-125 grayscale group-hover:opacity-0 transition-opacity duration-500" />
          <Image src={fanaticsbg} alt="" fill className="object-contain opacity-0 group-hover:opacity-100 group-hover:brightness-[1.4] group-hover:saturate-[1.8] transition-all duration-700 z-20" />
        </div>
        <div className="relative z-30 flex flex-col h-full justify-between">
          <div className="grayscale brightness-150 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500">
            <Image src={fanatics} alt="fanatics logo" className="object-contain" priority />
          </div>
          <span className="self-end px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#97a3b6] text-[9px] font-bold uppercase tracking-widest">
            Marketplace
          </span>
        </div>
      </div>

      {/* CARD 5: HEXCLAD */}
      <div className="group relative w-[185px] h-[315px] flex-shrink-0 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden cursor-pointer transition-all duration-500 hover:border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <Image src={hexcladbg} alt="" fill className="object-contain brightness-110 contrast-125 grayscale group-hover:opacity-0 transition-opacity duration-500" />
          <Image src={hexcladbg} alt="" fill className="object-contain opacity-0 group-hover:opacity-100 group-hover:brightness-[1.4] group-hover:saturate-[1.8] transition-all duration-700 z-20" />
        </div>
        <div className="relative z-30 flex flex-col h-full justify-between">
          <div className="grayscale brightness-150 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500">
            <Image src={hexclad} width={80} height={30} alt="hexclad logo" className="object-contain" priority />
          </div>
          <span className="self-end px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#97a3b6] text-[9px] font-bold uppercase tracking-widest">
            Travel
          </span>
        </div>
      </div>

    </div>
  );
};

export default CustomersCard;