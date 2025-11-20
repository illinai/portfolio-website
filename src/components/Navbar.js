import React from 'react';

function Navbar({darkMode, toggleDarkMode}){
    return(
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <h2>Illina</h2>
                </div>

                <ul className="nav-menu">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <button onClick={toggleDarkMode} className="theme-toggle">
                    {darkMode ? '☀️' : '🌙'}
                </button>

            </div>
        </nav>
    );
}

export default Navbar;