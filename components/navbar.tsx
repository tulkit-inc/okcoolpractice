"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/components/_navbar.scss";

const NAVBAR_BAR_HEIGHT_VW_CONFIG = 5;
const NAVBAR_MIN_HEIGHT_PX_CONFIG = 50;
const NAVBAR_MAX_HEIGHT_PX_CONFIG = 80;
const LOGO_INITIAL_BASE_SIZE_VW_CONFIG = 100;
const LOGO_FINAL_VISUAL_SIZE_VW_CONFIG = 10;
const SCROLL_ANIMATION_RANGE_PX = 300;

const Navbar = () => {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [yTranslationEndPx, setYTranslationEndPx] = useState(0);

    const handleMouseEnterDropdown = () => setIsDropdownOpen(true);
    const handleMouseLeaveDropdown = () => setIsDropdownOpen(false);

    useEffect(() => {
        const calculatePixelOffsets = () => {
            if (typeof window !== "undefined") {
                const vh = window.innerHeight;
                const vw = window.innerWidth;

                const initialLogoCenterY_px = 0.80 * vh;
                
                const navBarHeightFromVW = (NAVBAR_BAR_HEIGHT_VW_CONFIG / 100) * vw;
                const actualNavbarHeightPx = Math.max(
                    NAVBAR_MIN_HEIGHT_PX_CONFIG,
                    Math.min(navBarHeightFromVW, NAVBAR_MAX_HEIGHT_PX_CONFIG)
                );
                const finalLogoCenterYInNavbar_px = actualNavbarHeightPx / 2;
                
                setYTranslationEndPx(finalLogoCenterYInNavbar_px - initialLogoCenterY_px);
            }
        };

        calculatePixelOffsets();
        window.addEventListener("resize", calculatePixelOffsets);
        return () => window.removeEventListener("resize", calculatePixelOffsets);
    }, []);

    const logoScale = useTransform(
        scrollY,
        [0, SCROLL_ANIMATION_RANGE_PX],
        [1, LOGO_FINAL_VISUAL_SIZE_VW_CONFIG / LOGO_INITIAL_BASE_SIZE_VW_CONFIG]
    );

    const yOffset = useTransform(
        scrollY,
        [0, SCROLL_ANIMATION_RANGE_PX],
        [0, yTranslationEndPx]
    );

    const logoBaseStyle = useMemo(() => ({
        width: `${LOGO_INITIAL_BASE_SIZE_VW_CONFIG}vw`,
        height: `${LOGO_INITIAL_BASE_SIZE_VW_CONFIG}vw`,
    }), []);

    return (
        <>
            <nav className="navbar-bar">
                <div className="navbar-links-section navbar-links-left">
                    <Link href="/" className={pathname === "/" || pathname === "/home" ? "active" : ""}>Home</Link>
                    <div className="dropdown" onMouseEnter={handleMouseEnterDropdown} onMouseLeave={handleMouseLeaveDropdown}>
                        <button className="dropdown-trigger" aria-expanded={isDropdownOpen} aria-haspopup="true">About</button>
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                <Link href="/about/team">Our Team</Link>
                                <Link href="/about/mission">Our Mission</Link>
                                <Link href="/about/history">History</Link>
                            </div>
                        )}
                    </div>
                    <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
                </div>
                <div className="navbar-logo-spacer" />
                <div className="navbar-links-section navbar-links-right">
                    <Image src="/next.svg" alt="Next.js Logo" width={40} height={40} />
                </div>
            </nav>

            <motion.div className="logo-initial-positioner">
                <motion.div
                    className="animated-logo"
                    style={{
                        ...logoBaseStyle,
                        scale: logoScale,
                        y: yOffset,
                    }}
                >
                    <Image src="/uu06.svg" fill alt="Company Logo" priority />
                </motion.div>
            </motion.div>
        </>
    );
};

export default Navbar;