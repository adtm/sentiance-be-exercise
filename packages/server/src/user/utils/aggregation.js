const { calculateDuration } = require("./duration");

const addDuration = obj => {
  return Object.assign(obj.toObject(), { duration: calculateDuration(obj) });
};

module.exports = {
  addDuration,
};
