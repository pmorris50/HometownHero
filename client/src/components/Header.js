import React, { useState } from "react";

const Navbar = ({ handlePageChange }) => {
    const styles = {
        customHeader:
        {
            height: '80px',
            background: '#FFB612',
            opacity: '.75'
        },
        title: {
            color: "#203731"
        }

    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light" style={styles.customHeader}>
                <div class="container-fluid">
                    <h1 style={styles.title}> I am a Header</h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse ms-5" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#About" onClick={() => handlePageChange('About')}>About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Signup" onClick={() => handlePageChange('Login')}>Signup</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Login" onClick={() => handlePageChange('Signup')}>Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Shop" onClick={() => handlePageChange('Shop')}>Shop</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar