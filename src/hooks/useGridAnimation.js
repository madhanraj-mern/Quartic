import { useEffect, useMemo, useRef, useState } from 'react';

export const useGridAnimation = (imageList, gridType = 'home') => {
  const [tileStates, setTileStates] = useState({});
  const intervalRef = useRef(null);
  const delayRef = useRef(null);
  const currentImageIndexRef = useRef(0);
  const flipTimeoutsRef = useRef([]);

  const gridConfig = useMemo(() => ({
    home: { cols: 4, rows: 3, totalTiles: 12 },
    mom: { cols: 3, rows: 3, totalTiles: 9 },
    contact: { cols: 3, rows: 3, totalTiles: 9 }
  }), []);

  const config = gridConfig[gridType] || gridConfig.home;
  const shouldAnimate = imageList && imageList.length > 1;

  // Clear any pending timeouts
  const clearFlipTimeouts = () => {
    flipTimeoutsRef.current.forEach((timeoutId) => clearTimeout(timeoutId));
    flipTimeoutsRef.current = [];
  };

  useEffect(() => {
    clearInterval(intervalRef.current);
    clearTimeout(delayRef.current);
    clearFlipTimeouts();

    if (!imageList || imageList.length === 0) {
      setTileStates({});
      return;
    }

    // Initialise tile state to mirror original behaviour
    const initialStates = {};
    for (let i = 0; i < config.totalTiles; i++) {
      initialStates[i] = {
        visibleFace: 'front',
        frontIndex: 0,
        backIndex: imageList.length > 1 ? 1 : 0
      };
    }
    currentImageIndexRef.current = 0;
    setTileStates(initialStates);

    if (!shouldAnimate) {
      return () => {
        clearInterval(intervalRef.current);
        clearTimeout(delayRef.current);
        clearFlipTimeouts();
      };
    }

    const flipTile = (tileIndex, nextImageIndex) => {
      setTileStates((prev) => {
        const currentState = prev[tileIndex];
        if (!currentState) return prev;

        const hiddenFace = currentState.visibleFace === 'front' ? 'back' : 'front';

    return {
      ...prev,
      [tileIndex]: {
        ...currentState,
        frontIndex: hiddenFace === 'front' ? nextImageIndex : currentState.frontIndex,
        backIndex: hiddenFace === 'back' ? nextImageIndex : currentState.backIndex,
        visibleFace: hiddenFace
      }
    };
    });
    };

    const startSequentialFlip = () => {
      const totalTiles = config.totalTiles;
      const nextImageIndex = (currentImageIndexRef.current + 1) % imageList.length;
      const rowMajorIndices = Array.from({ length: totalTiles }, (_, i) => i);
      const shuffledTiles = [...rowMajorIndices].sort(() => Math.random() - 0.5);

      let idx = 0;
      const flipNext = () => {
        if (idx >= shuffledTiles.length) {
          currentImageIndexRef.current = nextImageIndex;
          return;
        }

        const tileIndex = shuffledTiles[idx];
        flipTile(tileIndex, nextImageIndex);
        idx += 1;
        const timeoutId = window.setTimeout(flipNext, 300);
        flipTimeoutsRef.current.push(timeoutId);
      };

      flipNext();
    };

    delayRef.current = window.setTimeout(() => {
      startSequentialFlip();
      intervalRef.current = window.setInterval(startSequentialFlip, 8000);
    }, 2000);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(delayRef.current);
      clearFlipTimeouts();
    };
  }, [imageList, config.totalTiles, shouldAnimate, config.rows, config.cols]);

  return {
    tileStates,
    config
  };
};
