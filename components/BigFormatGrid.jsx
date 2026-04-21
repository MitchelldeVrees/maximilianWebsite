'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../app/page.module.css';

export default function BigFormatGrid({ items }) {
  const refs = useRef({});
  const [ready, setReady] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const node = gridRef.current;
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
    Object.values(refs.current).forEach((v) => {
      if (!v) return;
      const showFirstFrame = () => { v.currentTime = 0.001; };
      v.addEventListener('loadedmetadata', showFirstFrame, { once: true });
      if (v.readyState >= 1) showFirstFrame();
    });
  }, [ready]);

  const handleEnter = (key) => {
    const v = refs.current[key];
    if (v) v.play().catch(() => {});
  };

  const handleLeave = (key) => {
    const v = refs.current[key];
    if (v) v.pause();
  };

  return (
    <div ref={gridRef} className={styles.bigGrid}>
      {items.map((item, i) => {
        const key = item.src || `empty-${i}`;
        return (
          <div
            key={key}
            className={styles.bigCell}
            onMouseEnter={() => item.src && handleEnter(key)}
            onMouseLeave={() => item.src && handleLeave(key)}
          >
            {item.src ? (
              <video
                ref={(el) => {
                  if (el) refs.current[key] = el;
                }}
                src={ready ? item.src : undefined}
                muted
                loop
                playsInline
                preload={ready ? 'metadata' : 'none'}
                className={styles.bigVideo}
              />
            ) : (
              <div className={styles.bigPlaceholder}>COMING SOON</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
