import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    // Define the scroll event handler
    const handleScroll = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        // Add the event listener
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array means this effect runs only once on mount

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className='nav_logo'
                src='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png' alt='netflix logo' />
                {/* <h1 className='nav_logo'>Netflix</h1> */}

                <button className='nav_avatar'>Sign In</button>
        </div>
    );
}

export default Nav;
