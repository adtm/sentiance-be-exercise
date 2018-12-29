const aggregateFilteredData = (filterType, transportData) =>
  Object.entries(transportData[filterType]).map(([key, value]) => ({
    type: key,
    [filterType]: value,
  }));

export { aggregateFilteredData };
