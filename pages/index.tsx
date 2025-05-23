import Navbar from "@/components/navbar";
import "../styles/sections/_hero.scss";
import "../styles/sections/_big-type.scss";
import "../styles/components/_scroll-down.scss";
import "../styles/abstracts/_animations.scss";
import "../styles/components/_banner-location.scss";
import { useState, useEffect } from "react"; // Make sure useEffect is also imported from 'react'
import { motion } from "framer-motion";
import ProyectGallery from "@/components/proyectGallery";

const NAVBAR_HEIGHT = '60px';
const SCROLL_THRESHOLD = 50;

const scrollHideVariants = {
  initial: {
    opacity: 1,
    y: 0,
  },
  scrolled: {
    opacity: 0,
    y: 10,
  },
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  return (
    <div className="home" style={{ paddingTop: NAVBAR_HEIGHT, minHeight: '200vh' /* For scroll testing */ }}>
      <Navbar />
      <section className="hero">
        <motion.div className="hero-content"
          variants={scrollHideVariants}   
          initial="initial"
          animate={isScrolled ? 'scrolled' : 'initial'} 
          transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.6 }}
        >   
        <h1 className="h2">
          Strategic and (very) creative partners to the world&apos;s leading brands. Built for social. <br />
          We humanize brands. We connect them to (sub)cultures. We make cool content that converts. <br />
          Campaigns, content, creators. Global af. <br />
        </h1>
        </motion.div>
        
        <div className="scroll-down-container">
          <motion.div
            className="scroll-down bounce"
            variants={scrollHideVariants}   
            initial="initial"
            animate={isScrolled ? 'scrolled' : 'initial'} 
            transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.6 }}
          >
            <div className="scroll-down-text">SCROLL</div>
          </motion.div>
        </div>

        <motion.div className="banner-location"
          variants={scrollHideVariants}   
          initial="initial"
          animate={isScrolled ? 'scrolled' : 'initial'} 
          transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.6 }}
        >
          <div className="location"> London</div>
          <div className="location"> Amsterdam</div>
          <div className="location"> New York</div>
          <div className="location"> Los Angeles</div>
        </motion.div>
      </section>

      <ProyectGallery />
    </div>
  );
}
