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
                <button className="btn btn-danger"onClick={() => setShowModal(false)}>Close</button>
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

    const [ addCamper, { error, data }] = useMutation(MUTATION_ADD_CAMPER);

    //camp info
    const [ campData, setCampData ] = useState({
      title: '',
      location: '',
      price: '',

    })

    const handleSubmit = async (event) => {
      event.preventDefault();

      const { data } = await addCamper({
        variables: { firstName, lastName, age, gradeFinished, tshirtSize }
      });

      return (
        <div>
          <Waiver/>
        </div>
      );
      
    }

    return (
      <form className = "form" onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="first-name">Enter your camper's first name:</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            className="form-control"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="last-name">Enter your camper's last name:</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            className="form-control"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="age">Enter your camper's age:</label>
          <input
            type="number"
            id="age"
            value={age}
            className="form-control"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="grade-finished">What grade is your camper in?</label>
          <input
            type="text"
            id="grade-finished"
            value={gradeFinished}
            className="form-control"
            onChange={(e) => setGradeFinished(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tshirt-size">Select a T-shirt Size:</label>
          <input
            type="text"
            id="tshirt-size"
            value={tshirtSize}
            className="form-control"
            onChange={(e) => setTshirtSize(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    );
  
}

export default RegistrationForm