export const limitToBounds = (x, max, min = 0) => {
  return Math.min(Math.max(x, min), max);
};

export const roundToNearestMultiple = (value, multiple) => {
  return Math.round(multiple * Math.round(value / multiple));
};
