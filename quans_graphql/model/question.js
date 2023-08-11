const mongoose = require("mongoose");

const Question = mongoose.model("Question", {
  id: Number,
  question: String,
  answer: String,
  votes: Number,
  author: String
});

module.exports = { Question };
