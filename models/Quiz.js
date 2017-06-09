const mongoose = require("mongoose");
const quizSchema = new mongoose.Schema({
  personalityType: { type: Schema.Types.ObjectId, ref: "TypeReport" },
  bestWords: [{ type: Schema.Types.ObjectId, ref: "Word" }],
  person: { type: Schema.Types.ObjectId, ref: "Person" },
  user: {type: Schema.Types.ObjectId, ref:"User" }
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
