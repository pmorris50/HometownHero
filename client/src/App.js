import logo from './logo.svg';
import './App.css';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About'
import Admin from './pages/Admin'
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import WebsiteContainer from './pages/WebsiteContainer';
import Waiver from './components/Waiver';
import Shop from './pages/Shop'
//import Admin from './pages/Admin';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
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
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <div ClassName="flex-column justify-flex-start min-100-vh">
            <Header />
            <Route
            path = "/"
            element = {<About/>} 
            />
            <Route
            path = "/login"
            element = {<Login/>} 
            />
            <Route
            path = "/shop"
            element = {<Shop/>} 
            />
            <Route 
            path = "/signup"
            element = {<Signup/>}
            />
        </div>
        
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;



