import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Css/DrawerMenu.css'
import '../Css/UnderlineMotion.css'

function DrawerMenu(props) {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the drawer
    const toggleDrawer = () => {
        setIsOpen((prev) => !prev);
    };

    // Function to close the drawer with smooth transition
    const closeDrawerAndNavigate = (e) => {
        // Prevents default link behavior (navigation)
        e.preventDefault();

        // Close the drawer with a delay to allow the transition
        setIsOpen(false);

        // After the drawer is closed, navigate to the new page after 0.6s (duration of transition)
        setTimeout(() => {
            window.location.href = e.target.href; // This will trigger the navigation to the new page
        }, 600); // Delay for smooth transition (same as the transition duration)
    };

    return (
        <div>
            {/* Button to toggle the drawer */}
            <button className="menu-btn double-underline-new " onClick={toggleDrawer}>
                Menu
            </button>

            {/* Drawer container */}
            <div className={`drawer ${isOpen ? 'open' : ''}`}>
                {/* NavLinks inside the drawer */}
                <div>
                    {
                        props.endPoints.map(({ name, path }, index) => {
                            return (
                                <NavLink
                                    key={index}
                                    to={path}
                                    activeclassname="active"
                                    className='double-underline'
                                    onClick={closeDrawerAndNavigate}
                                >
                                    {name}
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default DrawerMenu;
