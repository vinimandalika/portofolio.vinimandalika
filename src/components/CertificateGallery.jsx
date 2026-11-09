import React from 'react'
import { certificates } from '../data/portfolioData'
import '../styles/CertificateGallery.css'

const CertificateGallery = ({ onCertificateClick }) => {
  return (
    <section id="certificates" className="certificate-gallery">
      <div className="section-header">
        <p className="section-subtitle">Credentials & Achievements</p>
        <h2 className="section-title">Certifications</h2>
      </div>
      
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="certificate-card card"
            onClick={() => onCertificateClick(cert)}
          >
            <div className="certificate-header">
              <div className="certificate-type">{cert.type}</div>
              <h3>{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
            </div>
            
            <div className="certificate-meta">
              <div className="meta-row">
                <strong>Issued:</strong>
                <span>{cert.issued}</span>
              </div>
              {cert.duration && (
                <div className="meta-row">
                  <strong>Duration:</strong>
                  <span>{cert.duration}</span>
                </div>
              )}
              {cert.certificateNumber && (
                <div className="meta-row">
                  <strong>Certificate #:</strong>
                  <span>{cert.certificateNumber}</span>
                </div>
              )}
            </div>
            
            <div className="certificate-description">
              <p>{cert.description}</p>
            </div>
            
            {cert.skills && cert.skills.length > 0 && (
              <div className="certificate-skills">
                <h5>Skills Covered</h5>
                <div className="skills-list">
                  {cert.skills.slice(0, 4).map((skill, index) => (
                    <span key={index} className="skill-badge">{skill}</span>
                  ))}
                  {cert.skills.length > 4 && (
                    <span className="skill-badge">+{cert.skills.length - 4} more</span>
                  )}
                </div>
              </div>
            )}
            
            <div className="view-certificate-prompt">
              <span>Click to view details</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CertificateGallery
