import React from "react";
import "./About.css";
import Auth from '../utils/auth';
import Camp from '../components/Camp';

const About = () => {
  const styles = {

  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <Camp />

      )
        :
        (
          <main className="flex-row justify-center">
            <img src="../images/football.jpg" alt="football" className="img" />
            <div>
              <h1 className="opacity-100 p-4">Premier Youth Football Camp</h1>
            </div>
            <div className="row justify-content-around m-4">
              <div className="col col-5 justify-center border border-danger">
                <h2>Skills</h2>
                <ul className='list-group'>
                  <li className='list-group-item'>Catching</li>
                  <li className='list-group-item'>Route Running</li>
                  <li className='list-group-item'>Blocking</li>
                  <li className='list-group-item'>Film Study</li>
                </ul>
              </div>
              <div className="col col-5 justify-center border border-info">
                Professional Staff

              </div>
              <Camp />
            </div>
          </main>
        )}
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
