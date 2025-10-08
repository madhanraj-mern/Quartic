import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

/**
 * StrapiCards
 * A fully resilient card grid that consumes data from Strapi without breaking the
 * layout if some fields are missing. The component preserves alignment, colors and
 * hover effects, while providing graceful fallbacks.
 *
 * Props
 * - apiUrl: string        -> Base Strapi URL (e.g. http://localhost:1337)
 * - endpoint: string      -> Strapi collection endpoint (e.g. /api/cards?populate=*)
 * - titleKey: string      -> Path to title field inside attributes (default: 'title')
 * - descriptionKey: string-> Path to description field inside attributes (default: 'description')
 * - imageKey: string      -> Path to image relation inside attributes (default: 'image')
 * - ctaTextKey: string    -> Path to CTA text (optional)
 * - ctaUrlKey: string     -> Path to CTA url (optional)
 */

const StyledSection = styled.section`
  width: 100%;
  padding: 60px 0;
  background: transparent;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .cards_grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 24px;
    align-items: stretch;
  }

  .card {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #ffffff; /* Preserve color scheme */
    color: #000000;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18); /* Maintain hover effects */
  }

  .card_img {
    width: 100%;
    height: 180px;
    background: #f5f6f7;
    display: block;
    object-fit: cover;
  }

  .card_body {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px;
  }

  .card_title {
    font-size: 18px;
    line-height: 1.35;
    font-weight: 700;
    color: #111111;
    margin: 0 0 4px 0;
  }

  .card_desc {
    font-size: 14px;
    color: #444444;
    line-height: 1.55;
    margin: 0 0 8px 0;
    flex: 1 1 auto;
  }

  .card_cta {
    margin-top: auto;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: #f15a29; /* Accent color from current design */
    font-weight: 600;
  }

  .card_cta svg {
    transition: transform 0.2s ease;
  }

  .card_cta:hover svg {
    transform: translateX(4px);
  }
`;

// Local placeholder (exists in repo: src/assets/images/no-resource.jpg)
const PLACEHOLDER_IMG = '/assets/images/no-resource.jpg';

// Safe getter for nested values ("a.b.c")
const getIn = (obj, path, fallback) => {
  try {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj) ?? fallback;
  } catch (e) {
    return fallback;
  }
};

// Build absolute image URL from Strapi response
const resolveImageUrl = (baseUrl, item, imageKey) => {
  const imgData = getIn(item, `attributes.${imageKey}.data.attributes.url`, null)
    || getIn(item, `attributes.${imageKey}.data[0].attributes.url`, null)
    || getIn(item, `${imageKey}.data.attributes.url`, null);

  if (!imgData) return PLACEHOLDER_IMG;
  // If Strapi returns absolute URL keep it, else prefix with baseUrl
  if (/^https?:\/\//i.test(imgData)) return imgData;
  return `${baseUrl}${imgData}`;
};

const normalizeCard = (baseUrl, raw, keys) => {
  const title = getIn(raw, `attributes.${keys.titleKey}`, 'Default Title');
  const description = getIn(raw, `attributes.${keys.descriptionKey}`, 'No description available.');
  const image = resolveImageUrl(baseUrl, raw, keys.imageKey);
  const ctaText = getIn(raw, `attributes.${keys.ctaTextKey}`, 'Learn More');
  const ctaUrl = getIn(raw, `attributes.${keys.ctaUrlKey}`, '#');
  return { title, description, image, ctaText, ctaUrl };
};

const fallbackCards = [
  {
    title: 'Default Title',
    description: 'No description available.',
    image: PLACEHOLDER_IMG,
    ctaText: 'Learn More',
    ctaUrl: '#',
  },
  {
    title: 'Default Title',
    description: 'No description available.',
    image: PLACEHOLDER_IMG,
    ctaText: 'Learn More',
    ctaUrl: '#',
  },
  {
    title: 'Default Title',
    description: 'No description available.',
    image: PLACEHOLDER_IMG,
    ctaText: 'Learn More',
    ctaUrl: '#',
  },
];

const StrapiCards = ({
  apiUrl = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337',
  endpoint = '/api/cards?populate=*',
  titleKey = 'title',
  descriptionKey = 'description',
  imageKey = 'image',
  ctaTextKey = 'ctaText',
  ctaUrlKey = 'ctaUrl',
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [items, setItems] = useState(fallbackCards);

  const keys = useMemo(() => ({ titleKey, descriptionKey, imageKey, ctaTextKey, ctaUrlKey }), [
    titleKey,
    descriptionKey,
    imageKey,
    ctaTextKey,
    ctaUrlKey,
  ]);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${apiUrl}${endpoint}`);
        if (!res.ok) throw new Error(`Strapi fetch failed with status ${res.status}`);
        const json = await res.json();
        const dataArray = Array.isArray(json?.data) ? json.data : [];

        const normalized = (dataArray.length ? dataArray : fallbackCards).map((raw) =>
          normalizeCard(apiUrl, raw, keys)
        );

        if (alive) setItems(normalized);
      } catch (err) {
        console.warn('Strapi fetch error:', err);
        if (alive) {
          // Keep graceful fallbacks
          setItems(fallbackCards);
          setError('Unable to load content from Strapi. Showing default content.');
        }
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [apiUrl, endpoint, keys]);

  return (
    <StyledSection>
      <div className="container">
        {loading && <LoadingSpinner />}
        {!loading && error && <ErrorMessage message={error} />}

        {!loading && (
          <div className="cards_grid">
            {items.map((card, idx) => (
              <article key={`${card.title}-${idx}`} className="card" aria-label={card.title}>
                <img
                  className="card_img"
                  src={card.image || PLACEHOLDER_IMG}
                  alt={card.title || 'Card image'}
                  width="400"
                  height="180"
                  loading="lazy"
                />
                <div className="card_body">
                  <h3 className="card_title">{card.title || 'Default Title'}</h3>
                  <p className="card_desc">{card.description || 'No description available.'}</p>
                  <a href={card.ctaUrl || '#'} className="card_cta">
                    {card.ctaText || 'Learn More'}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M4 8H12M12 8L8 4M12 8L8 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </StyledSection>
  );
};

export default StrapiCards;


