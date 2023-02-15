import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CAMPS } from '../utils/queries';
import RegistrationForm from '../components/RegistrationForm'
import Auth from '../utils/auth';
import FormModal from './FormModal';
import Waiver from './Waiver';

export default function Camp() {

    const { data } = useQuery(QUERY_CAMPS);
    console.log(data);

    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            {data ?
                (<div>
                    {data.camps.map((camp) => (
                        <div key={camp._id}>
                            <h1>{camp.title}</h1>
                            <p>Date: {camp.date}</p>
                            <p>Location: {camp.location}</p>
                            <p>Price: $ {camp.price}</p>
                            {Auth.loggedIn() ? (
                                <div>
                                    <button onClick={() => setShowModal(true)}>Register</button>
                                    <FormModal showModal={showModal} setShowModal={setShowModal}>
                                        <Waiver/>
                                        <RegistrationForm />
                                    </FormModal>
                                </div>
                            ) : (" ")
                            }
                        </div>))
                    }
                </div>
                ) : (
                    "No camps Available at the moment!"
                )

            }
        </div>
    )
}
