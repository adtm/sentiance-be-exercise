const { get } = require("../../api/dataset.api");

const AppError = require("../../utils/AppError/AppError");

const MomentHistory = require("../../user/momentHistory/momentHistory.schema");
const EventHistory = require("../../user/eventHistory/eventHistory.schema");
const Segment = require("../../user/segment/segment.schema");

const prefillDatabase = async () => {
  try {
    const { data } = await get();
    const { moment_history, event_history, segments } = data.user;

    await Promise.all([
      MomentHistory.insertMany(moment_history),
      EventHistory.insertMany(event_history),
      Segment.insertMany(segments),
    ]);
  } catch (err) {
    throw new AppError("Couldn't prefill database" + err);
  }
};

module.exports = {
  prefillDatabase,
};
