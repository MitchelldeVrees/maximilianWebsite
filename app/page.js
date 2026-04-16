const workItems = [
  {
    title: 'CORONA CERO x OLYMPICS',
    url: 'https://www.instagram.com/p/DWEn2iCjYN_/?img_index=1',
    video: '/reels/coronacero.mp4',
    videoFit: 'contain',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'JAGERMEISTER',
    url: 'https://www.instagram.com/p/DQ6lcdeCJM3/',
    video: '/reels/jagermeister.mp4',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'NIKON',
    url: 'https://www.instagram.com/reel/DV_OOG_k_t4/',
    video: '/reels/nikon.mp4',
    image:
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'RIJKSWATERSTAAT',
    url: 'https://www.instagram.com/reels/DRrubuMiKt8/',
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'WOMEN INC',
    url: 'https://www.instagram.com/p/DFXms2fKXUw/',
    video: '/reels/womenInc.mp4',
    image:
      'https://images.unsplash.com/photo-1773594033354-f357d40ac267?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'LOWLANDER',
    url: 'https://www.instagram.com/p/DV8v_cmDcO2/',
    video: '/reels/lowlander.mp4',
    image:
      'https://images.unsplash.com/photo-1746422029383-fe48bb6276f4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'APPLIED ART FORMS',
    url: 'https://www.instagram.com/reel/DQ6nKRKCGfP/',
    image:
      'https://images.unsplash.com/photo-1642015927464-9df06aec531d?auto=format&fit=crop&w=1200&q=80'
  }
];

const filmItems = [
  { title: 'NIKON BIG FORMAT', video: '/bigFormat/nikonBigFormat.mp4' },
  {
    title: 'CORONA CERO BRAND FILM',
    image: 'https://images.unsplash.com/photo-1702221294082-fec37c8ba6e6?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'LOWLANDER CAMPAIGN',
    image: 'https://images.unsplash.com/photo-1587050063131-1ac5bf6d7e7e?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'APPLIED ART FORMS',
    image: 'https://images.unsplash.com/photo-1626841006734-d86374b3254c?auto=format&fit=crop&w=1400&q=80'
  }
];

const btsItems = [
  'https://images.unsplash.com/photo-1709316132552-fe8d20f1adb3?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1762028895833-bfcf6c6052cb?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1642007086358-278c226b915d?auto=format&fit=crop&w=1200&q=80'
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="heroOverlay" />
        <a className="heroPlay" href="#selected-work" aria-label="Jump to selected work">
          <span>▶</span>
        </a>
        <p className="heroKicker">SHOWREEL 2025</p>
        <p className="heroSubtitle">Filmmaker &amp; Content Creator</p>
      </section>

      <section id="selected-work" className="section sectionWork">
        <header className="sectionHeader">
          <h2>SELECTED WORK</h2>
          <p>Social Content • 9x16</p>
        </header>

        <div className="workGrid workGridA">
          {workItems.slice(0, 4).map((item) => (
            <a key={item.title} className="workCard" href={item.url} target="_blank" rel="noreferrer">
              <div className="workImage" style={{ backgroundImage: item.video ? undefined : `url(${item.image})` }}>
                {item.video ? (
                  <video
                    src={item.video}
                    poster={item.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: item.videoFit || 'cover',
                      display: 'block',
                      background: '#000'
                    }}
                  />
                ) : (
                  <span className="miniPlay">▶</span>
                )}
              </div>
              <span className="workLabel">{item.title}</span>
            </a>
          ))}
        </div>

        <div className="workGrid workGridB">
          {workItems.slice(4).map((item) => (
            <a key={item.title} className="workCard" href={item.url} target="_blank" rel="noreferrer">
              <div className="workImage" style={{ backgroundImage: item.video ? undefined : `url(${item.image})` }}>
                {item.video ? (
                  <video
                    src={item.video}
                    poster={item.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: item.videoFit || 'cover',
                      display: 'block',
                      background: '#000'
                    }}
                  />
                ) : (
                  <span className="miniPlay">▶</span>
                )}
              </div>
              <span className="workLabel">{item.title}</span>
            </a>
          ))}
        </div>
      </section>

      <hr className="divider" />

      <section className="section sectionFilm">
        <header className="sectionHeader">
          <h2>FILM WORK</h2>
        </header>
        <div className="filmGrid">
          {filmItems.map((item, i) => (
            <div key={i} className="filmItem" style={{ backgroundImage: item.video ? undefined : `url(${item.image})` }}>
              {item.video ? (
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : null}
              <span className="filmLabel">{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      <section className="section aboutSection">
        <div
          className="aboutImage"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(10,10,10,0) 40%, rgba(10,10,10,0.85) 85%, #0a0a0a 100%), url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80)'
          }}
        />
        <div className="aboutCopy">
          <p className="label">ABOUT</p>
          <h2>Maximilian Robijns</h2>
          <p>
            Filmmaker and content creator based in the Netherlands. Specializing in social content,
            brand films, and commercial videography. Working with brands like Corona, Jagermeister,
            Nikon, Rijkswaterstaat, and many more.
          </p>
        </div>
      </section>

      <hr className="divider" />

      <section className="section sectionBts">
        <header className="sectionHeader">
          <h2>BEHIND THE SCENES</h2>
        </header>
        <div className="btsGrid">
          {btsItems.map((image, i) => (
            <div key={i} className="btsItem" style={{ backgroundImage: `url(${image})` }} />
          ))}
        </div>
      </section>

      <hr className="divider" />

      <footer className="footer">
        <span>© 2025 Maximilian Robijns</span>
        <div className="footerLinks">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            INSTAGRAM
          </a>
          <a href="mailto:hello@example.com">EMAIL</a>
        </div>
      </footer>
    </main>
  );
}
