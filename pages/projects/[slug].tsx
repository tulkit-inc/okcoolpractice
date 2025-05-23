import { useRouter } from 'next/router';
import styles from '@/styles/sections/projects.module.scss';
import Image from 'next/image';

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main className={styles.project}>
      <div className={styles.project__imageContainer}>
        <Image 
          src="/test-image.jpg" 
          alt={`Project ${slug}`} 
          fill 
          className={styles.project__imageContainer__image}
          priority
        />
      </div>

      <div className={styles.project__container}>
        <header className={styles.project__header}>
          <h1 className={styles.project__title}>Project: {slug}</h1>
        </header>
        <div className={styles.project__content}>
          <p>Project content goes here...</p>
        </div>
      </div>
    </main>
  );
}