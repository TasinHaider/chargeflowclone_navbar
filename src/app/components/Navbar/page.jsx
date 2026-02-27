"use client";

import React, { useState, useEffect } from 'react';
import NavbarDesktop from '../NavbarDesktop/page';
import NavbarMobile from '../NavbarMobile/page';

const NavbarPage = () => {
    const [mounted, setMounted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section
            onMouseLeave={() => {
                setIsHovered(false);
                setActiveTab(null);
            }}
            className="fixed top-0 left-0 w-full z-50 flex flex-col items-center"
        >
            <NavbarDesktop
                isHovered={isHovered}
                setIsHovered={setIsHovered}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <NavbarMobile />
        </section>
    );
};

export default NavbarPage;