import React from 'react'
import '../styles/Experience.css'

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <p className="section-subtitle">Professional Journey</p>
        <h2 className="section-title">Career & Experience</h2>
      </div>
      
      <div className="experience-content">
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content card">
              <div className="timeline-header">
                <div>
                  <h3>Admin</h3>
                  <h4>Kantor Kelurahan Setia Asih</h4>
                </div>
                <div className="timeline-period">
                  <span className="period-badge">April 2024 – June 2024</span>
                </div>
              </div>
              
              <ul className="experience-list">
                <li>Managed, organized, and classified records</li>
                <li>Filed and verified archival documents</li>
                <li>Handled incoming and outgoing correspondence and mail logs</li>
                <li>Applied administrative correspondence procedures</li>
                <li>Maintained accurate and well-organized administrative records</li>
              </ul>
              
              <div className="experience-tags">
                <span className="tag">Document Management</span>
                <span className="tag">Records Organization</span>
                <span className="tag">Correspondence</span>
                <span className="tag">Administrative Procedures</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
