import Image from 'next/image';
import React from 'react';
import preventbg from '../../../../public/productCardImages/prevent.png';
import automationbg from '../../../../public/productCardImages/automation.png';
import alertsbg from '../../../../public/productCardImages/alerts.png';
import insightsbg from '../../../../public/productCardImages/insights.png';
import connectbg from '../../../../public/productCardImages/connect.png';

const PreventCard = () => {
  return (
    <div className="flex w-full justify-between p-4 bg-transparent gap-2">

      {/* CARD 1: PREVENT */}
      <div className="relative w-[225px] h-[315px] flex-shrink-0 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden font-inter">
        <div className="absolute inset-0 pointer-events-none">
          <Image src={preventbg} alt="prevent" fill className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent" />
        </div>
        <div className="relative z-10">
          <header className="flex items-center gap-2">
            <h5 className="text-white text-sm font-medium">Prevent</h5>
            <span className="px-1.5 py-0.5 rounded-full bg-white text-[8px] font-bold text-black tracking-tight">NEW</span>
          </header>
          <p className="mt-4 text-[#97A3B6] text-[14px] leading-relaxed">
            Stop friendly fraud, block digital shoplifters & prevent the next chargeback.
          </p>
        </div>
      </div>

      {/* CARD 2: AUTOMATION */}
      <div className="relative w-[225px] h-[315px] flex-shrink-0 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden font-inter">
        <div className="absolute inset-0 pointer-events-none">
          <Image src={automationbg} alt="automation" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent" />
        </div>
        <div className="relative z-10">
          <h5 className="text-white text-sm font-medium">Automation</h5>
          <p className="mt-4 text-[#97A3B6] text-[14px] leading-relaxed">
            Fully automated chargeback recovery with 4x ROI guarantee.
          </p>
        </div>
      </div>

      {/* CARD 3: ALERTS */}
      <div className="relative w-[225px] h-[315px] flex-shrink-0 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden font-inter">
        <div className="absolute inset-0 pointer-events-none">
          <Image src={alertsbg} alt="alerts" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent" />
        </div>
        <div className="relative z-10">
          <h5 className="text-white text-sm font-medium">Alerts</h5>
          <p className="mt-4 text-[#97A3B6] text-[14px] leading-relaxed">
            Cut 90% of chargebacks before they happen, powered by Visa and Mastercard.
          </p>
        </div>
      </div>

      {/* CARD 4: INSIGHTS */}
      <div className="relative w-[225px] h-[315px] flex-shrink-0 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden font-inter">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src={insightsbg}
            alt="insights"
            fill
            className="object-contain object-right-bottom opacity-50 contrast-[1.1] scale-95 translate-x-2 translate-y-2"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/40 to-transparent" />
        </div>
        <div className="relative z-10">
          <header className="flex items-center gap-2">
            <h5 className="text-white text-sm font-medium">Insights</h5>
            <span className="px-1.5 py-0.5 rounded-full bg-gray-800 text-[8px] font-bold text-[#97A3B6] uppercase tracking-tight">FREE</span>
          </header>
          <p className="mt-4 text-[#97A3B6] text-[14px] leading-relaxed">
            Get a bird's-eye view into your payments and chargebacks.
          </p>
        </div>
      </div>

      {/* CARD 5: CONNECT */}
      <div className="relative w-[225px] h-[315px] flex-shrink-0 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden font-inter">
        <div className="absolute inset-0 pointer-events-none">
          <Image src={connectbg} alt="connect" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515]" />
        </div>
        <div className="relative z-10">
          <header className="flex items-center gap-2">
            <h5 className="text-white text-sm font-medium">Connect</h5>
            <span className="px-1.5 py-0.5 rounded-full bg-gray-800 text-[8px] font-bold text-[#97A3B6] uppercase tracking-tight">PLATFORMS</span>
          </header>
          <p className="mt-4 text-[#97A3B6] text-[14px] leading-relaxed">
            Integrate Chargeflow into your platform via Embedding or API.
          </p>
        </div>
      </div>

    </div>
  );
};

export default PreventCard;