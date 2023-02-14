import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { MUTATION_LOGIN } from '../utils/mutations';
import './Login.css';
import { Navigate } from 'react-router-dom'

import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ 
      email: '', 
      password: '' });
    const [login, { error, data }] = useMutation(MUTATION_LOGIN);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
         console.error(e + " this error");
      }

      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };

    const styles = {
      header: {
        background: '#203731',
        color: "#FFB612"
      },
      button: {
        color: "#FFB612",
        backgroundColor: "#203731"
      }
    }
  
    return (
      <main className="container flex-row justify-center">
        <div className="col-12 mt-4">
          <div className="card">
            <h4 className="card-header p-2" style={styles.header}>Login</h4>
            <div className="card-body">
              {data ? (
                <Navigate to="/" />
              ) : (
                <form onSubmit={handleFormSubmit} className='loginForm'>
                  <input
                    className="form-input"
                    placeholder="email@example.com"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <button
                    className="btn btn-block loginbtn"
                    style={styles.button}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              )}
  
              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default Login;