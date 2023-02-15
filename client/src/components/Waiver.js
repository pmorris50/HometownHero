import React, { useState } from "react";
import FormModal from './FormModal'

import { useMutation } from '@apollo/client';
import { MUTATION_ADD_EMERGENCY } from "../utils/mutations";
import { Navigate, useNavigate }   from "react-router-dom";



// const Modal = ({children, showModal, setShowModal}) => {
//   return (
//     <>
//     <>
//       {showModal && (
//         <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//           <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px" }}>
//             {children}
//             <button onClick={() => setShowModal(false)}>Close</button>
//           </div>
//         </div>
//       )}
//     </>
//   ;

//     </>
//   )
// }



const Waiver = ({camperFirstName, camperLastName }) => {
  const [showModal, setShowModal] = useState(false)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
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
        variables: { firstName, lastName, phoneNumber1, phoneNumber2 },
      });
      console.log("DATA:", data);
      navigate('/');
    } catch (e) { 
      console.error(e);
    }

  };

  return (
    <div>
      <button onClick = {() => setShowModal(true)}>Waiver</button>
    <form onSubmit={handleSubmit}>
      <h2>Youth Sports Camp Waiver</h2>
      <p>
        I, <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />, 
        as the parent or legal guardian of the participating youth, 
        do hereby release and hold harmless the Youth Sports Camp and its officers, directors, 
        employees, and agents from any and all claims, demands, damages, or rights of action, 
        whether known or unknown, arising out of or related to any loss, damage, or injury, 
        including death, that may be sustained by the participating youth while participating in the camp activities.
      </p>
      <p>
        Camper First Name: <input type="text" value={camperFirstName} onChange={(e) => setFirstName(e.target.value)} />
      </p>
      <p>
        Camper Last Name: <input type="text" value={camperLastName} onChange={(e) => setLastName(e.target.value)} />
      </p>
      <p>
        Parent/Guardian  First Name: <input type="text" value={firstName} onChange={(e) => setParentFirstName(e.target.value)} />
      </p>
      <p>
        Parent/Guardian  Last Name: <input type="text" value={lastName} onChange={(e) => setParentLastName(e.target.value)} />
      </p>
      <p>
        Phone: <input type="tel" value={phoneNumber1} onChange={(e) => setPhoneNumber1(e.target.value)} />
      </p>
      <p>
       Alternate Phone: <input type="tel" value={phoneNumber2} onChange={(e) => setPhoneNumber2(e.target.value)} />
      </p>
      <p>
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
        I have read and agreed to the terms of this waiver.
      </p>
      <button type="submit" disabled={!agreed}>Submit</button>
    </form>
    </div>
  );
};

export default Waiver