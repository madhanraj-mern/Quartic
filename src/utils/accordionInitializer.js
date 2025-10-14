// Accordion Initializer - Fix dropdown functionality
import { Collapse } from 'bootstrap';

export const initializeAccordions = () => {
  try {
    // Initialize all accordion buttons
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
      // Remove any existing event listeners
      button.removeEventListener('click', handleAccordionClick);
      
      // Add click event listener
      button.addEventListener('click', handleAccordionClick);
      
      // Ensure proper ARIA attributes
      const targetId = button.getAttribute('data-bs-target') || button.getAttribute('aria-controls');
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          button.setAttribute('aria-controls', targetId.replace('#', ''));
          button.setAttribute('data-bs-target', targetId);
        }
      }
    });

    // Initialize Bootstrap Collapse instances
    const collapseElements = document.querySelectorAll('.accordion-collapse');
    collapseElements.forEach(element => {
      if (!element.hasAttribute('data-bs-collapse-initialized')) {
        new Collapse(element, {
          toggle: false
        });
        element.setAttribute('data-bs-collapse-initialized', 'true');
      }
    });

    console.log('Accordions initialized successfully');
  } catch (error) {
    console.error('Accordion initialization failed:', error);
  }
};

const handleAccordionClick = (event) => {
  try {
    const button = event.currentTarget;
    const targetId = button.getAttribute('data-bs-target');
    
    if (!targetId) {
      console.warn('No target specified for accordion button');
      return;
    }

    const targetElement = document.querySelector(targetId);
    if (!targetElement) {
      console.warn('Target element not found:', targetId);
      return;
    }

    // Check if accordion is part of a group (only one open at a time)
    const accordionGroup = button.closest('.accordion');
    if (accordionGroup) {
      // Close all other accordions in the same group
      const otherButtons = accordionGroup.querySelectorAll('.accordion-button:not([data-bs-target="' + targetId + '"])');
      otherButtons.forEach(otherButton => {
        const otherTargetId = otherButton.getAttribute('data-bs-target');
        if (otherTargetId) {
          const otherTargetElement = document.querySelector(otherTargetId);
          if (otherTargetElement && otherTargetElement.classList.contains('show')) {
            const otherCollapse = Collapse.getInstance(otherTargetElement);
            if (otherCollapse) {
              otherCollapse.hide();
            }
          }
        }
        otherButton.classList.add('collapsed');
        otherButton.setAttribute('aria-expanded', 'false');
      });
    }

    // Toggle current accordion
    const collapse = Collapse.getInstance(targetElement);
    if (collapse) {
      collapse.toggle();
    } else {
      const newCollapse = new Collapse(targetElement, {
        toggle: true
      });
    }

    // Update button state
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !isExpanded);
    button.classList.toggle('collapsed', isExpanded);

  } catch (error) {
    console.error('Error handling accordion click:', error);
  }
};

// Initialize accordions when DOM is ready
export const initializeAccordionsOnReady = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAccordions);
  } else {
    initializeAccordions();
  }
};

// Re-initialize accordions (useful for dynamic content)
export const reinitializeAccordions = () => {
  // Remove all existing event listeners
  const accordionButtons = document.querySelectorAll('.accordion-button');
  accordionButtons.forEach(button => {
    button.removeEventListener('click', handleAccordionClick);
  });
  
  // Re-initialize
  initializeAccordions();
};

export default {
  initializeAccordions,
  initializeAccordionsOnReady,
  reinitializeAccordions
};
