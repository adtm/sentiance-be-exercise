const { getEventHistoriesByRange } = require("./eventHistory/eventHistory.repo");
const { getMomentHistoriesByRange } = require("./momentHistory/momentHistory.repo");

const {
  getAllTransportModeDurations,
  getAllModeDistance,
} = require("./eventHistory/eventHistory.service");

const { addDuration } = require("./utils/aggregation");

const getTimeline = async ({ start, end }) => {
  try {
    const [eventHistories, momentHistories] = await Promise.all([
      getEventHistoriesByRange({ start, end }),
      getMomentHistoriesByRange({ start, end }),
    ]);

    const momentHistoriesWithDuration = momentHistories.map(addDuration);
    const eventHistoriesWithDuration = eventHistories.map(addDuration);

    const transportModeDurations = getAllTransportModeDurations(eventHistoriesWithDuration);

    return {
      eventHistories: eventHistoriesWithDuration,
      momentHistories: momentHistoriesWithDuration,
      aggregated: {
        transportModeDurations,
        uniqueTransportModes: Object.keys(transportModeDurations).length,
        distanceByCar: getAllModeDistance("car", eventHistoriesWithDuration),
      },
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getTimeline,
};

// get duration of all transport modes
// get amounts by transport mode
// all distance travelled by car
