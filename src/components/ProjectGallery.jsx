import React from 'react'
import { projects } from '../data/portfolioData'
import '../styles/ProjectGallery.css'

const ProjectGallery = () => {
  return (
    <section id="projects" className="project-gallery">
      <div className="section-header">
        <p className="section-subtitle">Featured Work</p>
        <h2 className="section-title">Portfolio Gallery</h2>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card card ${index % 2 === 0 ? 'featured' : ''}`}
          >
            <div className="project-category">{project.category}</div>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectGallery
