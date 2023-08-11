const { Student } = require("./model/Student.js");
const { Question } = require("./model/question.js");

const resolvers = {
  Query: {
    hello: () => "GraphQL is Awesome",
    welcome: (params) => `Hello ${params.name}`,
  },
  Mutation: {
    create: async (parent, args) => {
      const { firstName, lastName, age } = args;
      const newStudent = new Student({
        firstName,
        lastName,
        age,
      });
      console.log("newStudent", newStudent);
      await newStudent.save();
      return newStudent;
    },
    AddQuestion: async (parent, args) => {
      const { question } = args;
      const newQuestion = new Question({
        question,
        votes: 0,
        answer: "",
        author: "",
      });
      console.log("newQuestion", newQuestion);
      await newQuestion();
      return newQuestion;
    },
    updateQuestion: async (parent, args) => {
      const { id, question, answer, votes, author } = args;
      console.log("newQuestion", newQuestion);
      await Question.findByIdAndUpdate(id, args);
      return newQuestion;
    },
  },
};

module.exports = { resolvers };
