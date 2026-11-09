import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h3>Vini Mandalika</h3>
            <p>Organizing Ideas, Creating Possibilities</p>
          </div>
          
          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><a onClick={() => scrollToSection('about')}>About</a></li>
              <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
              <li><a onClick={() => scrollToSection('education')}>Education</a></li>
              <li><a onClick={() => scrollToSection('certificates')}>Certificates</a></li>
              <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
              <li><a onClick={() => scrollToSection('journal')}>Journal</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <p>
              <a href="mailto:vinimandalikaofc@gmail.com">vinimandalikaofc@gmail.com</a>
            </p>
            <p>
              <a href="tel:+6288101222704">+62 881 0122 2704</a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Vini Mandalika. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
