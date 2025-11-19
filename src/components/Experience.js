import React from 'react';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'myClusters',
      period: 'October 2025 - Present',
      responsibilities: [
        'Filler responsibility 1',
        'Filler responsibility 2',
        'Filler responsibility 3'
      ]
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
              <ul>
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;