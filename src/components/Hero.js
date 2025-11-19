import React from 'react';

function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h1>Hi, I'm <span className="highlight">Illina</span></h1>
                <p className="hero-subtitle">I'm a Computer Science Student!</p>
                <p className="hero-description">I'm currently completing my fourth year at the University of British Columbia.</p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;