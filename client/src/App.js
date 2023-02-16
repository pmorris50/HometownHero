import logo from "./logo.svg";
import "./App.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import RegistrationForm from "./components/RegistrationForm";
import Waiver from "./components/Waiver";
import Shop from "./pages/Shop";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import ShopNav from "./components/ShopNav";
import { Container } from "react-bootstrap";
import CartProvider from "./CartContext";
import Admin from "./pages/Admin";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (

    <ApolloProvider client={client}>
      <HashRouter>
        <div className="flex-column justify-flex-start min-100-vh">
            <img src='./images/football3.jpeg' alt="football" className="img img-fluid" />
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/login" element={<Login />} />

              <Route path="/shop" element={<Shop />} />

              <Route path="/signup" element={<Signup />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </HashRouter>
    </ApolloProvider>

  );
}

export default App;
