'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../app/4/page.module.css';

export default function ReelsMarquee({ reels }) {
  const [paused, setPaused] = useState(false);
  const [activeKey, setActiveKey] = useState(null);
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

  const handleEnter = (key) => {
    setPaused(true);
    setActiveKey(key);
    const v = videoRefs.current[key];
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };

  const handleLeave = (key) => {
    setPaused(false);
    setActiveKey(null);
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
                preload="none"
                className={styles.reelVideo}
              />
              {reel.poster ? (
                <img
                  src={reel.poster}
                  alt={`${reel.title} thumbnail`}
                  loading="lazy"
                  decoding="async"
                  className={styles.reelPoster}
                  style={{ opacity: activeKey === key ? 0 : 1 }}
                />
              ) : null}
              <span className={styles.reelLabel}>{reel.title}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
