'use client';

import { useRef } from 'react';
import styles from '../app/4/page.module.css';

export default function BigFormatGrid({ items }) {
  const refs = useRef({});

  const handleEnter = (key) => {
    const v = refs.current[key];
    if (v) v.play().catch(() => {});
  };

  const handleLeave = (key) => {
    const v = refs.current[key];
    if (v) v.pause();
  };

  return (
    <div className={styles.bigGrid}>
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
                src={item.src}
                muted
                loop
                playsInline
                preload="metadata"
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
