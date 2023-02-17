import React, { useState } from "react";
import { MUTATION_ADD_CAMPER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import "../pages/Login.css";
import FormModal from "./FormModal";

import Waiver from "./Waiver";

const RegistrationForm = ({ campId }) => {
  console.log(campId);

  const styles = {
    header: {
      background: "#203731",
      color: "#FFB612",
    },
    button: {
      color: "#FFB612",
      backgroundColor: "#203731",
    },
    alignCenter: {
      textAlign: "center",
    },
  };

  //user info
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gradeFinished, setGradeFinished] = useState("");
  const [tshirtSize, setTshirtSize] = useState("");
  const [formSigned, setFormSigned] = useState(false);

  const [addCamper, { error, data }] = useMutation(MUTATION_ADD_CAMPER);

  //camp info
  const [campData, setCampData] = useState({
    title: "",
    location: "",
    price: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addCamper({
        variables: { firstName, lastName, age, gradeFinished, tshirtSize },
      });
      console.log("DATA:", data);
    } catch (e) {
      console.error(e);
    }
    setFormSigned(true);
    setShowModal(true);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-header p-3 rounded" style={styles.header}>
          Registration Form
        </h2>
        <div>
          {/* <label className="form-label" htmlFor="first-name">Enter your camper's first name:</label> */}
          <input
            type="text"
            id="first-name"
            value={firstName}
            style={styles.alignCenter}
            className="form-control loginbtn my-3"
            placeholder="Enter your camper's first name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          {/* <label className="form-label" htmlFor="last-name">Enter your camper's last name:</label> */}
          <input
            type="text"
            id="last-name"
            value={lastName}
            style={styles.alignCenter}
            className="form-control loginbtn my-3"
            placeholder="Enter your camper's last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          {/* <label className="form-label" htmlFor="age">Enter your camper's age:</label> */}
          <input
            type="text"
            id="age"
            value={age}
            style={styles.alignCenter}
            className="form-control loginbtn my-3"
            placeholder="Enter your camper's age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          {/* <label htmlFor="grade-finished">What grade is your camper in?</label> */}
          <input
            type="text"
            id="grade-finished"
            value={gradeFinished}
            style={styles.alignCenter}
            className="form-control loginbtn my-3"
            placeholder="What grade is your camper in?"
            onChange={(e) => setGradeFinished(e.target.value)}
          />
        </div>
        <div>
          {/* <label htmlFor="tshirt-size">Select a T-shirt Size:</label> */}
          <input
            type="text"
            id="tshirt-size"
            value={tshirtSize}
            style={styles.alignCenter}
            className="form-control loginbtn my-3"
            placeholder="Select a T-shirt Size"
            onChange={(e) => setTshirtSize(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary loginbtn my-3"
            style={styles.button}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      {formSigned ? (
        <FormModal showModal={showModal} setShowModal={setShowModal}>
          <Waiver camperFirstName={firstName} camperLastName={lastName} />
        </FormModal>
      ) : null}
    </div>
  );
};

export default RegistrationForm;
