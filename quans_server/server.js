const express = require("express");
const app = express();
const dev = process.env.NODE_ENV !== "production";
const cors = require("cors");

const questionRouter = require("./questionRouter");

app.use(cors());
app.use(express.json());
app.use("/ques", questionRouter);

app.listen(3030, (err) => {
  if (err) throw err;
  console.log("> Ready on http://localhost:3030");
});
