const moment = require("moment");

/**
 *
 * @NOTES
 * moment.utc(diff).format("DDD HH:mm:ss.SSS") would return a duration,
 * but it doesn't parse correctly days
 */
const calculateDuration = ({ start, end }) => {
  const startDate = moment(start);
  const endDate = moment(end);

  const diff = endDate.diff(startDate);
  return diff;
};

module.exports = {
  calculateDuration,
};
