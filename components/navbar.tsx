"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion"; // Add motion back

import "../styles/components/_navbar.scss";

// --- CONFIGURATION CONSTANTS (Responsive) ---
// const NAVBAR_BAR_HEIGHT_VW = 5; // Defined in SCSS

// THIS IS THE KEY CHANGE FOR INITIAL LOGO SIZE
const LOGO_INITIAL_BASE_SIZE_VW = 100; // Base size of the logo div: 100vw for full viewport width

// const LOGO_FINAL_VISUAL_SIZE_VW = 4; // We'll define this when we add animation
// -----

const Navbar = () => {
    const pathname = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnterDropdown = () => setIsDropdownOpen(true);
    const handleMouseLeaveDropdown = () => setIsDropdownOpen(false);

    return (
        <>
            {/* 1. The Fixed Navbar Bar (remains the same) */}
            <nav className="navbar-bar">
                <div className="navbar-links-section navbar-links-left">
                    <Link href="/" className={pathname === "/" || pathname === "/home" ? "active" : ""}>
                        Home
                    </Link>
                    <div className="dropdown" onMouseEnter={handleMouseEnterDropdown} onMouseLeave={handleMouseLeaveDropdown}>
                        <button className="dropdown-trigger" aria-expanded={isDropdownOpen} aria-haspopup="true">
                            About
                        </button>
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                <Link href="/about/team">Our Team</Link>
                                <Link href="/about/mission">Our Mission</Link>
                                <Link href="/about/history">History</Link>
                            </div>
                        )}
                    </div>
                    <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
                        Contact
                    </Link>
                </div>
                <div className="navbar-logo-spacer" /> {/* Spacer for when logo docks */}
                <div className="navbar-links-section navbar-links-right">
                    <Image src="/next.svg" alt="Next.js Logo" width={40} height={40} />
                </div>
            </nav>

            {/* 2. Outer container for stable initial 60vh positioning */}
            <motion.div className="logo-initial-positioner">
                {/* 3. The actual logo div, child of the positioner */}
                <motion.div
                    className="animated-logo"
                    style={{
                        // Set base size for the unscaled logo
                        width: `${LOGO_INITIAL_BASE_SIZE_VW}vw`, // Now 100vw
                        height: `${LOGO_INITIAL_BASE_SIZE_VW}vw`,// Now 100vw (making it a square viewport container)
                                                                // If your SVG is not square, object-fit:contain will handle it
                        // NO 'scale' or 'y' animation YET
                    }}
                >
                    <Image src="/uu06.svg" fill alt="Company Logo" priority />
                </motion.div>
            </motion.div>
        </>
    );
};

export default Navbar;