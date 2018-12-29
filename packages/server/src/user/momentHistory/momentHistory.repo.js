const MomentHistoryModel = require("./momentHistory.schema");

const getMomentHistoriesByRange = async ({ start, end }) => {
  const momentHistories = await MomentHistoryModel.find({
    start: { $gte: start },
    end: { $lte: end },
  });
  return momentHistories;
};

module.exports = {
  getMomentHistoriesByRange,
};
