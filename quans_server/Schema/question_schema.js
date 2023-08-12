const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    id: Number,
    question: String,
    answer: String,
    votes: Number,
    author: String,
  },
  { collection: "question_collection" }
);

module.exports = mongoose.model(
  "question",
  QuestionSchema,
  "question_collection"
);
