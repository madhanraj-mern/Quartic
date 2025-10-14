// ===========================================
// MOBILE ANIMATIONS & SCROLLING UTILITIES
// ===========================================

// Animation observer for mobile
export const initMobileAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Add staggered animation for multiple elements
        const siblings = entry.target.parentElement.children;
        Array.from(siblings).forEach((sibling, index) => {
          if (sibling === entry.target) {
            setTimeout(() => {
              sibling.classList.add('visible');
            }, index * 100);
          }
        });
      }
    });
  }, observerOptions);

  // Observe all animation elements
  const animationElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .bounce-in');
  animationElements.forEach(el => observer.observe(el));

  return observer;
};

// Smooth scrolling utility
export const initSmoothScrolling = () => {
  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
};

// Back to top button
export const initBackToTop = () => {
  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTopBtn);

  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  // Scroll to top when clicked
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
};

// Mobile menu toggle
export const initMobileMenu = () => {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNavMenu = document.querySelector('.mobile-nav-menu');
  const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');

  if (mobileMenuToggle && mobileNavMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileNavMenu.classList.toggle('open');
      if (mobileNavOverlay) {
        mobileNavOverlay.classList.toggle('open');
      }
      document.body.style.overflow = mobileNavMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu when clicking overlay
    if (mobileNavOverlay) {
      mobileNavOverlay.addEventListener('click', () => {
        mobileNavMenu.classList.remove('open');
        mobileNavOverlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    // Close menu when clicking nav links
    const navLinks = mobileNavMenu.querySelectorAll('.mobile-nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNavMenu.classList.remove('open');
        if (mobileNavOverlay) {
          mobileNavOverlay.classList.remove('open');
        }
        document.body.style.overflow = '';
      });
    });
  }
};

// Accordion functionality
export const initMobileAccordions = () => {
  const accordionButtons = document.querySelectorAll('.accordion-button');
  
  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const isExpanded = button.classList.contains('collapsed');
      
      // Close all other accordions in the same group
      const accordion = button.closest('.accordion');
      const allButtons = accordion.querySelectorAll('.accordion-button');
      const allCollapses = accordion.querySelectorAll('.accordion-collapse');
      
      allButtons.forEach(btn => {
        if (btn !== button) {
          btn.classList.add('collapsed');
        }
      });
      
      allCollapses.forEach(collapse => {
        if (collapse !== button.nextElementSibling) {
          collapse.classList.remove('show');
        }
      });
      
      // Toggle current accordion
      if (isExpanded) {
        button.classList.remove('collapsed');
        button.nextElementSibling.classList.add('show');
      } else {
        button.classList.add('collapsed');
        button.nextElementSibling.classList.remove('show');
      }
    });
  });
};

// Parallax scrolling for mobile
export const initMobileParallax = () => {
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  if (parallaxElements.length === 0) return;

  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${rate}px)`;
    });
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
};

// Card hover effects for touch devices
export const initMobileCardEffects = () => {
  const cards = document.querySelectorAll('.card, .service-card, .testimonial-card, .pricing-card');
  
  cards.forEach(card => {
    // Add touch event listeners
    card.addEventListener('touchstart', () => {
      card.classList.add('touch-active');
    });
    
    card.addEventListener('touchend', () => {
      setTimeout(() => {
        card.classList.remove('touch-active');
      }, 150);
    });
    
    // Add CSS for touch effects
    if (!document.querySelector('#mobile-card-effects')) {
      const style = document.createElement('style');
      style.id = 'mobile-card-effects';
      style.textContent = `
        .card.touch-active,
        .service-card.touch-active,
        .testimonial-card.touch-active,
        .pricing-card.touch-active {
          transform: scale(0.98) !important;
          transition: transform 0.1s ease !important;
        }
      `;
      document.head.appendChild(style);
    }
  });
};

// Initialize all mobile utilities
export const initAllMobileUtilities = () => {
  console.log('Initializing mobile utilities...');
  
  try {
    initMobileAnimations();
    initSmoothScrolling();
    initBackToTop();
    initMobileMenu();
    initMobileAccordions();
    initMobileCardEffects();
    
    console.log('Mobile utilities initialized successfully');
  } catch (error) {
    console.error('Error initializing mobile utilities:', error);
  }
};

// Reinitialize on window resize
export const reinitMobileUtilities = () => {
  // Debounce resize events
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (window.innerWidth <= 991) {
        initAllMobileUtilities();
      }
    }, 250);
  });
};

export default {
  initMobileAnimations,
  initSmoothScrolling,
  initBackToTop,
  initMobileMenu,
  initMobileAccordions,
  initMobileParallax,
  initMobileCardEffects,
  initAllMobileUtilities,
  reinitMobileUtilities
};
