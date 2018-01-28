export const createDataAttrValueForStats = (value, index) => {
  return value && index !== false ? value + '_' + (index + 1) : null;
};
