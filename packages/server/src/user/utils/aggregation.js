const { calculateDuration } = require("./duration");

const addDuration = obj => Object.assign(obj.toObject(), { duration: calculateDuration(obj) });

module.exports = {
  addDuration,
};
