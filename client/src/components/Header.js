import React, { useState } from "react";

const Navbar = ({ handlePageChange }) => {
    const styles = {
        customHeader:
        {
            height: '80px',
            background: '#FFB612',
        },
        title: {
            color: "#203731"
        }

    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={styles.customHeader}>
                <div className="container-fluid">
                    <h1 style={styles.title}> I am a Header</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-5" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#About" onClick={() => handlePageChange('About')}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Signup" onClick={() => handlePageChange('Signup')}>Signup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Login" onClick={() => handlePageChange('Login')}>Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Shop" onClick={() => handlePageChange('Shop')}>Shop</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar