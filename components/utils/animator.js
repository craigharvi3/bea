/*
  Usage:
  https://github.com/bbc/navpromo/blob/4104f68db159efe7c73ec56b4f5232b84914a52f/develop-assets/navpromo-slider.js
  Animator:
  https://github.com/bbc/navpromo/blob/4104f68db159efe7c73ec56b4f5232b84914a52f/develop-assets/navpromo/animator.js
*/
const isWindowDefined = () => {
  return (typeof window !== 'undefined');
};

const getRequestAnimationFrameFallback = (callback) => {
  if (isWindowDefined()) {
    window.setTimeout(callback, 1000 / 60);
  }
};

// Get instance of requestAnimationFrame or create a fallback
const getRequestAnimationFrame = () => {
  if (isWindowDefined()) {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      getRequestAnimationFrameFallback;
  }
};

// Get instance of cancelAnimationFrame or create a fallback
const getCancelRequestAnimationFrame = () => {
  if (isWindowDefined()) {
    return window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
      window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
      window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||
      window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||
      clearTimeout;
  }
};

// Create instance of requestAnimationFrame used when scrolling
const requestAnimationShim = (getRequestAnimationFrame)();

/*
 * For more easing functions - @see http://gizma.com/easing/
 * only considering the t value for the range [0, 1] => [0, 1]
 * Note: do not lift and shift formulas from above website url,
 * there is no license, the author hasn't licensed the code, and we have no right to use it.
 */
const easing = {
  // decelerating to zero velocity
  easeOutCubic: (t) => {
    return Math.pow((t - 1), 3) + 1;
  }
};

const calculateTime = (a, b) => {
  return a < b ? a : b;
};

const newPosition = (easedT, from, to) => {
  return Math.ceil((easedT * (to - from)) + from);
};

const scrollTo = (elem, to, duration, easingFunction, callback) => {
  const start = Date.now();
  const from = elem.scrollLeft;

  // Prevent scrolling to X point if already there
  if (from === to) {
    return false;
  }

  const scroll = () => {
    const currentTime = Date.now();
    const time = calculateTime(1, ((currentTime - start) / duration));
    const easedT = easingFunction(time);

    elem.scrollLeft = newPosition(easedT, from, to);

    if (time < 1) {
      if (typeof (callback) !== 'undefined') {
        callback();
      }
      requestAnimationShim(scroll);
    }
  };

  const requestId = requestAnimationShim(scroll);
  getCancelRequestAnimationFrame(requestId);
};

const debounce = (func, wait, immediate) => {
  let timeout;
  return () => {
    const context = this;
    const args = arguments; // eslint-disable-line
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// eslint-disable-next-line
module.exports = {
  scrollTo: scrollTo,
  easing: easing,
  debounce: debounce,
  requestAnimationShim: requestAnimationShim
};
