import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Added AnimatePresence back
import styles from './navbar.module.scss';

// --- Placeholder SVG Icons (replace with your actual icons) ---
const MailIcon = () => <span style={{ fontFamily: 'sans-serif' }}>E</span>;
const TikTokIcon = () => <span style={{ fontFamily: 'sans-serif' }}>T</span>;
const InstagramIcon = () => <span style={{ fontFamily: 'sans-serif' }}>I</span>;
const LinkedInIcon = () => <span style={{ fontFamily: 'sans-serif' }}>M</span>;


const OKCoolSVGLogo = () => (
  <svg
    viewBox="0 0 385 72"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.logoSvg}
    fill="currentColor"
  >
    <path d="M361.518 24.6879C368.942 24.6879 374.67 26.8959 378.702 31.3119C382.67 35.7919 384.654 41.0079 384.654 46.9599C384.654 54.6399 382.03 60.6239 376.782 64.9119C371.534 69.3279 364.91 71.5359 356.91 71.5359C349.87 71.5359 344.014 69.8719 339.342 66.5439C331.534 61.0399 327.63 51.4399 327.63 37.7439C327.63 25.4559 330.126 16.1119 335.118 9.71194C340.174 3.31194 347.502 0.111938 357.102 0.111938C364.526 0.111938 370.574 1.83994 375.246 5.29594C379.982 8.75194 382.83 13.6159 383.79 19.8879H366.51C365.55 15.6639 362.478 13.5519 357.294 13.5519C353.326 13.5519 350.382 14.8959 348.462 17.5839C346.542 20.2079 345.39 24.7839 345.006 31.3119C348.782 26.8959 354.286 24.6879 361.518 24.6879ZM349.614 54.2559C351.47 56.1119 353.902 57.0399 356.91 57.0399C359.918 57.0399 362.35 56.1119 364.206 54.2559C365.998 52.4639 366.894 50.1919 366.894 47.4399C366.894 44.6239 365.998 42.3199 364.206 40.5279C362.414 38.7359 359.982 37.8399 356.91 37.8399C353.838 37.8399 351.406 38.7359 349.614 40.5279C347.822 42.3199 346.926 44.6239 346.926 47.4399C346.926 50.1919 347.822 52.4639 349.614 54.2559Z" fill="black"/>
    <path d="M314.075 62.2239C308.827 68.4319 301.179 71.5359 291.131 71.5359C281.083 71.5359 273.467 68.4319 268.283 62.2239C263.035 56.1439 260.411 47.3439 260.411 35.8239C260.411 24.3679 263.035 15.5359 268.283 9.32794C273.467 3.18394 281.083 0.111938 291.131 0.111938C301.115 0.111938 308.763 3.18394 314.075 9.32794C319.259 15.5999 321.851 24.4319 321.851 35.8239C321.851 47.2799 319.259 56.0799 314.075 62.2239ZM291.131 55.8879C294.843 55.8879 297.563 54.3519 299.291 51.2799C301.019 48.2079 301.883 43.0559 301.883 35.8239C301.883 28.6559 301.019 23.5359 299.291 20.4639C297.563 17.3279 294.843 15.7599 291.131 15.7599C287.611 15.7599 284.923 17.2639 283.067 20.2719C281.275 23.2799 280.379 28.4639 280.379 35.8239C280.379 43.1839 281.275 48.3359 283.067 51.2799C284.859 54.3519 287.547 55.8879 291.131 55.8879Z" fill="black"/>
    <path d="M231.192 50.512H185.4V35.824H231.192V50.512Z" fill="black"/>
    <path d="M124.56 71.5359C115.472 71.5359 108.112 69.1359 102.48 64.3359C96.72 59.5359 93.84 52.688 93.84 43.792V1.64795H113.04V43.9839C113.04 47.5679 114.032 50.3199 116.016 52.2399C118.064 54.16 120.912 55.12 124.56 55.12C128.208 55.12 131.024 54.16 133.008 52.2399C135.056 50.3199 136.08 47.5679 136.08 43.9839V1.64795H155.28V43.792C155.28 52.8159 152.496 59.6959 146.928 64.4319C141.296 69.168 133.84 71.5359 124.56 71.5359Z" fill="black"/>
    <path d="M31.56 71.5359C22.472 71.5359 15.112 69.1359 9.48003 64.3359C3.72003 59.5359 0.840027 52.688 0.840027 43.792V1.64795H20.04V43.9839C20.04 47.5679 21.032 50.3199 23.016 52.2399C25.064 54.16 27.912 55.12 31.56 55.12C35.208 55.12 38.024 54.16 40.008 52.2399C42.056 50.3199 43.08 47.5679 43.08 43.9839V1.64795H62.28V43.792C62.28 52.8159 59.496 59.6959 53.928 64.4319C48.296 69.168 40.84 71.5359 31.56 71.5359Z" fill="black"/>
  </svg>
);

const SCROLL_THRESHOLD = 50;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarPaddingY = '20px';
  const initialLogoWidth = '80vw';
  const initialLogoHeight = '80vw'; 

  const scrolledLogoWidth = '120px'; 
  const scrolledLogoHeight = '22.4px'; 

  const logoContainerVariants = {
    initial: {
      width: initialLogoWidth,
      height: initialLogoHeight,
      top: '80%', 
      left: '50%',
      x: '-50%',
      y: '-20%', 
    },
    scrolled: {
      width: scrolledLogoWidth,
      height: scrolledLogoHeight,
      top: navbarPaddingY,
      left: '50%',
      x: '-50%',
      y: '0%',
    },
  };

  const navLinks = [
    { href: '/work', label: 'WORK' },
    { href: '/about', label: 'ABOUT' },
    { href: '/reports', label: 'REPORTS' },
    { href: '/ok-mentor', label: 'OK MENTOR' },
  ];

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navItemsContainer}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <motion.div
        className={styles.logoContainer}
        variants={logoContainerVariants}
        initial="initial"
        animate={isScrolled ? 'scrolled' : 'initial'}
        transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.6 }}
      >
        <Link href="/" className={styles.logoLinkWrapper}>
          <OKCoolSVGLogo />
        </Link>
      </motion.div>

      <div className={styles.socialIcons}>
        <a href="mailto:example@example.com" aria-label="Email"><MailIcon /></a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><TikTokIcon /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
      </div>

    </nav>
  );
};

export default Navbar;