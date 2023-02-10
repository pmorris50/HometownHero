const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    adminAccess: Boolean!
    campers: [Campers]
    }

    type Camps {
    _id: ID
    title: String!
    location: String!
    date: Date!
    price: Float!
    campers: [Campers]
    }

    type Camper {
    _id: ID
    firstName: String!
    lastName: String!
    age: Number!
    gradeFinished: Number!
    tshirtSize: String!
    emergencyContact: [Emergency]
    waiverSigned: Boolean!
    campId: [Camps._id]
    }

    type Emergency {
    _id: ID
    firstName: String!
    lastName: String!
    phoneNumber1: String!
    phoneNumber2: String!
    }

    type Products {
    _id: ID
    name: String!
    description: String
    image: String
    price: Float!
    quantity: Number
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
    user: User
    camps: [Camp]
    camper: [Camper]
    emergency: [Emergency]
    product(_id: ID!): Product
    }
     
    type mutations {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
