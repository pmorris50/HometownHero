import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Auth from '../utils/auth';

const Navbar = () => {
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
    const [ activeLink, setActiveLink ] = useState('');

    function handleNavLinkClick(event) {
        event.preventDefault();

        setActiveLink(event.target.innerText)
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
                        {Auth.loggedIn() ?
                            (
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/" className={activeLink === 'Logout' ? 'nav-link active' : 'nav-link'} onClick={() => { Auth.logout() , handleNavLinkClick}}>Logout</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/' className={activeLink === 'Logout' ? 'nav-link active' : 'nav-link'} aria-current="page" onClick={() => handleNavLinkClick}>About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/shop" className={activeLink === 'Logout' ? 'nav-link active' : 'nav-link'} onClick={() => handleNavLinkClick}>Shop</Link>
                                    </li>
                                    {/* {Auth.isAdmin() ?
                                        (
                                            <li className="nav-item">
                                                <Link to="/admin" className={activeLink === 'Logout' ? 'nav-link active' : 'nav-link'} onClick={() => handleNavLinkClick}>Admin</Link>
                                            </li>
                                        ) : (
                                            <li></li>)
                                    } */}
                                </ul>
                            ) : (
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to='/' className={activeLink === 'Logout' ? 'nav-link active' : 'nav-link'}  aria-current="page" onClick={() => handleNavLinkClick}>About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className={activeLink === 'Logout' ? 'nav-link active' : 'nav-link'} onClick={() => handleNavLinkClick}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/signup" className={activeLink === 'Logout' ? 'nav-link active' : 'nav-link'} onClick={() => handleNavLinkClick}>Signup</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/shop" className={activeLink === 'Logout' ? 'nav-link active' : 'nav-link'} onClick={() => handleNavLinkClick}>Shop</Link>
                                    </li>
                                </ul>
                            )
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar