import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query Users {
    users {
      _id
      firstName
      lastName
      email
      campers {
        _id
        firstName
        lastName
        age
        campId {
          _id
          title
        }
      }
      # adminAccess
    }
  }
`;

export const QUERY_USER = gql`
  query User($id: ID!) {
    user(_id: $id) {
      _id
      firstName
      lastName
      email
      campers {
        _id
        campId {
          _id
          date
          title
        }
        firstName
        lastName
        age
      }
    }
  }
`;

export const QUERY_CAMPS = gql`
  query Camps {
    camps {
      _id
      date
      location
      title
      price
      # campers {
      #   _id
      #   firstName
      #   lastName
      #   age
      # }
    }
  }
`;

export const QUERY_CAMP = gql`
query Camp($id: ID!) {
  camp(_id: $id) {
    _id
    title
    date
    location
    price
    campers {
      _id
      firstName
      lastName
      age
    }
  }
}
`;

export const QUERY_CAMPER = gql`
  query Camper {
    camper {
      _id
      firstName
      lastName
      age
      campId {
        _id
        title
      }
      gradeFinished
      tshirtSize
      emergencyContact {
        _id
        firstName
        lastName
        phoneNumber1
        phoneNumber2
      }
      waiverSigned
    }
  }
`;

export const QUERY_EMERGENCY = gql`
  query Emergency {
    emergency {
      _id
      firstName
      lastName
      phoneNumber1
      phoneNumber2
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
