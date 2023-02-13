import React, { useState } from "react";
import { SiInstagram } from "react-icons/si";
import { FcIphone } from "react-icons/fc"
import IconContext from "react-icons";
import { MdOutlineEmail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';



const Footer = () => {
    const styles = {
        customFooter:
        {
            height: '80px',
            background: '#FFB612',
            opacity: '.75'
        },


    }

    return (
        <div className='mb-5'>
            <footer className="fixed-bottom" style={styles.customFooter}>
                <FcIphone className="m-3" size={40} color="#203731" />
                <MdOutlineEmail className='m-3' size={40} color="#203731" />
                <FaInstagram className='m-3' size={40} color="#203731" />

            </footer>
        </div>


    )
}

export default Footer