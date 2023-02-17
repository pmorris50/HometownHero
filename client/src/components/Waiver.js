import React, { useState } from "react";
import '../pages/Signup.css';
import { useMutation } from '@apollo/client';
import { MUTATION_ADD_EMERGENCY } from "../utils/mutations";
import { Navigate, useNavigate } from "react-router-dom";

const Waiver = ({ camperFirstName, camperLastName }) => {
  const [showModal, setShowModal] = useState(false)
  const [fullName, setFullName] = useState("");
  // const [lastName, setLastName] = useState("")
  const [parentFirstName, setParentFirstName] = useState("")
  const [parentLastName, setParentLastName] = useState();
  const [email, setEmail] = useState("");
  const [phoneNumber1, setPhoneNumber1] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("")
  const [agreed, setAgreed] = useState(false);

  const [addEmergency, { error, data }] = useMutation(MUTATION_ADD_EMERGENCY);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Code to submit the form data to the server or database4
    try {
      const { data } = await addEmergency({
        variables: { fullName, phoneNumber1, phoneNumber2 },
      });
      console.log("DATA:", data);
      navigate('/shop');
    } catch (e) {
      console.error(e);
    }

  };

  const styles = {
    aboutInfo: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '35px',
    },
    header: {
      background: '#203731',
      color: "#FFB612"
    },
    button: {
      color: "#FFB612",
      backgroundColor: "#203731"
    },
    input: {
      textAlign: "center",
      border: "1px solid #ced4da",
      padding: "0.375rem 0.75rem",
    },
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 style={styles.aboutInfo}>Youth Sports Camp Waiver</h2>
        <p className="lead">
          I, <input style={styles.input} className="signupBtn" type="text" value={fullName} onChange={(e) => {setFullName(e.target.value) }} />,
          as the parent or legal guardian of the participating youth,
          do hereby release and hold harmless the Youth Sports Camp and its officers, directors,
          employees, and agents from any and all claims, demands, damages, or rights of action,
          whether known or unknown, arising out of or related to any loss, damage, or injury,
          including death, that may be sustained by the participating youth while participating in the camp activities.
        </p>
        <p className="lead">
         <input style={styles.input} placeholder="Camper First Name" className="signupBtn w-50" type="text" value={camperFirstName} />
        </p>
        <p className="lead">
         <input  style={styles.input} placeholder="Camper Last Name" className="signupBtn w-50" type="text" value={camperLastName}  />
        </p>
        <p className="lead" >
           <input style={styles.input} placeholder="Parent/Guardian Full Name" className="w-50 signupBtn" type="text" value={fullName} onChange={(e) => {setFullName(e.target.value)}} />
        </p>
        <p className="lead">
        <input style={styles.input} placeholder="Phone" className=" w-50 signupBtn" type="tel" value={phoneNumber1} onChange={(e) => setPhoneNumber1(e.target.value)} />
        </p>
        <p className="lead">
          <input style={styles.input} placeholder="Alternate Phone" className=" w-50 signupBtn" type="tel" value={phoneNumber2} onChange={(e) => setPhoneNumber2(e.target.value)} />
        </p>
        <p className="form-label">
          <input className="m-1" type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
          I have read and agreed to the terms of this waiver.
        </p>
        <button className="signupBtn btn btn-primary m-3" type="submit" style={styles.button} disabled={!agreed}>Submit</button>
      </form>
    </div>
  );
};

export default Waiver