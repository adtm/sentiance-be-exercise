const getAllTransportModeDurations = eventHistories =>
  eventHistories.reduce((uniqueTransports, eventHistory) => {
    const { type, duration } = eventHistory;

    if (!uniqueTransports[type]) uniqueTransports[type] = duration;
    else uniqueTransports[type] += duration;

    return uniqueTransports;
  }, {});

const getAllModeDistance = (mode, eventHistories) =>
  eventHistories.reduce((totalDistance, eventHistory) => {
    if (eventHistory.mode === mode) totalDistance += eventHistory.distance;
    return totalDistance;
  }, 0);

module.exports = { getAllTransportModeDurations, getAllModeDistance };
