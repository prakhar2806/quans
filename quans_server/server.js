const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const dev = process.env.NODE_ENV !== "production";
const cors = require("cors");
const bodyParser = require("body-parser");

const questionRouter = require("./Routers/questionRouter");

app.use(cors());
app.use(express.json());
app.use("/ques", questionRouter);

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Parses the text as json
app.use(bodyParser.json());

const query = process.env.ATLAS_URI;

mongoose.Promise = global.Promise;

mongoose
  .connect(query, {
    dbName: "QuestionDB",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB!"))
  .catch((error) => console.log(error));

// mongoose.connect(
//   query,
//   {
//     dbName: "QuestionDB",
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   function (error) {
//     if (error) {
//       console.log("Error!" + error);
//     }
//   }
// );

app.listen(3030, (err) => {
  if (err) throw err;
  console.log("> Ready on http://localhost:3030");
});
