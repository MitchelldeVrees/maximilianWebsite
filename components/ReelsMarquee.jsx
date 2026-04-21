'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../app/page.module.css';

export default function ReelsMarquee({ reels }) {
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const videoRefs = useRef({});
  const viewportRef = useRef(null);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!ready) return;
    Object.values(videoRefs.current).forEach((v) => {
      if (!v) return;
      const showFirstFrame = () => { v.currentTime = 0.001; };
      v.addEventListener('loadedmetadata', showFirstFrame, { once: true });
      if (v.readyState >= 1) showFirstFrame();
    });
  }, [ready]);

  const handleEnter = (key) => {
    setPaused(true);
    const v = videoRefs.current[key];
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };

  const handleLeave = (key) => {
    setPaused(false);
    const v = videoRefs.current[key];
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  const loop = [...reels, ...reels];

  return (
    <div ref={viewportRef} className={styles.marqueeViewport}>
      <div
        className={styles.marqueeTrack}
        style={{ animationPlayState: paused ? 'paused' : 'running' }}
      >
        {loop.map((reel, i) => {
          const key = `${reel.src}-${i}`;
          return (
            <a
              key={key}
              className={styles.reelCard}
              href={reel.profileUrl || '#'}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => handleEnter(key)}
              onMouseLeave={() => handleLeave(key)}
            >
              <video
                ref={(el) => {
                  if (el) videoRefs.current[key] = el;
                }}
                src={ready ? reel.src : undefined}
                muted
                loop
                playsInline
                preload={ready ? 'metadata' : 'none'}
                className={styles.reelVideo}
              />
              <span className={styles.reelLabel}>{reel.title}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
