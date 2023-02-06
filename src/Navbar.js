import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <div className="NavBar">

            <NavLink to="/">
            Home
            </NavLink>

            <NavLink to="/about">
            About
            </NavLink>

            <NavLink to="/portfolio">
            Portfolio
            </NavLink>
        </div>
    );
}

export default NavBar;