const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    id: { type: Number },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "user_collection" }
);

module.exports = mongoose.model("user", UserSchema, "user_collection");
