import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <p className="section-subtitle">Let's Connect</p>
        <h2 className="section-title">Contact</h2>
      </div>
      
      <div className="contact-content">
        <div className="contact-text">
          <p className="contact-intro">
            I'm always open to new opportunities and connections. Whether you're looking for administrative support, interested in collaboration, or just want to say hello, feel free to reach out.
          </p>
        </div>
        
        <div className="contact-cards">
          <div className="contact-card card">
            <div className="contact-icon">📧</div>
            <h4>Email</h4>
            <a href="mailto:vinimandalikaofc@gmail.com">vinimandalikaofc@gmail.com</a>
          </div>
          
          <div className="contact-card card">
            <div className="contact-icon">📱</div>
            <h4>Phone</h4>
            <a href="tel:+6288101222704">+62 881 0122 2704</a>
          </div>
          
          <div className="contact-card card">
            <div className="contact-icon">💼</div>
            <h4>LinkedIn</h4>
            <p className="contact-placeholder">Professional profile link</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
