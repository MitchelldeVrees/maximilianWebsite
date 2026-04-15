import { IBM_Plex_Mono, Playfair_Display } from 'next/font/google';
import styles from './page.module.css';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--d3-serif' });
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], variable: '--d3-mono', weight: ['400'] });

const brandBar = [
  'CORONA CERO',
  'JÄGERMEISTER',
  'NIKON',
  'RIJKSWATERSTAAT',
  'WOMEN INC',
  'LOWLANDER',
  'APPLIED ART FORMS'
];

const workRows = [
  {
    label: 'SOCIAL CONTENT',
    title: 'Corona Cero\n× Olympics',
    description:
      'Social content campaign for Corona Cero during the Olympic Games. Cinematic 9×16 content capturing the spirit of sport and celebration.',
    image:
      'https://images.unsplash.com/photo-1661966522340-a51f578e4017?auto=format&fit=crop&w=1600&q=80',
    href: 'https://www.instagram.com/p/DWEn2iCjYN_/?img_index=1',
    reverse: false
  },
  {
    label: 'SOCIAL CONTENT',
    title: 'Jägermeister',
    description:
      "Crafting bold social-first video content for Jägermeister, bringing the brand's energy and nightlife culture to Instagram and TikTok.",
    image:
      'https://images.unsplash.com/photo-1748674744311-3a3ec2874836?auto=format&fit=crop&w=1600&q=80',
    href: 'https://www.instagram.com/p/DQ6lcdeCJM3/',
    reverse: true
  },
  {
    label: 'SOCIAL CONTENT',
    title: 'Nikon',
    description:
      'Creating visually stunning social content for Nikon, showcasing the beauty and capability of their latest camera technology.',
    image:
      'https://images.unsplash.com/photo-1647688744792-29f709c8ecaa?auto=format&fit=crop&w=1600&q=80',
    href: 'https://www.instagram.com/reel/DV_OOG_k_t4/',
    reverse: false
  },
  {
    label: 'SOCIAL CONTENT',
    title: 'Rijkswaterstaat',
    description:
      'Documentary-style social content for the Dutch national infrastructure agency, highlighting the people and stories behind the roads.',
    image:
      'https://images.unsplash.com/photo-1766247097530-891424500470?auto=format&fit=crop&w=1600&q=80',
    href: 'https://www.instagram.com/reels/DRrubuMiKt8/',
    reverse: true
  }
];

const bts = [
  'https://images.unsplash.com/photo-1662435855439-b008b6099e58?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1711948176573-74d5858240de?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1525189750212-fde62e50601a?auto=format&fit=crop&w=1200&q=80'
];

export const metadata = {
  title: 'Design 3 | Artisan Editorial Warm'
};

export default function DesignThreePage() {
  return (
    <main className={`${styles.page} ${playfair.variable} ${plexMono.variable}`}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <p className={styles.heroEye}>FILMMAKER &amp; CONTENT CREATOR</p>
        <p className={styles.heroLoc}>THE NETHERLANDS</p>
        <h1>
          Maximilian
          <br />
          Robijns
        </h1>
        <a href="#work" className={styles.heroCta}>
          VIEW SHOWREEL
        </a>
      </section>

      <section className={styles.brandBar}>
        {brandBar.map((brand) => (
          <span key={brand}>{brand}</span>
        ))}
      </section>

      <section id="work" className={styles.workSection}>
        {workRows.map((row) => (
          <a
            key={row.title}
            href={row.href}
            target="_blank"
            rel="noreferrer"
            className={`${styles.workRow} ${row.reverse ? styles.reverse : ''}`}
          >
            <div className={styles.workImage} style={{ backgroundImage: `url(${row.image})` }} />
            <div className={styles.workText}>
              <p>{row.label}</p>
              <h2>
                {row.title.split('\n').map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </h2>
              <h3>{row.description}</h3>
            </div>
          </a>
        ))}
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutImage} />
        <div className={styles.aboutText}>
          <p>ABOUT</p>
          <h2>
            Maximilian
            <br />
            Robijns
          </h2>
          <h3>
            Filmmaker and content creator based in the Netherlands. Specializing in social content,
            brand films, and commercial videography. Passionate about telling visual stories that
            connect brands with their audience in authentic, cinematic ways.
          </h3>
          <button type="button">GET IN TOUCH</button>
        </div>
      </section>

      <section className={styles.btsSection}>
        <h2>Behind the Scenes</h2>
        <div className={styles.btsGrid}>
          {bts.map((img, i) => (
            <div key={i} className={styles.btsItem} style={{ backgroundImage: `url(${img})` }} />
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      <footer className={styles.footer}>
        <span>© 2025 Maximilian Robijns</span>
        <div>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="mailto:hello@example.com">Email</a>
        </div>
      </footer>
    </main>
  );
}
