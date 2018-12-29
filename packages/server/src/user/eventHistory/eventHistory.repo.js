const EventHistoryModel = require("./eventHistory.schema");

const getEventHistoriesByRange = async ({ start, end }) => {
  const eventHistories = await EventHistoryModel.find({
    start: { $gte: start },
    end: { $lte: end },
  });
  return eventHistories;
};

module.exports = {
  getEventHistoriesByRange,
};
