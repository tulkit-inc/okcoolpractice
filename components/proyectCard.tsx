// components/ProyectCard.js
import Image from 'next/image'; // Using Next/Image for optimization
import styles from './gallery.module.scss'; // We'll put all gallery related styles here
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ProyectCard = ({ title, imageUrl, altText, customStyle }: { title: string, imageUrl: string, altText: string, customStyle: React.CSSProperties }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "-50px 0px" 
  });

  return (
    <motion.div 
      ref={ref}
      className={styles.proyectCard} 
      style={customStyle}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.2
      }}
    >
      <div className={styles.proyectCardImage}>
        {/* Use Next/Image for optimized images */}
        <Image 
          src={imageUrl} 
          alt={altText || title} 
          width={500} 
          height={350} 
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
        />
        {/* If you must use a raw img tag for some reason:
        <img src={imageUrl} alt={altText || title} /> */}
      </div>
      <div className={styles.proyectCardTitle}>
        <h3>{title}</h3>
      </div>
    </motion.div>
  );
};

export default ProyectCard;