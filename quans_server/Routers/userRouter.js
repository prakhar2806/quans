const express = require("express");
const app = express();
const userRouter = express.Router();
const questions = require("../questions");
let quans = [...questions];
const UserModel = require("../Schema/user_schema");

app.use(express.json());

userRouter.post("/register", async (req, res) => {
  try {
    const user = new UserModel({
      id: 1,
      username: req.body.username,
      password: req.body.password,
    });
    await user
      .save()
      .then((data) => {
        console.log(data);
        res.status(200).send({ status: "ok" });
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send({ status: "user registeration failure" });
      });
  } catch (err) {
    res.render("error", { error: err });
  }
});

userRouter.post("/login", async (req, res) => {
  console.log("login", req.body);
  //   if(!(req.body.username && req.body.password)){
  //     res.status(500);
  //     res.render("error", { error: "please provide both username and password" });
  //   }
  const user = UserModel.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if (user) {
    res.status(200).send({ status: "ok" });
  } else {
    res
      .status(404)
      .send({ status: "Either username or password is incorrect" });
  }
});

module.exports = userRouter;
