// const axios = require('axios')
const { get } = require("../../api/dataset.api");

const MomentHistory = require("../../user/momentHistory/momentHistory.schema");
const EventHistory = require("../../user/eventHistory/eventHistory.schema");
const Segment = require("../../user/segment/segment.schema");

const prefillDatabase = async () => {
  try {
    const { data } = await get();
    const { moment_history, event_history, segments } = data.user;

    console.log(moment_history.length);
    console.log(event_history.length);
    console.log(segments.length);

    try {
      await MomentHistory.insertMany(moment_history);
      await EventHistory.insertMany(event_history);
      await Segment.insertMany(segments);
      console.log("inserted all!");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  prefillDatabase,
};
