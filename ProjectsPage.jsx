import React from 'react';

function ProjectsPage() {
  const projects = [
    { title: 'Project 1', description: 'Description of project 1', image: 'project1.jpg' },
    { title: 'Project 2', description: 'Description of project 2', image: 'project2.jpg' },
    { title: 'Project 3', description: 'Description of project 3', image: 'project3.jpg' },
  ];

  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;