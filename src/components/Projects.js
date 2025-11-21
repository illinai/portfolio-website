import React, {useState} from 'react';

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Pac-man Ghost Hunter',
      description: 'This game inspired by the classic Pac-Man game, but adds a twist mechanic of allowing the player to shoot enemies.',
      tech: ['Unity', 'C#', 'Game Development'],
      category: 'Game Dev',
      github: 'https://github.com/illinai/PacManGhostHunter?tab=readme-ov-file',
      demo: 'https://muesli-joy.itch.io/pac-man-ghost-hunter'
    },
    {
      id: 2,
      title: 'E-commerce Store',
      description: 'The project is a fully functional e-commerce web platform for handmade goods',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      category: 'Web Dev',
      github: 'https://github.com/illinai/E-Commerce_Store',
      demo: 'https://cosc360.ok.ubc.ca/smann06/New_E-Commerce_Store/main/public_home.php'
    },
    {
      id: 3,
      title: 'RemindMe - Android Task Manager',
      description: 'A simple and intuitive task management app for Android deviced.',
      tech: ['Java', 'Android Studio', 'SQLite'],
      category: 'App Dev',
      github: 'https://github.com/illinai/RemindMe-App',
      demo: null, 
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'Game Dev' ? 'active' : ''} 
            onClick={() => setFilter('Game Dev')}
          >
            Game Dev
          </button>
          <button 
            className={filter === 'Web Dev' ? 'active' : ''} 
            onClick={() => setFilter('Web Dev')}
          >
            Web Dev
          </button>
          <button 
            className={filter === 'App Dev' ? 'active' : ''} 
            onClick={() => setFilter('App Dev')}
          >
            App Dev
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
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