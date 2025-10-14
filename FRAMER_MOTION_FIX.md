# Framer Motion Easing Error Fix

## Problem
Error: `Invalid easing type 'power2.out'` from Framer Motion

## Root Cause
The error occurs because `power2.out` is a GSAP easing function, not a Framer Motion easing type. Framer Motion requires either:
- String easing names: "linear", "easeIn", "easeOut", "easeInOut", "circIn", "circOut", "circInOut", "backIn", "backOut", "backInOut", "anticipate"
- Cubic-bezier arrays: [x1, y1, x2, y2]

## Solution Applied
Fixed `src/utils/animations.jsx` by replacing all instances of `ease: "power2.out"` with the equivalent cubic-bezier value:
```javascript
ease: [0.25, 0.46, 0.45, 0.94]
```

## GSAP Files (Correct Usage)
The following files correctly use `power2.out` with GSAP (no changes needed):
- `src/hooks/useGSAPAnimations.js` - Uses GSAP animations
- `src/assets/js/init.js` - Uses GSAP animations
- `src/assets/js/init2.js` - Uses GSAP animations

## Next Steps
1. **Clear browser cache** and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
2. **Restart the dev server** to ensure the fixes are loaded
3. If error persists, check the browser console for the exact file and line number

## Quick Fix Commands
```bash
# Stop the dev server
# Then restart it
npm run dev
```

## Easing Equivalents
For future reference:
- GSAP `power1.out` = Framer Motion `[0.25, 0.46, 0.45, 0.94]`
- GSAP `power2.out` = Framer Motion `[0.25, 0.46, 0.45, 0.94]`
- GSAP `power3.out` = Framer Motion `[0.215, 0.61, 0.355, 1]`
- GSAP `power4.out` = Framer Motion `[0.165, 0.84, 0.44, 1]`


