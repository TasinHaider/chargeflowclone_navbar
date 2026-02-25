import Image from 'next/image';
import React from 'react';
import allcasebg from '../../../../public/customersCardImages/allcasestudies.png';
import obvibg from '../../../../public/customersCardImages/obvibg.png';
import obvi from '../../../../public/customersCardImages/obvilogo.png';
import elementorbg from '../../../../public/customersCardImages/elementor.png';
import elementor from '../../../../public/customersCardImages/elementorlogo.png';

const CustomersCard = () => {
  return (
    <div className="flex w-full justify-between p-4 bg-transparent gap-2">

      {/* CARD 1: ALL CASE STUDIES (Previous logic) */}
      <div className="group relative h-[315px] w-[370px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[0.88em] border border-white/5 bg-[#151515] p-6 font-inter transition-all duration-300 hover:border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <Image src={allcasebg} alt="allcasebg" fill className="object-contain transition-transform duration-700 ease-out" priority />
          <div className="absolute inset-0" />
        </div>
        <div className="relative z-10">
          <h5 className="text-sm font-medium text-white">All Case Studies</h5>
        </div>
      </div>

      {/* CARD 2: OBVI */}
      <div className="relative w-[185px] h-[315px] flex-shrink-0 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden group cursor-pointer">
        <div className="absolute inset-0">
          <Image
            src={obvibg}
            alt="obvibg"
            fill
            className="object-contain   transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div>
            <Image
              src={obvi}
              alt="obvi"
              className="object-contain"
              priority
            />
          </div>
          <span className="absolute bottom-0 right-0 px-1.5 py-0.5 rounded-full bg-gray-800 text-[#97a3b6] text-[9px] font-bold">
            eCommerce
          </span>
        </div>
      </div>

      {/* CARD 3: ELEMENTOR */}
      <div className="relative w-[185px] h-[315px] flex-shrink-0 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden group cursor-pointer">
        <div className="absolute inset-0">
          <Image
            src={elementorbg}
            alt="elementorbg"
            fill
            className="object-contain transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 h-full">
          <div className="inline-block">
            <Image
              src={elementor}
              alt="elementor"
              className="object-contain"
              priority
            />
          </div>

          {/* Kept exactly as your original code */}
          <span className="absolute bottom-0 right-0 px-1.5 py-0.5 rounded-full bg-gray-800 text-[#97a3b6] text-[9px] font-bold uppercase">
            eCommerce
          </span>
        </div>
      </div>

      {/* CARD 4*/}
      <div className="relative w-[185px] h-[315px] flex-shrink-0 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden group cursor-pointer">
        <div className="absolute inset-0">
          <Image
            src={obvibg}
            alt="obvibg"
            fill
            className="object-contain   transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div>
            <Image
              src={obvi}
              alt="obvi"
              className="object-contain"
              priority
            />
          </div>
          <span className="absolute bottom-0 right-0 px-1.5 py-0.5 rounded-full bg-gray-800 text-[#97a3b6] text-[9px] font-bold">
            eCommerce
          </span>
        </div>
      </div>

      {/* CARD 5*/}
      <div className="relative w-[185px] h-[315px] flex-shrink-0 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden group cursor-pointer">
        <div className="absolute inset-0">
          <Image
            src={obvibg}
            alt="obvibg"
            fill
            className="object-contain   transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div>
            <Image
              src={obvi}
              alt="obvi"
              className="object-contain"
              priority
            />
          </div>
          <span className="absolute bottom-0 right-0 px-1.5 py-0.5 rounded-full bg-gray-800 text-[#97a3b6] text-[9px] font-bold">
            eCommerce
          </span>
        </div>
      </div>


    </div>
  );
};

export default CustomersCard;