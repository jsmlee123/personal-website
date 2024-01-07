import React from 'react';
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaHome, FaSearch, FaSignInAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";


const Nav = () => {

    const links = [
        "Home", 
        "About",
        "Projects"
    ];
    
    return (
        <div className='d-flex side-bar justify-content-between'>
            <div className='d-inline-flex align-items-center ps-4'>
                <h1 className='comic-sans'>Jonathan Lee</h1>
            </div>
            <div className='d-inline-flex align-items-center pe-5'>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        className='text-decoration-none link-text comic-sans ms-5'
                        to={`/${link}`}
                    >
                        {link}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Nav;