import react from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LOGO from './Logo.png'
import './panAdmin.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface navProps {

}

export default function NavBar() {
    return (
        <nav className="mainContainer">
            <div className="content">
                <div className="LoginButton">
                    {localStorage.getItem("adminid") === null ? 
                    
                    <button className="navButtonOne" 
                        onClick={() => {
                            window.location.href = 'http://localhost:3000/Login';
                        }} >Login</button> :
                     <button className="navButtonOne" 
                        onClick={() => {
                            localStorage.removeItem("adminid")
                            window.location.href = 'http://localhost:3000/Login';
                        }} >Logout</button>
                    }

                </div>
            </div>
        </nav>
    );
}
