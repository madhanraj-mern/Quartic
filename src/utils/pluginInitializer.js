import Vivus from 'vivus';
import SplitType from 'split-type';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { initializeAccordions, initializeAccordionsOnReady } from './accordionInitializer';

export const initializeVivus = () => {
  try {
    const vivusElements = document.querySelectorAll('[data-vivus]');
    vivusElements.forEach(element => {
      new Vivus(element, {
        type: 'oneByOne',
        duration: 200,
        animTimingFunction: Vivus.EASE
      });
    });
  } catch (error) {
    console.warn('Vivus initialization failed:', error);
  }
};

export const initializeSplitType = () => {
  try {
    const splitElements = document.querySelectorAll('[data-split]');
    splitElements.forEach(element => {
      new SplitType(element, {
        types: 'words,chars',
        tagName: 'span'
      });
    });
  } catch (error) {
    console.warn('SplitType initialization failed:', error);
  }
};

export const initializeJQueryBootstrap = () => {
  try {
    window.$ = window.jQuery = $;
    
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  } catch (error) {
    console.warn('jQuery/Bootstrap initialization failed:', error);
  }
};

export const initializeAllPlugins = () => {
  initializeVivus();
  initializeSplitType();
  initializeJQueryBootstrap();
  initializeAccordions();
};

export default {
  initializeVivus,
  initializeSplitType,
  initializeJQueryBootstrap,
  initializeAccordions,
  initializeAllPlugins
};
