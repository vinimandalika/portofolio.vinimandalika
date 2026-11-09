import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Welcome to my portfolio</p>
          <h1 className="hero-name">Vini Mandalika</h1>
          <p className="hero-tagline">Organizing Ideas, Creating Possibilities</p>
          <p className="hero-description">
            Office Administration Graduate · Administrative Support · Document Management · Digital Technology Enthusiast · Creative Communication
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              Explore My Portfolio
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Contact Me
            </button>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="profile-placeholder">
            <div className="placeholder-circle">
              <span className="placeholder-text">VM</span>
            </div>
            <p className="placeholder-note">Professional profile image</p>
          </div>
        </div>
      </div>
      
      <div className="decorative-elements">
        <div className="decorative-circle decorative-circle-1"></div>
        <div className="decorative-circle decorative-circle-2"></div>
      </div>
    </section>
  )
}

export default Hero
