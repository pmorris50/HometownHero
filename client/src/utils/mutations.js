import { gql } from "@apollo/client";

export const MUTATION_SIGN_UP = gql`
  mutation SignUp($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  signUp(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    user {
      firstName
      lastName
      email
      password
    }
  }
  login(email: $email, password: $password) {
    token
    user {
      firstName
      lastName
      email
      password
    }
  }
}
`;

export const MUTATION_LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const MUTATION_ADD_CAMP = gql`
  mutation AddCamp($title: String, $location: String, $date: String, $price: String) {
  addCamp(title: $title, location: $location, date: $date, price: $price) {
    _id
    campers {
      _id
      age
      firstName
      lastName
      campId {
        _id
        date
        location
        }
      }
    date
    location
    title
    price
  }
  }
`;

export const MUTATION_ADD_CAMPER = gql`
  mutation AddCamper(
    $firstName: String!
    $lastName: String!
    $age: String!
    $gradeFinished: String!
    $tshirtSize: String!
    $emergencyContact: [ID] 
    $waiverSigned: Boolean
    $campId: ID 
  ) {
    addCamper(
      firstName: $firstName
      lastName: $lastName
      age: $age
      gradeFinished: $gradeFinished
      tshirtSize: $tshirtSize
      emergencyContact: $emergencyContact
      waiverSigned: $waiverSigned
      campId: $campId
    ) {
      _id
      age
      firstName
      lastName
      campId {
        _id
        title
      }
      gradeFinished
      tshirtSize
      emergencyContact {
        _id
        fullName
        phoneNumber1
        phoneNumber2
      }
      waiverSigned
    }
  }
`;

export const MUTATION_ADD_EMERGENCY = gql`
  mutation AddEmergency(
    $fullName: String
    $phoneNumber1: String
    $phoneNumber2: String
  ) {
    addEmergency(
      fullName: $fullName
      phoneNumber1: $phoneNumber1
      phoneNumber2: $phoneNumber2
    ) {
      _id
      fullName
      phoneNumber1
      phoneNumber2
    }
  }
`;