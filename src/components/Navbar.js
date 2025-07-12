import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-left">
                    <a href="home.html" className="nav-link">
                        <span className="nav-text">Home</span>
                        <div className="liquid-bg"></div>
                    </a>
                </div>
                <div className="nav-center">
                    <span>CARBOLT</span>
                </div>
                <div className="nav-right">
                    <a href="#" className="nav-link">
                        <span className="nav-text">About</span>
                        <div className="liquid-bg"></div>
                    </a>
                </div>
            </div>
            <div className="nav-blur"></div>
        </nav>
    );
}

export default Navbar;
