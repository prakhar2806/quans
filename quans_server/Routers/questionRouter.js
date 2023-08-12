const express = require("express");
const questionRouter = express.Router();
const questions = require("../questions");
let quans = [...questions];
const questionModel = require("../Schema/question_schema");

questionRouter.post("/", async (req, res) => {
  console.log("api hit", req.body);
  res.send({ data: quans });
});

questionRouter.post("/create", async (req, res) => {
  console.log("api hit", req.body);
  const question = new questionModel(req.body);
  question
    .save()
    .then((data) => {
      console.log(data);
      res.send("data inserted");
    })
    .catch((err) => {
      console.log(err);
    });
});

questionRouter.post("/delete", async (req, res) => {
  console.log("api hit", req.body);
  const question = new questionModel(req.body);
  question
    .findByIdAndDelete(req.body)
    .then((data) => {
      console.log(data);
      res.send("data deleted");
    })
    .catch((err) => {
      console.log(err);
    });
});

questionRouter.post("/updateQues", (req, res) => {
  const filterIndex = quans.findIndex((x) => x.id === req.body.id);
  quans[filterIndex] = req.body;
  console.log(filterIndex, quans[filterIndex]);
  res.send({ data: quans });
});

module.exports = questionRouter;
