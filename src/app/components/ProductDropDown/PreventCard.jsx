import Image from 'next/image';
import React from 'react';
import preventbg from '../../../../public/productCardImages/prevent.png';
import automationbg from '../../../../public/productCardImages/automation.png';
import alertsbg from '../../../../public/productCardImages/alerts.png';
import insightsbg from '../../../../public/productCardImages/insights.png';
import connectbg from '../../../../public/productCardImages/connect.png';

const PreventCard = () => {
  return (
    <div className="col-span-5 flex gap-2 w-full">
      {/* CARD 1 */}
      <div className="relative flex-1 min-h-[314px] p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden font-inter">
        <div className="absolute inset-0 pointer-events-none">
          <Image src={preventbg} alt="preventbg" fill className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent" />
        </div>
        <div className="relative z-10">
          <header className="flex items-center gap-2">
            <h5 className="text-white text-sm font-medium">Prevent</h5>
            <span className="px-1.5 py-0.5 rounded-full bg-white text-[8px] font-bold text-black uppercase tracking-tight">NEW</span>
          </header>
          <p className="mt-4 text-[#97A3B6] text-[14px] leading-relaxed">
            Stop friendly fraud, block digital shoplifters & prevent the next chargeback.
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="relative flex-1 min-h-[314px] p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden font-inter">
        <div className="absolute inset-0 pointer-events-none">
          <Image src={automationbg} alt="automationbg" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent" />
        </div>
        <div className="relative z-10">
          <h5 className="text-white text-sm font-medium">Automation</h5>
          <p className="mt-4 text-[#97A3B6] text-[14px] leading-relaxed">
            Fully automated chargeback recovery with 4x ROI guarantee.
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="relative flex-1 min-h-[314px] p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden font-inter">
        <div className="absolute inset-0 pointer-events-none">
          <Image src={alertsbg} alt="alertsbg" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent" />
        </div>
        <div className="relative z-10">
          <h5 className="text-white text-sm font-medium">Alerts</h5>
          <p className="mt-4 text-[#97A3B6] text-[14px] leading-relaxed">
            Cut 90% of chargebacks before they happen, powered by Visa and Mastercard.
          </p>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="relative flex-1 min-h-[314px] p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden font-inter">
        <div className="absolute inset-0 pointer-events-none">

          <Image
            src={insightsbg}
            alt="insightsbg"
            fill
            className="object-contain object-right-bottom opacity-50 contrast-[1.1] scale-95 translate-x-2 translate-y-2"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/40 to-transparent" />
        </div>

        <div className="relative z-10">
          <header className="flex items-center gap-2">
            <h5 className="text-white text-sm font-medium">Insights</h5>
            <span className="px-1.5 py-0.5 rounded-full bg-[#1A1A1A] text-[8px] font-bold text-[#97A3B6] uppercase tracking-tight">FREE</span>
          </header>
          <p className="mt-4 text-[#97A3B6] text-[14px] leading-relaxed max-w-[240px]">
            Get a bird's-eye view into your payments and chargebacks, all in a single, powerful dashboard.
          </p>
        </div>
      </div>

      {/* CARD 5 */}
      <div className="relative flex-1 min-h-[314px] p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden font-inter">
        <div className="absolute inset-0 pointer-events-none">
          <Image src={connectbg} alt="connectbg" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent" />
        </div>
        <div className="relative z-10">
          <header className="flex items-center gap-2">
            <h5 className="text-white text-sm font-medium">Connect</h5>
            <span className="px-1.5 py-0.5 rounded-full bg-[#1A1A1A] text-[8px] font-bold text-[#97A3B6] uppercase tracking-tight">FOR PLATFORMS</span>
          </header>
          <p className="mt-4 text-[#97A3B6] text-[14px] leading-relaxed">
            Integrate Chargeflow into your platform, either via Embedding, Whitelabel or API.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreventCard;