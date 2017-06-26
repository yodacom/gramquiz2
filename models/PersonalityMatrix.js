const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personalityMatrixSchema = new mongoose.Schema({
  primary: "String",
  secondary: "String",
  type: { type: Number, min: 1, max: 9 },
  center: "String"
});

const PersonalityMatrix = mongoose.model(
  "PersonalityMatrix",
  personalityMatrixSchema
);

module.exports = PersonalityMatrix;
