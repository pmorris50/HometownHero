import React, { useState } from 'react';

import { MUTATION_SIGN_UP } from '../utils/mutations';
import { useMutation } from '@apollo/client';

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

          
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
            console.log(data + "This is the data");
        }
    };
    
    return (
        <main className="flex-row justify-center mb-4">
          <div className="col-12 col-lg-10">
            <div className="card">
              <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
              <div className="card-body">
                {data ? (
                  <p>
                    Success! You may now head back
                  </p>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <input
                      className="form-input"
                      placeholder="Your First Name"
                      name="firstName"
                      type="text"
                      value={formState.firstName}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Your Last Name"
                      name="lastName"
                      type="text"
                      value={formState.lastName}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Your Email"
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
                      className="btn btn-block btn-primary"
                      style={{ cursor: 'pointer' }}
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