const SegmentModel = require("./segment.schema");

const getSegments = () => {
  return SegmentModel.find({}, (err, segments) => {
    if (err) return err;
    return segments;
  });
};

module.exports = {
  getSegments,
};
