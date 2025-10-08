import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const useGSAPAnimations = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Ensure container has proper positioning for ScrollTrigger
    const container = containerRef.current;
    const computedStyle = window.getComputedStyle(container);
    if (computedStyle.position === 'static') {
      container.style.position = 'relative';
    }

    const ctx = gsap.context(() => {
      // Animation configurations
      const animationConfigs = {
        'anim-item-top': {
          set: { opacity: 0, y: -50 },
          to: { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        },
        'anim-item-left': {
          set: { opacity: 0, x: -50 },
          to: { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
        },
        'anim-item-right': {
          set: { opacity: 0, x: 50 },
          to: { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
        },
        'anim-item-y': {
          set: { opacity: 0, y: 50 },
          to: { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        },
        'anim-item-clipDown': {
          set: { opacity: 1, clipPath: "inset(0% 0% 100% 0%)" },
          to: { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power2.out" }
        }
      };

      // Initialize animations based on class names
      Object.entries(animationConfigs).forEach(([className, config]) => {
        const elements = containerRef.current.querySelectorAll(`.${className}`);
        
        elements.forEach((element, index) => {
          gsap.set(element, config.set);
          
          ScrollTrigger.create({
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            onEnter: () => gsap.to(element, {
              ...config.to,
              delay: index * 0.1
            }),
            onEnterBack: () => gsap.to(element, {
              ...config.to,
              duration: config.to.duration * 0.75
            }),
            onLeaveBack: () => gsap.set(element, config.set)
          });
        });
      });

      // Special animations
      // Clip down line animations
      const clipDownLines = containerRef.current.querySelectorAll('.anim-item-clipDown-line');
      clipDownLines.forEach((element) => {
        gsap.set(element, {
          opacity: 1,
          clipPath: "inset(0% 0% 100% 0%)",
        });

        ScrollTrigger.create({
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const clipValue = Math.max(100 - progress * 100, 0);
            gsap.to(element, {
              clipPath: `inset(0% 0% ${clipValue}% 0%)`,
              overwrite: true,
            });
          },
        });
      });

      // Blur animations
      const blurElements = containerRef.current.querySelectorAll('.anim-item-blur');
      if (blurElements.length > 0) {
        gsap.set(blurElements, {
          filter: "blur(5px)",
          scale: 1.05,
        });

        ScrollTrigger.batch(blurElements, {
          onEnter: (batch) =>
            gsap.to(batch, {
              filter: "blur(0px)",
              scale: 1,
              duration: 1.2,
              stagger: { each: 0.1 },
              ease: "power2.out",
              overwrite: true,
            }),
          onLeaveBack: (batch) =>
            gsap.set(batch, {
              filter: "blur(5px)",
              scale: 1.05,
              overwrite: true,
            }),
        });
      }

      // Counter animations
      const counters = containerRef.current.querySelectorAll('.counter');
      counters.forEach((counter) => {
        const endValue = parseInt(counter.getAttribute('data-count') || counter.textContent);
        
        ScrollTrigger.create({
          trigger: counter,
          start: "top 80%",
          onEnter: () => {
            gsap.fromTo(counter, 
              { textContent: 0 },
              {
                textContent: endValue,
                duration: 2,
                ease: "power2.out",
                snap: { textContent: 1 },
                onUpdate: function() {
                  counter.textContent = Math.ceil(this.targets()[0].textContent);
                }
              }
            );
          }
        });
      });

      // Refresh ScrollTrigger after all animations are set up
      ScrollTrigger.refresh();

    }, containerRef);

    // Additional refresh after a short delay to ensure proper positioning
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return containerRef;
};

export default useGSAPAnimations;