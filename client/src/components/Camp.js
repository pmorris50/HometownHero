import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CAMPS } from '../utils/queries';
import RegistrationForm from '../components/RegistrationForm'
import Auth from '../utils/auth';
import FormModal from './FormModal';
import Waiver from './Waiver';

export default function Camp() {

    const { data } = useQuery(QUERY_CAMPS);
    // console.log(data);

    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            {data ?
                (<div>
                    {data.camps.map(function (camp) {
                        return (
                            <div key={camp._id} className="card mt-4 text-center">
                                <h1 className='card-header'>{camp.title}</h1>
                                <div className='card-body'>
                                    <p >Date: {camp.date}</p>
                                    <p>Location: {camp.location}</p>
                                    <p>Price: $ {camp.price}</p>
                                    {Auth.loggedIn() ? (
                                        <div>
                                            <button onClick={() => setShowModal(true)}>Register</button>
                                            <FormModal showModal={showModal} setShowModal={setShowModal}>
                                                <RegistrationForm campId={data} />
                                            </FormModal>
                                        </div>
                                    ) : (" ")
                                    }
                                </div>
                            </div>)
                    })
                    }
                </div>
                ) : (
                    "No camps Available at the moment!"
                )

            }
        </div>
    )
}

