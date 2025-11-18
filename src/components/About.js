import React from "react";

function About() {
    const skills = [
        "Java",
        "C#",
        "Unity",
        "JavaScript",
        "React",
        "Python",
        "HTML",
        "CSS",
        "Git",
        "SQL",
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler 
                            Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler 
                        </p>
                    </div>
                    <div className="skills-section">
                        <h3>Technical Skills</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item">{skill}</div>                      
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;