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
        <div>
          <div className="mb-4">
            <h1 className="pt-5 text-center aboutTitle">Premier Youth Football Camp</h1>
            <p className="text-center pb-5 aboutInfo">Check out our schedule below and register for a camp today!</p>
          </div>
          <Camp />
        </div>

      )
        :
        (
          <main className="flex-row justify-center">
            <div className="mb-4">
              <h1 className="pt-5 text-center aboutTitle">Premier Youth Football Camp</h1>
              <p className="text-center pb-5 aboutInfo">Come train with your hometown hero! Our website makes it easy to register today for a single day football training camp with your hometown athlete heros!</p>
            </div>
            <div className="row justify-content-around">
              <div className="col col-lg-5 col-md-10 justify-center">
                <h2 className="text-center skills">Skill Development</h2>
                <ul className='list-group text-center'>
                  <li className='list-context start'>Catching and Blocking Drills</li>
                  <li className='list-context'>Route Running</li>
                  <li className='list-context'>Strength and Cardio Workouts</li>
                  <li className='list-context'>Film Study</li>
                  <li className='list-context end'>Q & A with a professional</li>
                </ul>
              </div>
              <div className="col col-lg-5 col-md-10 justify-center">
                <h2 className="text-center staff">Professional Staff</h2>
                <p className="staffDescription text-center">Ensure that your children are getting the most out of their experience with staff that have experience playing or training as a professional athlete. </p>
              </div>
              <h1 className="text-center pt-4 schedule">Camp Schedule</h1>
              <Camp />
              
            </div>
          </main>
        )}
    </div>
  );
};

export default About;

