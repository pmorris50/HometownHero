const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    campers: [Camper]
    }

    type Admin {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    phoneNumber1: String!
    # adminAccess: Boolean!
    }

    type Camp {
    _id: ID
    title: String!
    location: String!
    date: String!
    price: Float!
    campers: [Camper]
    }

    type Camper {
    _id: ID
    firstName: String!
    lastName: String!
    age: Int!
    gradeFinished: Int!
    tshirtSize: String!
    emergencyContact: [Emergency]
    waiverSigned: Boolean!
    campId: Camp
    }

    type Emergency {
    _id: ID
    firstName: String!
    lastName: String!
    phoneNumber1: String!
    phoneNumber2: String!
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
    }
     
    type Mutation {
    signUp(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    login(email: String!, password: String!): Auth
    addCamp(title: String!, location: String!, date: String!, price: Float!): Camp
    addCamper(firstName: String!, lastName: String!, age: Int!, gradeFinished: Int!, tshirtSize: String!, emergencyContact: [ID]!, waiverSigned: Boolean!, campId: ID!): Camper
    addEmergency(firstName: String!, lastName: String!, phoneNumber1: String!, phoneNumber2: String!): Emergency
    }
`;

module.exports = typeDefs;
