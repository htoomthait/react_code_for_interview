import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="flex mx-8 my-4 gap-2 text-blue-500">
            <Link to="/" >Home </Link>                         
            <Link to="/profile"> Profile </Link>
            <Link to="/contact"> Contact </Link>           
        </div>
    );
};

export default NavBar;
