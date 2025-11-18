import React from 'react';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineering Intern',
      company: 'Tech Company Inc.',
      period: 'June 2024 - August 2024',
      responsibilities: [
        'Developed web applications using React and Node.js',
        'Collaborated with teams to deliver features',
        'Participated in code reviews'
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