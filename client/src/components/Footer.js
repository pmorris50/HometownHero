import React, { useState } from "react";
import { SiInstagram } from "react-icons/si";
import { FcIphone } from "react-icons/fc"
import {IconContext} from "react-icons";
import { MdOutlineEmail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';



const Footer = () => {
    const styles = {
        customFooter:
        {
            height: '80px',
            background: '#FFB612',
        },


    }

    return (
        <div className='mb-5'>
          <footer className="fixed-bottom" style={styles.customFooter}>
            <div style={{ display: 'flex', justifyContent: 'center'}} className = "mt-3">
              <IconContext.Provider value={{ color: "#203731", size: 40 }}>
                <div style={{ margin: '0 10px' }}>
                <a href = "tel: 800-500-5005">
                  <FcIphone />
                  </a>
                </div>
                <div style={{ margin: '0 10px' }}>
                    <a href = "mailto: Allen@gmail.com">
              <MdOutlineEmail /> 
              </a>
                </div>
                <div style={{ margin: '0 10px' }}>
                    <a target = "_blank" href = "https://www.instagram.com/allenlazard/">
                  <FaInstagram />
                  </a>
                </div>
              </IconContext.Provider>
            </div>
          </footer>
        </div>
      );
}

export default Footer