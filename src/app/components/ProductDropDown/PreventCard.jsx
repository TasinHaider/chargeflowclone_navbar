import Image from 'next/image';
import React from 'react';
import preventbg from '../../../../public/productCardImages/prevent.png';
import automationbg from '../../../../public/productCardImages/automation.png';
import alertsbg from '../../../../public/productCardImages/alerts.png';
import insightsbg from '../../../../public/productCardImages/insights.png';
import connectbg from '../../../../public/productCardImages/connect.png';

const PreventCard = () => {
  // Senior-level UI constants
  const cardStyle = { backgroundImage: 'linear-gradient(221deg, #1c1c1c 0%, #151515 98%)' };
  const blueGlowStyle = { background: 'linear-gradient(to top, rgba(52, 72, 255, 0.08) 0%, transparent 80%)' };

  // Reusable Span Class to keep code clean and professional
  const learnMoreSpanClass = `
    absolute bottom-4 right-4 z-30 px-4 py-1.5 rounded-full text-[13px] font-medium text-white 
    opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
    border border-white/10 hover:border-white/40
    transition-all duration-500 ease-out cursor-pointer
  `;

  return (
    <div className="flex w-full justify-between p-4 bg-transparent gap-2">

      {/* CARD 1: PREVENT */}
      <div style={cardStyle} className="group relative w-[225px] h-[315px] flex-shrink-0 p-6 rounded-2xl border border-white/[0.04] overflow-hidden font-inter transition-all duration-500 hover:border-white/[0.12] cursor-pointer will-change-transform">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" style={blueGlowStyle} />
        <div className="absolute inset-0 pointer-events-none">
          <Image src={preventbg} alt="" fill className="object-cover grayscale opacity-30 transition-none" priority />
          <Image src={preventbg} alt="" fill className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent z-20" />
        </div>
        <div className="relative z-30">
          <header className="flex items-center gap-2">
            <h5 className="text-white text-[16px] font-medium">Prevent</h5>
            <span className="px-1.5 py-0.5 rounded-full bg-white text-[8px] font-bold text-black tracking-tight uppercase">NEW</span>
          </header>
          <p className="mt-4 text-[#97A3B6] text-[14px] leading-relaxed">Stop friendly fraud, block digital shoplifters & prevent the next chargeback.</p>
        </div>
        <span className={learnMoreSpanClass} style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}>Learn More</span>
      </div>

      {/* CARD 2: AUTOMATION */}
      <div style={cardStyle} className="group relative w-[225px] h-[315px] flex-shrink-0 p-6 rounded-2xl border border-white/[0.04] overflow-hidden font-inter transition-all duration-500 hover:border-white/[0.12] cursor-pointer will-change-transform">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" style={blueGlowStyle} />
        <div className="absolute inset-0 pointer-events-none">
          <Image src={automationbg} alt="" fill className="object-cover grayscale opacity-30 transition-none" />
          <Image src={automationbg} alt="" fill className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent z-20" />
        </div>
        <div className="relative z-30">
          <h5 className="text-white text-[16px] font-medium">Automation</h5>
          <p className="mt-4 text-[#97A3B6] text-[14px] leading-relaxed">Fully automated chargeback recovery with 4x ROI guarantee.</p>
        </div>
        <span className={learnMoreSpanClass} style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}>Learn More</span>
      </div>

      {/* CARD 3: ALERTS */}
      <div style={cardStyle} className="group relative w-[225px] h-[315px] flex-shrink-0 p-6 rounded-2xl border border-white/[0.04] overflow-hidden font-inter transition-all duration-500 hover:border-white/[0.12] cursor-pointer will-change-transform">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" style={blueGlowStyle} />
        <div className="absolute inset-0 pointer-events-none">
          <Image src={alertsbg} alt="" fill className="object-cover grayscale opacity-30 transition-none" />
          <Image src={alertsbg} alt="" fill className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent z-20" />
        </div>
        <div className="relative z-30">
          <h5 className="text-white text-[16px] font-medium">Alerts</h5>
          <p className="mt-4 text-[#97A3B6] text-[14px] leading-relaxed">Cut 90% of chargebacks before they happen, powered by Visa and Mastercard.</p>
        </div>
        <span className={learnMoreSpanClass} style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}>Learn More</span>
      </div>

      {/* CARD 4: INSIGHTS */}
      <div style={cardStyle} className="group relative w-[225px] h-[315px] flex-shrink-0 p-6 rounded-2xl border border-white/[0.04] overflow-hidden font-inter transition-all duration-500 hover:border-white/[0.12] cursor-pointer will-change-transform">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" style={blueGlowStyle} />
        <div className="absolute right-0 bottom-0 w-full h-[180px] pointer-events-none z-20">
          <Image src={insightsbg} alt="" fill className="object-contain object-bottom grayscale opacity-30 transition-none" />
          <Image src={insightsbg} alt="" fill className="object-contain object-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent z-30" />
        </div>
        <div className="relative z-[60]">
          <header className="flex items-center gap-2">
            <h5 className="text-white text-[16px] font-medium">Insights</h5>
            <span className="px-1.5 py-0.5 rounded-full bg-gray-800 text-[8px] font-bold text-[#97A3B6] uppercase tracking-tight">FREE</span>
          </header>
          <p className="mt-4 text-[#97A3B6] text-[14px] leading-relaxed">Get a bird's-eye view into your payments and chargebacks.</p>
        </div>
        <span className={learnMoreSpanClass} style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}>Learn More</span>
      </div>

      {/* CARD 5: CONNECT */}
      <div style={cardStyle} className="group relative w-[225px] h-[315px] flex-shrink-0 p-6 rounded-2xl border border-white/[0.04] overflow-hidden font-inter transition-all duration-500 hover:border-white/[0.12] cursor-pointer will-change-transform">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" style={blueGlowStyle} />
        <div className="absolute inset-0 pointer-events-none">
          <Image src={connectbg} alt="" fill className="object-cover grayscale opacity-30 transition-none" />
          <Image src={connectbg} alt="" fill className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] z-20" />
        </div>
        <div className="relative z-30">
          <header className="flex items-center gap-2">
            <h5 className="text-white text-[16px] font-medium">Connect</h5>
            <span className="px-1.5 py-0.5 rounded-full bg-gray-800 text-[8px] font-bold text-[#97A3B6] uppercase tracking-tight">PLATFORMS</span>
          </header>
          <p className="mt-4 text-[#97A3B6] text-[14px] leading-relaxed">Integrate Chargeflow into your platform via Embedding or API.</p>
        </div>
        <span className={learnMoreSpanClass} style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}>Learn More</span>
      </div>

    </div>
  );
};

export default PreventCard;