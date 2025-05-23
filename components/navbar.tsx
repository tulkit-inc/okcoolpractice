"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

import "../styles/components/_navbar.scss";

const LOGO_INITIAL_BASE_SIZE_VW = 100;

const Navbar = () => {
    const pathname = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnterDropdown = () => setIsDropdownOpen(true);
    const handleMouseLeaveDropdown = () => setIsDropdownOpen(false);

    return (
        <>
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

            <motion.div className="logo-initial-positioner">
                <motion.div
                    className="animated-logo"
                    style={{
                        width: `${LOGO_INITIAL_BASE_SIZE_VW}vw`,
                        height: `${LOGO_INITIAL_BASE_SIZE_VW}vw`,
                    }}
                >
                    <Image src="/uu06.svg" fill alt="Company Logo" priority />
                </motion.div>
            </motion.div>
        </>
    );
};

export default Navbar;