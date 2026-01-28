import React from 'react';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Computer Science Intern',
      company: 'myClusters',
      period: 'October 2025 - Present',
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map(exp => (
            <div key={exp.id} className="experience-item">
              <h3>{exp.title}</h3>
              <p className="period">{exp.period}</p>
              <p><strong>{exp.company}</strong></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;