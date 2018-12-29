const mongoose = require("mongoose");

const SegmentDefinitionSchema = new mongoose.Schema({
  id: String,
  display_name: String,
  description: String,
});

const SegmentSchema = new mongoose.Schema({
  segment_definition_id: String,
  segment_definition: SegmentDefinitionSchema,
});

const SegmentModel = mongoose.model("Segment", SegmentSchema);
module.exports = SegmentModel;
