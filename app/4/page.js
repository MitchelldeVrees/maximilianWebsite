import styles from './page.module.css';
import ReelsMarquee from '../../components/ReelsMarquee';
import BigFormatGrid from '../../components/BigFormatGrid';

export const metadata = {
  title: 'Design 4 | Full-Bleed Showreel'
};

const bigFormat = [{ src: '/bigFormat/nikonBigFormat.mp4' }, {}, {}, {}];

const reels = [
  {
    title: 'CORONA CERO x OLYMPICS',
    src: '/reels/coronacero.mp4',
    poster:
      'https://images.unsplash.com/photo-1514647780138-f0857d147db0?auto=format&fit=crop&w=900&q=80',
    profileUrl: 'https://www.instagram.com/corona/'
  },
  {
    title: 'JAGERMEISTER',
    src: '/reels/jagermeister.mp4',
    poster:
      'https://images.unsplash.com/photo-1618007592249-ef95e9424a4d?auto=format&fit=crop&w=900&q=80',
    profileUrl: 'https://www.instagram.com/jagermeister/'
  },
  {
    title: 'NIKON',
    src: '/reels/nikon.mp4',
    poster:
      'https://images.unsplash.com/photo-1765573831120-4e7f5e69ffca?auto=format&fit=crop&w=900&q=80',
    profileUrl: 'https://www.instagram.com/nikoneurope/'
  },
  {
    title: 'WOMEN INC',
    src: '/reels/womenInc.mp4',
    poster:
      'https://images.unsplash.com/photo-1771736817889-b49bdd30ca98?auto=format&fit=crop&w=900&q=80',
    profileUrl: 'https://www.instagram.com/women_inc/'
  },
  {
    title: 'LOWLANDER',
    src: '/reels/lowlander.mp4',
    poster:
      'https://images.unsplash.com/photo-1659459007084-15b336c71192?auto=format&fit=crop&w=900&q=80',
    profileUrl: 'https://www.instagram.com/lowlander/'
  }
];

const btsImages = [
  'https://images.unsplash.com/photo-1662435855439-b008b6099e58?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1711948176573-74d5858240de?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1525189750212-fde62e50601a?auto=format&fit=crop&w=1200&q=80'
];

export default function DesignFourPage() {
  return (
    <main className={styles.page}>
      <section className={styles.showreel} aria-label="Showreel">
        <div className={styles.showreelInner}>
          <p className={styles.eyebrow}>SHOWREEL 2025</p>
          <h1 className={styles.title}>
            MAXIMILIAN
            <br />
            ROBIJNS
          </h1>
          <p className={styles.tagline}>Filmmaker &amp; Content Creator - The Netherlands</p>
          <p className={styles.placeholder}>[ showreel coming soon ]</p>
        </div>
      </section>

      <section className={styles.reelsSection} aria-label="Selected Reels">
        <header className={styles.reelsHeader}>
          <p className={styles.eyebrow}>SELECTED REELS</p>
          <h2 className={styles.sectionTitle}>SOCIAL CONTENT</h2>
        </header>
        <ReelsMarquee reels={reels} />
      </section>

      <section className={styles.bigSection} aria-label="Big Format Work">
        <header className={styles.reelsHeader}>
          <p className={styles.eyebrow}>BIG FORMAT</p>
          <h2 className={styles.sectionTitle}>FILM WORK</h2>
        </header>
        <BigFormatGrid items={bigFormat} />
      </section>

      <section className={styles.aboutSection} aria-label="About">
        <div className={styles.aboutImage}>
          <div className={styles.ageReel}>
            <span>YOUNG</span>
            <span>TEEN</span>
            <span>STUDENT</span>
            <span>TWENTIES</span>
            <span>NOW</span>
            <span>OLDER</span>
            <span>OLD</span>
          </div>
          <p className={styles.ageCaption}>[ photo reel coming soon ]</p>
        </div>
        <div className={styles.aboutText}>
          <p className={styles.eyebrow}>ABOUT</p>
          <h2 className={styles.sectionTitle}>
            MAXIMILIAN
            <br />
            ROBIJNS
          </h2>
          <p className={styles.aboutBody}>
            Filmmaker and content creator based in the Netherlands. Specializing in social-first
            video, brand films, and commercial videography. I have worked with brands like Corona,
            Jagermeister, Nikon, Rijkswaterstaat, Women Inc and Lowlander while telling visual stories
            that connect with an audience in authentic, cinematic ways.
          </p>
          <p className={styles.aboutBody}>
            Always chasing the next frame from 9x16 reels on the street to 16x9 brand films on
            location.
          </p>
        </div>
      </section>

      <section className={styles.btsSection} aria-label="Behind the Scenes">
        <header className={styles.reelsHeader}>
          <p className={styles.eyebrow}>BEHIND THE SCENES</p>
          <h2 className={styles.sectionTitle}>ON SET</h2>
        </header>
        <div className={styles.btsGrid}>
          {btsImages.map((src, i) => (
            <div key={i} className={styles.btsItem}>
              <img
                src={src}
                alt={`Behind the scenes ${i + 1}`}
                loading="lazy"
                decoding="async"
                className={styles.btsImg}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
