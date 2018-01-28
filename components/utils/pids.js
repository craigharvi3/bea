export const extractPidFromUrn = (urn) => {
  const urnParts = urn.split(':');

  return urnParts[urnParts.length - 1];
};
