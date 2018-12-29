const { DEFAULT_MODE } = require("./user.const");

const { getEventHistoriesByRange } = require("./eventHistory/eventHistory.repo");
const { getMomentHistoriesByRange } = require("./momentHistory/momentHistory.repo");

const {
  getAllModeDistance,
  getAllTransportModeDurations,
} = require("./eventHistory/eventHistory.service");

const { addDuration } = require("./utils/aggregation");

const getTimeline = async ({ start, end }) => {
  try {
    const [eventHistories, momentHistories] = await Promise.all([
      getEventHistoriesByRange({ start, end }),
      getMomentHistoriesByRange({ start, end }),
    ]);

    const eventHistoriesWithDuration = eventHistories.map(addDuration);
    const transportModeDurations = getAllTransportModeDurations(eventHistoriesWithDuration);

    return {
      momentHistories: momentHistories.map(addDuration),
      eventHistories: eventHistoriesWithDuration,
      aggregated: {
        transportModeDurations,
        uniqueTransportModes: Object.keys(transportModeDurations).length,
        distanceByCar: getAllModeDistance(DEFAULT_MODE, eventHistoriesWithDuration),
      },
    };
  } catch (err) {
    throw new AppError("Couldn't get user timeline" + err);
  }
};

module.exports = {
  getTimeline,
};
