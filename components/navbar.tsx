import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/components/_navbar.scss";
import Image from "next/image";
import "../styles/sections/_big-type.scss";
import "../styles/abstracts/_animations.scss";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const pathname = usePathname();

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };


    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link
                    href="/"
                    className={pathname === "/" || pathname === "/home" ? "active" : ""}
                >
                    Home
                </Link>
                <div
                    className="dropdown"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <button
                        className="dropdown-trigger"
                        aria-expanded={isDropdownOpen}
                    >
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
                <Link href="/contact">Contact</Link>
            </div>


            <div className="navbar-logo-container">
                <div className="sticky">
                    <div className="el">
                        <div className="logo" >
                            <Image
                                src="/uu06.svg"
                                fill
                                alt="logo"
                            />
                        </div>
                    </div>
                </div>


            </div>

            <div className="navbar-right">
                <Image src="/next.svg" alt="logo" width={40} height={40} />
            </div>

        </div>


    );
};

export default Navbar;