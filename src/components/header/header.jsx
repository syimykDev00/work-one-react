import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <h1>Logo</h1>
                    <div className="navbar">
                        <NavLink to={"/"}> <a>home</a> </NavLink>
                        <NavLink to={"about"}> <a>about</a> </NavLink>
                        <NavLink to={"contact"}> <a>contact</a> </NavLink>
                    </div>
                    <button>click</button>
                </div>
            </div>
        </header>
    );
};

export default Header;