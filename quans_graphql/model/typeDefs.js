const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    hello: String
    welcome(name: String): String
  }

  # Student object
  type Student {
    id: ID
    firstName: String
    lastName: String
    age: Int
  }

  type Question {
    id: ID
    question: String
    answer: String
    votes: Int
    author: String
  }

  # Mutation
  type Mutation {
    create(firstName: String, lastName: String, age: Int): Student
    AddQuestion(question: String): Question
    updateQuestion(id: ID, question: String, answer: String, votes: Int , author:String): Question
  }
`;

module.exports = { typeDefs };
