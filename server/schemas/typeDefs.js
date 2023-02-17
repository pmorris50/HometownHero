const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    adminAccess: Boolean!
    campers: [Camper]
  }

  type Admin {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    phoneNumber1: String!
  }

  type Camp {
    _id: ID
    title: String
    location: String
    date: String
    price: String
    campers: [Camper]
  }

  type Camper {
    _id: ID
    firstName: String!
    lastName: String!
    age: String!
    gradeFinished: String!
    tshirtSize: String!
    emergencyContact: [Emergency]
    waiverSigned: Boolean
    campId: Camp
  }

  type Emergency {
    _id: ID
    fullName: String
    phoneNumber1: String
    phoneNumber2: String
  }

  type Product {
    _id: ID
    name: String!
    description: String
    image: String
    price: Float!
    quantity: Int!
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user(_id: ID!): User
    users: [User]
    camps: [Camp]
    camp(_id: ID!): Camp
    camper: [Camper]
    emergency: [Emergency]
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    signUp(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    addCamp(
      title: String
      location: String
      date: String
      price: String
    ): Camp
    addCamper(
      firstName: String!
      lastName: String!
      age: String!
      gradeFinished: String!
      tshirtSize: String!
      emergencyContact: [ID]
      waiverSigned: Boolean
      campId: ID
    ): Camper
    addEmergency(
      fullName: String
      phoneNumber1: String
      phoneNumber2: String
      camperId: ID
    ): Emergency
    addOrder(products: [ID]!): Order
    # addUser(
    #   firstName: String!
    #   lastName: String!
    #   email: String!
    #   password: String!
    # ): Auth
    # updateUser(
    #   firstName: String
    #   lastName: String
    #   email: String
    #   password: String
    # ): User
    # updateProduct(_id: ID!, quantity: Int!): Product
  }
`;

module.exports = typeDefs;
