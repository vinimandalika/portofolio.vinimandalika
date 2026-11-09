import React, { useEffect } from 'react'
import '../styles/CertificateModal.css'

const CertificateModal = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  if (!certificate) return null

  return (
    <div className="certificate-modal-overlay" onClick={onClose}>
      <div className="certificate-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-content">
            <div className="modal-type">{certificate.type}</div>
            <h2>{certificate.title}</h2>
            <p className="modal-issuer">{certificate.issuer}</p>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        
        <div className="modal-body">
          <div className="modal-meta">
            <div className="modal-meta-item">
              <strong>Issued Date</strong>
              <span>{certificate.issued}</span>
            </div>
            {certificate.duration && (
              <div className="modal-meta-item">
                <strong>Duration</strong>
                <span>{certificate.duration}</span>
              </div>
            )}
            {certificate.certificateNumber && (
              <div className="modal-meta-item">
                <strong>Certificate Number</strong>
                <span>{certificate.certificateNumber}</span>
              </div>
            )}
            {certificate.period && (
              <div className="modal-meta-item">
                <strong>Period</strong>
                <span>{certificate.period}</span>
              </div>
            )}
            {certificate.result && (
              <div className="modal-meta-item">
                <strong>Result</strong>
                <span>{certificate.result}</span>
              </div>
            )}
            {certificate.competency && (
              <div className="modal-meta-item">
                <strong>Competency</strong>
                <span>{certificate.competency}</span>
              </div>
            )}
          </div>
          
          <div className="modal-description">
            <p>{certificate.description}</p>
          </div>
          
          {certificate.skills && certificate.skills.length > 0 && (
            <div className="modal-skills">
              <h4>Skills & Competencies</h4>
              <div className="modal-skills-grid">
                {certificate.skills.map((skill, index) => (
                  <div key={index} className="modal-skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="certificate-note">
            📄 Certificate images and documents are stored securely and available upon request
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificateModal
