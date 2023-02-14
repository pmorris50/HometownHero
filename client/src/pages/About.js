import React from "react";
import "./About.css";
import Auth from '../utils/auth'

const About = () => {
  const styles = {
    
  };

  return (
    <div>
      <main className="flex-row justify-center">
        <img src="../images/football.jpg" alt="football" className="img" />
        <div>
          <h1 className="opacity-100 p-4">Information about our Camp</h1>
        </div>
        <div className="row justify-content-around m-4">
          <div className="col col-5 justify-center border border-danger">
            Skills
          </div>
          <div className="col col-5 justify-center border border-info">
            Testimonials
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

// export default function About() {
//   return (
//     <div>
//       <h1>About</h1>
//     </div>
//   );
// }
