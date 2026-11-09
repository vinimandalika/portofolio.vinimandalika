import React from 'react'
import '../styles/About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <p className="section-subtitle">Get to know me</p>
        <h2 className="section-title">About Me</h2>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            Vocational High School graduate in Office Administration with a strong foundation in administrative support, document management, and business communication.
          </p>
          
          <p>
            Experienced in organizing records, handling correspondence, and maintaining accurate administrative documentation. Completed RevoU certified courses in Intro to Software Engineering and Intro to Data Analytics, gaining foundational knowledge of software development, web technologies, and data analysis.
          </p>
          
          <p>
            Detail-oriented, adaptable, and analytical, with strong written communication skills and an interest in developing expertise in administration and digital operations.
          </p>
        </div>
        
        <div className="about-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">📋</div>
            <h4>Administrative Excellence</h4>
            <p>Expertise in document management, records organization, and correspondence handling</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">💻</div>
            <h4>Digital Skills</h4>
            <p>Web development fundamentals and data analytics knowledge through certified training</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">✨</div>
            <h4>Professional Growth</h4>
            <p>Continuously learning and adapting to new technologies and administrative practices</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
