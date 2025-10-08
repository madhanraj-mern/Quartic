import { useEffect } from 'react';

/**
 * Automatically plays/pauses a <video> element when it enters/leaves the viewport.
 * - Mutes the video to allow autoplay without user gesture
 * - Uses IntersectionObserver for precise control
 */
export default function useVideoAutoPlayOnView(videoRef, options = {}) {
  useEffect(() => {
    const videoEl = videoRef?.current;
    if (!videoEl) return;

    // Ensure muted for autoplay policies
    videoEl.muted = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            try {
              const playPromise = videoEl.play();
              if (playPromise && typeof playPromise.then === 'function') {
                playPromise.catch(() => {});
              }
            } catch (_) {}
          } else {
            try {
              videoEl.pause();
            } catch (_) {}
          }
        });
      },
      { threshold: 0.25, ...options }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, [videoRef, options.threshold]);
}


