import { useEffect, useRef } from 'react';
import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';

export default function ContactFormChoicesInit({ selectId = 'inquiryType' }) {
  const instanceRef = useRef(null);

  useEffect(() => {
    const selectEl = document.getElementById(selectId);
    if (!selectEl) return;
    instanceRef.current = new Choices(selectEl, {
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: '',
      allowHTML: true,
    });
    return () => {
      try { instanceRef.current?.destroy(); } catch (_) {}
    };
  }, [selectId]);

  return null;
}


