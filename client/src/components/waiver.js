import React, { useState } from "react";


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



const Waiver = () => {
  const [showModal, setShowModal] = useState(false)
  const [fullName, setFullName] = useState("");
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactPhone, setEmergencyContactPhone] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to submit the form data to the server or database
  };

  return (
    <div>
      <button onClick = {() => setShowModal(true)}>Open</button>
      <Modal showModal = {showModal} setShowModal = {setShowModal}>
    <form onSubmit={handleSubmit}>
      <h2>Youth Sports Camp Waiver</h2>
      <p>
        I, <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />, 
        as the parent or legal guardian of the participating youth, 
        do hereby release and hold harmless the Youth Sports Camp and its officers, directors, 
        employees, and agents from any and all claims, demands, damages, or rights of action, 
        whether known or unknown, arising out of or related to any loss, damage, or injury, 
        including death, that may be sustained by the participating youth while participating in the camp activities.
      </p>
      <p>
        Parent/Guardian Name: <input type="text" value={parentName} onChange={(e) => setParentName(e.target.value)} />
      </p>
      <p>
        Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </p>
      <p>
        Phone: <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </p>
      <p>
        Emergency Contact Name: <input type="text" value={emergencyContactName} onChange={(e) => setEmergencyContactName(e.target.value)} />
      </p>
      <p>
        Emergency Contact Phone: <input type="tel" value={emergencyContactPhone} onChange={(e) => setEmergencyContactPhone(e.target.value)} />
      </p>
      <p>
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
        I have read and agreed to the terms of this waiver.
      </p>
      <button type="submit" disabled={!agreed}>Submit</button>
    </form>
    </Modal>
    </div>
  );
};

export default Waiver