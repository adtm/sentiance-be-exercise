const mongoose = require("mongoose");

const WaypointSchema = new mongoose.Schema({
  type: String,
  latitude: Number,
  longitude: Number,
  timestamp: Date,
  accuracy: Number,
});

const TrajectorySchema = new mongoose.Schema({
  type: String,
  encoded: String,
});

const EventHistorySchema = new mongoose.Schema({
  type: String,
  mode: String,
  distance: Number,
  start: Date,
  end: Date,
  analysis_type: String,
  latitude: Number,
  longitude: Number,
  location: {
    significance: String,
  },
  waypoints: [WaypointSchema],
  trajectory: TrajectorySchema,
});

const EventHistoryModel = mongoose.model("EventHistory", EventHistorySchema);
module.exports = EventHistoryModel;
