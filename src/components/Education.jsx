import React from 'react'
import '../styles/Education.css'

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="section-header">
        <p className="section-subtitle">Academic Background</p>
        <h2 className="section-title">Education</h2>
      </div>
      
      <div className="education-content">
        <div className="education-card card">
          <div className="education-icon">🎓</div>
          <div className="education-details">
            <h3>SMK Galajuara</h3>
            <h4>Senior High School — Office Administration</h4>
            <p className="education-period">July 2022 – May 2025</p>
            
            <div className="education-highlights">
              <div className="highlight-item">
                <span className="highlight-bullet">✦</span>
                <p>Completed an internship at Setia Asih Urban Village Office as an Office Administration Intern</p>
              </div>
              <div className="highlight-item">
                <span className="highlight-bullet">✦</span>
                <p>Demonstrated competency in the Office Management and Business Services vocational skills assessment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
