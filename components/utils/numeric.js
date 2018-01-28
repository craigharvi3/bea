export const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

export const isPercentage = (n) => {
  return n >= 0 && n <= 100;
};
