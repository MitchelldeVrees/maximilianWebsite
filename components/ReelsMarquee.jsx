'use client';

import { useRef, useState } from 'react';
import styles from '../app/4/page.module.css';

export default function ReelsMarquee({ reels }) {
  const [paused, setPaused] = useState(false);
  const videoRefs = useRef({});

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
    <div className={styles.marqueeViewport}>
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
                src={reel.src}
                muted
                loop
                playsInline
                preload="metadata"
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
