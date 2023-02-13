import React, {useState} from "react";
import {SiInstagram} from "react-icons/si";
import { FcIphone } from "react-icons/fc"
import IconContext from "react-icons";


const Footer = () =>{
    const styles = {
        height: '80px'
        
    }

    return (
        <div className = 'mb-5'>
            <footer className = "bg-light fixed-bottom" style >
                <FcIphone/>
            </footer>
        </div>

        
    )
}

export default Footer