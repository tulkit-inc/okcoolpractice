// e.g., pages/gallery.js or inside your main page component
import Head from 'next/head';
import ProyectCard from './proyectCard'; // Assuming you created this
import styles from './gallery.module.scss'; // SCSS module for this page/component

// Sample data (replace with your actual data source)
const initialProjectData = [
  { id: 1, title: 'META QUEST 3', imageUrl: '/test-image.jpg', altText: 'Meta Quest 3', displacement: '0px' },
  { id: 2, title: 'THE NORTH FACE', imageUrl: '/test-image.jpg', altText: 'The North Face', displacement: '60px' }, // Displaced down
  { id: 3, title: 'SKY MOBILE', imageUrl: '/test-image.jpg', altText: 'Sky Mobile', displacement: '0px' },
  { id: 4, title: "NIKE 'YOU GOT THIS'", imageUrl: '/test-image.jpg', altText: "Nike 'You Got This'", displacement: '40px' },
  { id: 5, title: "NIKE 'YOU GOT THIS'", imageUrl: '/test-image.jpg', altText: "Nike 'You Got This'", displacement: '40px' },
  { id: 6, title: "NIKE 'YOU GOT THIS'", imageUrl: '/test-image.jpg', altText: "Nike 'You Got This'", displacement: '40px' },
  { id: 7, title: "NIKE 'YOU GOT THIS'", imageUrl: '/test-image.jpg', altText: "Nike 'You Got This'", displacement: '40px' },
  { id: 8, title: "NIKE 'YOU GOT THIS'", imageUrl: '/test-image.jpg', altText: "Nike 'You Got This'", displacement: '40px' },
  { id: 9, title: "NIKE 'YOU GOT THIS'", imageUrl: '/test-image.jpg', altText: "Nike 'You Got This'", displacement: '40px' },
  { id: 10, title: "NIKE 'YOU GOT THIS'", imageUrl: '/test-image.jpg', altText: "Nike 'You Got This'", displacement: '40px' },
  // ... more items
];


export default function GalleryPage() {
  // Separate items into two arrays for the two columns
  // This logic assumes items are added to portfolioData in the order they should appear
  // visually, alternating columns.
  const leftColumnItems = initialProjectData.filter((_, index) => index % 2 === 0);
  const rightColumnItems = initialProjectData.filter((_, index) => index % 2 !== 0);

  return (
    <>
      <Head>
        <title>Project Gallery</title>
        <meta name="description" content="Our project gallery" />
      </Head>

      {/* You might have a Header component here */}
      {/* <Header /> */}

      <main className="container"> {/* Optional global container for centering/padding */}
        <div className={styles.gallery}> {/* Corresponds to your outer .gallery div */}
          <div className={styles.proyectColumns}> {/* Corresponds to your .proyect-columns div */}
            
            {/* Column 1 */}
            <div className={styles.column}>
              {leftColumnItems.map(project => (
                <ProyectCard
                  key={project.id}
                  title={project.title}
                  imageUrl={project.imageUrl}
                  altText={project.altText}
                  // Apply displacement directly to the card
                  // No extra displacement for the first item in this column usually
                  customStyle={{ marginTop: project.id === 3 ? '20px' : '0px' /* Example: Sky Mobile displaced slightly */}}
                />
              ))}
            </div>

            {/* Column 2 */}
            <div className={styles.column}>
              {rightColumnItems.map(project => (
                <ProyectCard
                  key={project.id}
                  title={project.title}
                  imageUrl={project.imageUrl}
                  altText={project.altText}
                  // Apply displacement based on the project's data
                  customStyle={{ marginTop: project.displacement }}
                />
              ))}
            </div>

          </div>
        </div>
      </main>

      {/* You might have a Footer component here */}
      {/* <Footer /> */}
    </>
  );
}