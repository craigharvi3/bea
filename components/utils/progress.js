/**
 * Progress calculator helper
 * Extracts total duration and current play head position to calculate
 * percentage completed
 *
 * This functionality will be provided by RMS in SOUNDS-1211
 *
 * returns 1 - 100 or NULL
 */

const hasValue = (y) => {
  return typeof y.value === 'number'
    && !isNaN(parseFloat(y.value))
    && isFinite(y.value)
    && y.value >= 0;
};

export const calcProgress = (item) => {

  const duration = item.duration;
  const progress = item.progress;

  const hasDuration = duration && hasValue(duration);
  const hasProgress = progress && hasValue(progress);

  if (hasDuration && hasProgress) {
    if (duration.value >= progress.value) {
      return Math.round(progress.value * 100 / duration.value);
    }
  }

  return null;
};
