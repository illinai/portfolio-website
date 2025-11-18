import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A full-stack web application built with React and Node.js.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/project1',
      demo: 'https://project1-demo.com'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'An e-commerce platform with user authentication.',
      tech: ['React', 'Firebase', 'CSS'],
      github: 'https://github.com/yourusername/project2',
      demo: null
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;