import React from 'react';
import "../pages/Login.css";

const FormModal = ({ children, showModal, setShowModal }) => {



  return (
    <>
      <>
        {showModal && (
          <div style={{ zIndex: 10, position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ backgroundColor: "#fff", width: "60%", padding: "20px", borderRadius: "10px" }}>
              {children}
              <div className="d-flex justify-content-center">
              <button className="btn btn-danger loginbtn" onClick={() => setShowModal(false)}>Close</button>
              </div>
              
            </div>
          </div>
        )}
      </>
    </>
  )
}

export default FormModal