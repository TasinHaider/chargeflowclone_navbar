import Image from 'next/image'
import React from 'react'
import stripe from '../../../../../public/integrationsCardImages/strip.png';
import shopify from '../../../../../public/integrationsCardImages/shopify.png';
import woocomerce from '../../../../../public/integrationsCardImages/woocommerce.png';
import integrationprimary from '../../../../../public/integrationsCardImages/integration-primary.png';
import integrationsecondary from '../../../../../public/integrationsCardImages/integration-secondary.png';

const IntegrationCard = () => {
    return (
        <section className="w-full bg-[#0a0a0a]">
            <div className='flex w-full justify-between p-4 bg-transparent gap-2 max-w-[1200px] mx-auto h-[315px]'>

                {/* LEFT LARGE CARD: ALL INTEGRATIONS */}
                <div className="relative w-[53%] h-full p-8 bg-[#151515] rounded-2xl overflow-hidden border border-white/5 group cursor-pointer transition-colors duration-500 hover:border-white/10">
                    <div className="absolute bottom-0 right-0 pointer-events-none w-full h-full">
                        {/* Base: Grayscale */}
                        <Image
                            src={integrationprimary}
                            alt=""
                            fill
                            className="object-contain object-bottom grayscale opacity-100 transition-none "
                            priority
                        />
                        {/* Hover: Full Color */}
                        <Image
                            src={integrationsecondary}
                            alt=""
                            fill
                            className="object-contain object-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
                            priority
                        />
                    </div>
                    <div className="relative z-30 font-inter">
                        <h5 className="text-white text-[18px] font-semibold tracking-tight">ALL Integrations</h5>
                        <p className="mt-3 text-[#97A3B6] text-[15px] leading-relaxed max-w-[280px]">
                            Choose from hundreds of integrated platforms.
                        </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent z-20 pointer-events-none" />
                </div>

                {/* RIGHT COLUMN: STACKED INTEGRATIONS */}
                <div className='flex flex-col gap-2 flex-1'>

                    {/* STRIPE */}
                    <div className="relative flex-1 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden group cursor-pointer transition-colors duration-500 hover:border-white/10">
                        <div className="absolute inset-0 pointer-events-none">
                            <Image src={stripe} alt="" fill className="object-contain object-right grayscale opacity-30 transition-none p-4" />
                            <Image src={stripe} alt="" fill className="object-contain object-right opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out z-10 p-4" />
                        </div>
                        <div className="relative z-30 flex items-center h-full">
                            <div>
                                <h5 className="text-white text-[16px] font-semibold tracking-tight">Stripe</h5>
                                <p className="text-[#97A3B6] text-[14px]">#1 Chargeback Solution for Stripe Merchants</p>
                            </div>
                        </div>
                    </div>

                    {/* SHOPIFY */}
                    <div className="relative flex-1 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden group cursor-pointer transition-colors duration-500 hover:border-white/10">
                        <div className="absolute inset-0 pointer-events-none">
                            <Image src={shopify} alt="" fill className="object-contain object-right grayscale opacity-30 transition-none p-4" />
                            <Image src={shopify} alt="" fill className="object-contain object-right opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out z-10 p-4" />
                        </div>
                        <div className="relative z-30 flex items-center h-full">
                            <div>
                                <h5 className="text-white text-[16px] font-semibold tracking-tight">Shopify</h5>
                                <p className="text-[#97A3B6] text-[14px]">Powering 30k+ Shopify Merchants</p>
                            </div>
                        </div>
                    </div>

                    {/* WOOCOMMERCE */}
                    <div className="relative flex-1 p-6 bg-[#151515] rounded-2xl border border-white/5 overflow-hidden group cursor-pointer transition-colors duration-500 hover:border-white/10">
                        <div className="absolute inset-0 pointer-events-none">
                            <Image src={woocomerce} alt="" fill className="object-contain object-right grayscale opacity-30 transition-none p-4" />
                            <Image src={woocomerce} alt="" fill className="object-contain object-right opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out z-10 p-4" />
                        </div>
                        <div className="relative z-30 flex items-center h-full">
                            <div>
                                <h5 className="text-white text-[16px] font-semibold tracking-tight">WooCommerce</h5>
                                <p className="text-[#97A3B6] text-[14px]">Native WooCommerce Integration</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default IntegrationCard;