const mongoose = require("mongoose");

const MomentHistorySchema = new mongoose.Schema({
  start: Date,
  end: Date,
  analysis_type: String,
  moment_definition_id: String,
});

const MomentHistoryModel = mongoose.model("MomentHistory", MomentHistorySchema);
module.exports = MomentHistoryModel;
