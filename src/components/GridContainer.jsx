import React, { useEffect, useMemo, useRef } from 'react';
import { useGridAnimation } from '../hooks/useGridAnimation';

const GridContainer = ({
  imageList,
  gridType = 'home',
  className = '',
  id = '',
  overlayClass = '',
  overlayTiles
}) => {
  const gridRef = useRef(null);
  const { tileStates, config } = useGridAnimation(imageList, gridType);

  const backgroundSize = useMemo(() => {
    if (gridType === 'home') {
      return '400% 300%';
    }

    return '300% 300%';
  }, [gridType]);

  const overlayIndices = useMemo(() => {
    if (Array.isArray(overlayTiles)) {
      return overlayTiles;
    }

    if (gridType === 'home') {
      return [0, 1, 4, 7, 11];
    }

    return [];
  }, [overlayTiles, gridType]);

  useEffect(() => {
    if (gridRef.current && imageList && imageList.length > 0) {
      gridRef.current.setAttribute('data-home-page-banner-images', JSON.stringify(imageList));
    }
  }, [imageList]);

  if (!config) return null;

  const aspectRatio = gridType === 'home' ? '4/3' : '3/3';

  return (
    <div
      ref={gridRef}
      id={id}
      className={`grid-container ${className}`.trim()}
      style={{
        width: '100%',
        aspectRatio,
        display: 'grid',
        gridTemplateColumns: `repeat(${config.cols}, 1fr)`,
        gridTemplateRows: `repeat(${config.rows}, 1fr)`,
        gap: '1px',
        perspective: '1000px'
      }}
    >
      {Array.from({ length: config.totalTiles }, (_, index) => {
        const state = tileStates[index] || {
          visibleFace: 'front',
          frontIndex: 0,
          backIndex: imageList && imageList.length > 1 ? 1 : 0
        };

        const visibleFace = state.visibleFace || 'front';
        const frontImage = imageList?.[state.frontIndex] || null;
        const backImage = imageList?.[state.backIndex] || null;

        const col = index % config.cols;
        const row = Math.floor(index / config.cols);

        const backgroundPosition = gridType === 'home'
          ? `${col * 33.333}% ${row * 50}%`
          : `${col * 50}% ${row * 50}%`;

        const tileClasses = ['tile'];
        if (overlayClass && overlayIndices.includes(index)) {
          tileClasses.push(overlayClass);
        }

        return (
          <div
            key={index}
            className={tileClasses.join(' ')}
            data-index={index}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              perspective: '1000px',
              overflow: 'hidden'
            }}
          >
            <div
              className={`inner ${visibleFace === 'back' ? 'flipped' : ''}`.trim()}
              style={{
                width: '100%',
                height: '100%',
                transition: 'transform 0.8s ease',
                transformStyle: 'preserve-3d',
                position: 'relative'
              }}
            >
              <div
                className="front"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  backgroundImage: frontImage ? `url(${frontImage})` : 'none',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize,
                  backgroundPosition
                }}
              />
              <div
                className="back"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  backgroundImage: backImage ? `url(${backImage})` : 'none',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize,
                  backgroundPosition
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GridContainer;
