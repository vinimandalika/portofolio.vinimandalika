import React from 'react'
import '../styles/Organization.css'

const Organization = () => {
  return (
    <section id="organization" className="organization">
      <div className="section-header">
        <p className="section-subtitle">Community Involvement</p>
        <h2 className="section-title">Organizational Experience</h2>
      </div>
      
      <div className="organization-content">
        <div className="organization-card card">
          <div className="organization-badge">Volunteer Project</div>
          
          <h3>Sunoo Streaming Team (Fanbase Volunteer)</h3>
          <div className="organization-meta">
            <span className="meta-item">
              <strong>Position:</strong> Streaming Volunteer
            </span>
            <span className="meta-item">
              <strong>Location:</strong> Online
            </span>
            <span className="meta-item">
              <strong>Period:</strong> December 2024 – January 2025
            </span>
          </div>
          
          <div className="organization-description">
            <h4>Project Description</h4>
            <p>
              Participated in a community-driven digital streaming campaign to promote Sunoo of ENHYPEN's YouTube cover release.
            </p>
          </div>
          
          <div className="organization-responsibilities">
            <h4>Key Contributions</h4>
            <ul>
              <li>Participated in planning and executing coordinated digital streaming campaigns</li>
              <li>Collaborated with volunteer teams to coordinate community streaming activities and achieve campaign view targets</li>
              <li>Followed streaming guidelines and schedules while maintaining consistent participation throughout the campaign</li>
              <li>Monitored streaming progress and supported strategies to improve video visibility, reach, and digital engagement</li>
              <li>Contributed to community-driven promotional initiatives through teamwork and coordinated digital activities</li>
            </ul>
          </div>
          
          <div className="organization-tags">
            <span className="tag">Community Coordination</span>
            <span className="tag">Digital Campaign</span>
            <span className="tag">Team Collaboration</span>
            <span className="tag">Digital Engagement</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Organization
