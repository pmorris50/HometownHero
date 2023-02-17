import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CAMPS } from '../utils/queries';
import RegistrationForm from '../components/RegistrationForm'
import Auth from '../utils/auth';
import FormModal from './FormModal';
import "./Camp.css"
import '../pages/Signup.css';

export default function Camp() {

    const { data } = useQuery(QUERY_CAMPS);
    // console.log(data);

    const [showModal, setShowModal] = useState(false)

    const styles = {
      font: {
        fontFamily: 'Josefin Sans, sans-serif',
        fontSize: '35px',
      },
      button: {
        color: "#FFB612",
        backgroundColor: "#203731"
      }
    };

    function getFirstFourItems(dateString) {
      const items = dateString.split(' ');
      const sliced = items.slice(0, 4);
      return sliced.join(' ');
    }

    return (
        <div id="camps-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval = "false">
        <div className="carousel-inner">
            
          {data && data.camps.map((camp, index) => (
            <div
              key={camp._id}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className="card mt-4 text-center">
                <h1 className="card-header"style={styles.font}>{camp.title}</h1>
                <div className="card-body lead">
                  <p>Date: {getFirstFourItems(camp.date)}</p>
                  <p>Location: {camp.location}</p>
                  <p>Price: ${camp.price}</p>
                  {Auth.loggedIn() ? (
                    <div>
                      <button style={styles.button} className="btn btn-primary signupBtn" onClick={() => setShowModal(true)}>Register</button>
                      <FormModal showModal={showModal} setShowModal={setShowModal}>
                        <RegistrationForm campId={camp._id}/>
                      </FormModal>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#camps-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#camps-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
}

