import React, {useState} from 'react'
import Waiver from './waiver'; 
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


const registrationForm = () => {
    const [ShowModal, setShowModal] = useState(false)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <div>
            
        </div>
    )
    
}