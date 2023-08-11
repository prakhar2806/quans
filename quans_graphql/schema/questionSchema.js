const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  id: Number,
  question: {
    type: String,
    required: true,
  },
  answer: String,
  votes: Number,
  author: String,
  comments: [String],
});

module.exports = questionSchema;
