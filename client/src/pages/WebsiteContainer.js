// Importing React and UseState from react
import React, { useState } from 'react';
//import About Page from our pages/about.js
import About from './About';
import Shop from './Shop'
//render header and footer
import Footer from '../components/Footer';
import Navbar from '../components/Header';
import Admin from '../pages/Admin';
import Login from '../pages/Login';
import Signup from '../pages/Signup';


export default function WebsiteContainer() {

    const [currentPage, setCurrentPage] = useState('About');
    //sets first state as About page

    //checks value of currentPage and returns correct page component
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Admin') {
            return <Admin />
        }
        if (currentPage === 'Login') {
            return <Login />
        }
        if (currentPage === 'Shop') {
            return <Shop />
        }
        if (currentPage === 'Signup') {
            return <Signup />

        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer />

        </div>
    )

}