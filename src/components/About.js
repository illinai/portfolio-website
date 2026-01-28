import React from "react";

function About() {
    const skills = [
        "Java",
        "C#",
        "Unity",
        "JavaScript",
        "TypeScript",
        "PHP",
        "React",
        "Python",
        "Django",
        "HTML",
        "CSS",
        "Git",
        "SQL",
        "MySQL",
        "Next.js",
        "Node.js"
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Hello! I'm Illina, a passionate Computer Science student with a keen interest in software development and web technologies. 
                            I love creating interactive and user-friendly applications that solve real-world problems.
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