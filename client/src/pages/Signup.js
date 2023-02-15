import React, { useState } from 'react';

import { MUTATION_SIGN_UP, MUTATION_LOGIN } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import './Signup.css';
import Auth from '../utils/auth';


const SignUp = () => {
    
    const [ formState, setFormState ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    
    const [addUser, { error, data }] = useMutation(MUTATION_SIGN_UP);


    const handleChange = (event) => {

        const {name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addUser({
                variables: { ...formState },  
            });

            console.log("DATA:", data);
            
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
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
              <h4 className="card-header p-2" style={styles.header}>Sign Up</h4>
              <div className="card-body">
                {data ? (
                  <p>
                    Success! You may now head back
                  </p>
                ) : (
                  <form onSubmit={handleFormSubmit} className="signupForm">
                    <input
                      className="form-input"
                      placeholder="First"
                      name="firstName"
                      type="text"
                      value={formState.firstName}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Last"
                      name="lastName"
                      type="text"
                      value={formState.lastName}
                      onChange={handleChange}
                    />
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
                      className="btn btn-block btn-primary signupBtn"
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
}

export default SignUp;