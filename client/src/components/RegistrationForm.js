import React, {useState} from 'react'
import { MUTATION_ADD_CAMPER } from '../utils/mutations';
import { useMutation } from '@apollo/client';

import Waiver from './Waiver'; 
const Modal = ({children, showModal, setShowModal}) => {
    return (
        <>
        <>
          {showModal && (
            <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px" }}>
                {children}
                <button onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          )}
        </>
      ;
    
        </>
      )
    }


const RegistrationForm = () => {

    //user info
    const [ShowModal, setShowModal] = useState(false)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [gradeFinished, setGradeFinished] = useState("")
    const [tshirtSize, setTshirtSize] = useState("")

    //camp info
    const [ campData, setCampData ] = useState({
      title: '',
      location: '',
      price: '',

    })

    const handleSubmit = (event) => {
      event.preventDefault();
      return <Waiver/>;
      
    }

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="grade-finished">Grade Finished:</label>
          <input
            type="text"
            id="grade-finished"
            value={gradeFinished}
            onChange={(e) => setGradeFinished(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tshirt-size">T-shirt Size:</label>
          <input
            type="text"
            id="tshirt-size"
            value={tshirtSize}
            onChange={(e) => setTshirtSize(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  
}

export default RegistrationForm;