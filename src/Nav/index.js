import React, {useState} from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

const COOL_LINK = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";


const Nav = () => {
    const [title, setTitle] = useState("Jonathan Lee");

    const links = [
        "Home", 
        "About",
        "Projects"
    ];

    return (
        <div className='d-flex flex-grow-1 side-bar justify-content-between rounded-4 mt-3'>
            <div className='d-inline-flex align-items-center ps-5'>
                <Link
                    key={"name_header"}
                    className='text-decoration-none name-header comic-sans text-nowrap'
                    to={`${COOL_LINK}}`}
                    onMouseEnter={() => setTitle("(╯°□°)╯︵ ┻━┻")}
                    onMouseLeave={() => setTitle("Jonathan Lee")}
                >
                    {title}
                </Link>
            </div>
            <div className='d-inline-flex flex-shrink-1 align-items-center pe-5'>
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