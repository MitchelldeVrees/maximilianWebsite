const selectedWork = [
  {
    title: 'Corona Cero × Olympics',
    url: 'https://www.instagram.com/p/DWEn2iCjYN_/?img_index=1',
    image:
      'https://images.unsplash.com/photo-1514647780138-f0857d147db0?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Jägermeister',
    url: 'https://www.instagram.com/p/DQ6lcdeCJM3/',
    image:
      'https://images.unsplash.com/photo-1618007592249-ef95e9424a4d?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Nikon',
    url: 'https://www.instagram.com/reel/DV_OOG_k_t4/',
    image:
      'https://images.unsplash.com/photo-1765573831120-4e7f5e69ffca?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Rijkswaterstaat',
    url: 'https://www.instagram.com/reels/DRrubuMiKt8/',
    image:
      'https://images.unsplash.com/photo-1772992783829-006d1fdc2b6a?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Women Inc',
    url: 'https://www.instagram.com/p/DFXms2fKXUw/',
    image:
      'https://images.unsplash.com/photo-1771736817889-b49bdd30ca98?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Lowlander',
    url: 'https://www.instagram.com/p/DV8v_cmDcO2/',
    image:
      'https://images.unsplash.com/photo-1659459007084-15b336c71192?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Applied Art Forms',
    url: 'https://www.instagram.com/reel/DQ6nKRKCGfP/',
    image:
      'https://images.unsplash.com/photo-1631902143354-17e7031c7422?auto=format&fit=crop&w=900&q=80'
  }
];

const filmWork = [
  'https://images.unsplash.com/photo-1695192699177-f98215c7bc4c?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1616527563670-f13a38dcf1a7?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1735199702109-7808e705691e?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1693646377581-aa20f691ba8a?auto=format&fit=crop&w=1400&q=80'
];

const bts = [
  'https://images.unsplash.com/photo-1768885511762-4f8a888b0a6f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1761701390353-923bf77e075f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?auto=format&fit=crop&w=1200&q=80'
];

export const metadata = {
  title: 'Design 2 | Monumental Editorial'
};

export default function DesignTwoPage() {
  return (
    <main className="page2">
      <section className="d2Hero">
        <div className="d2HeroOverlay" />
        <p className="d2Eyebrow">FILMMAKER &amp; CONTENT CREATOR</p>
        <p className="d2Sub">Based in the Netherlands</p>
        <h1>
          MAXIMILIAN
          <br />
          ROBIJNS
        </h1>
      </section>

      <section className="d2Section d2Work">
        <header className="d2Header">
          <h2>
            SELECTED
            <br />
            WORK
          </h2>
          <p>Social Content — 9×16</p>
        </header>

        <div className="d2Grid d2GridA">
          {selectedWork.slice(0, 4).map((item) => (
            <a key={item.title} className="d2Card" href={item.url} target="_blank" rel="noreferrer">
              <div className="d2CardImg" style={{ backgroundImage: `url(${item.image})` }}>
                <span className="d2Play">▶</span>
              </div>
              <div className="d2CardLabel">{item.title}</div>
            </a>
          ))}
        </div>

        <div className="d2Grid d2GridB">
          {selectedWork.slice(4).map((item) => (
            <a key={item.title} className="d2Card" href={item.url} target="_blank" rel="noreferrer">
              <div className="d2CardImg" style={{ backgroundImage: `url(${item.image})` }}>
                <span className="d2Play">▶</span>
              </div>
              <div className="d2CardLabel">{item.title}</div>
            </a>
          ))}
        </div>
      </section>

      <section className="d2BigType">
        <h2>
          STORIES
          <br />
          THROUGH
          <br />
          THE LENS
        </h2>
      </section>

      <section className="d2Section d2Film">
        <header className="d2Header d2FilmHeader">
          <h2>FILM WORK</h2>
          <p>16×9</p>
        </header>
        <div className="d2FilmGrid">
          {filmWork.map((item, i) => (
            <div key={i} className="d2FilmItem" style={{ backgroundImage: `url(${item})` }} />
          ))}
        </div>
      </section>

      <section className="d2Section d2About">
        <div className="d2AboutText">
          <p className="d2Label">ABOUT</p>
          <h2>
            Maximilian
            <br />
            Robijns
          </h2>
          <p>
            Filmmaker and content creator based in the Netherlands. Specializing in social content,
            brand films, and commercial videography for brands like Corona, Jagermeister, Nikon,
            Rijkswaterstaat, and many more.
          </p>
        </div>
        <div
          className="d2AboutImage"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,0.9) 100%), url(https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80)'
          }}
        />
      </section>

      <section className="d2Section d2Bts">
        <h2>BEHIND THE SCENES</h2>
        <div className="d2BtsGrid">
          {bts.map((item, i) => (
            <div key={i} className="d2BtsItem" style={{ backgroundImage: `url(${item})` }} />
          ))}
        </div>
      </section>

      <footer className="d2Footer">
        <span>© 2025 Maximilian Robijns</span>
        <div>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram →
          </a>
          <a href="mailto:hello@example.com">Email →</a>
        </div>
      </footer>
    </main>
  );
}
