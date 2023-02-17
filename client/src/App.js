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
import Shop from "./pages/Shop";
import { Container } from "react-bootstrap";
import Admin from "./pages/Admin";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
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
