const express = require("express");
const questionRouter = express.Router();
const questions = require("../questions");
let quans = [...questions];

questionRouter.post("/", async (req, res) => {
  console.log("api hit", req.body);
  res.send({ data: quans });
});

questionRouter.post("/updateQues", (req, res) => {
  const filterIndex = quans.findIndex((x) => x.id === req.body.id);
  quans[filterIndex] = req.body;
  console.log(filterIndex, quans[filterIndex]);
  res.send({ data: quans });
});

module.exports = questionRouter;
