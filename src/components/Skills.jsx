import React from 'react'
import { skills } from '../data/portfolioData'
import '../styles/Skills.css'

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <p className="section-subtitle">Professional Capabilities</p>
        <h2 className="section-title">Skills & Expertise</h2>
      </div>
      
      <div className="skills-content">
        <div className="skill-category">
          <div className="skill-category-header">
            <div className="skill-icon">📋</div>
            <h3>Administrative Skills</h3>
          </div>
          <div className="skill-items">
            {skills.administrative.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <div className="skill-category-header">
            <div className="skill-icon">💻</div>
            <h3>Digital Skills</h3>
          </div>
          <div className="skill-items">
            {skills.digital.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <div className="skill-category-header">
            <div className="skill-icon">✨</div>
            <h3>Professional Skills</h3>
          </div>
          <div className="skill-items">
            {skills.professional.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
