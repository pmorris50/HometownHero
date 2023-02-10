// Importing React and UseState from react
import React, {useState} from 'react';
//import About Page from our pages/about.js
import About from './about';
import Shop from './shop'
//render header and footer
import Footer from '../components/footer';
import Header from '../components/header';


export default function WebsiteContainer(){

    const [currentPage, setCurrentPage] = useState('About');
    //sets first state as About page
    
    //checks value of currentPage and returns correct page component
    const renderPage = () => {
        if(currentPage === 'About'){
            return <About/>;
        }
        if(currentPage === 'Shop') {
            return <Shop/>
        }
    };

const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
           
            {renderPage()}
            
        </div>
    )

}