import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Organization from './components/Organization'
import CertificateGallery from './components/CertificateGallery'
import ProjectGallery from './components/ProjectGallery'
import Skills from './components/Skills'
import CreativeJournal from './components/CreativeJournal'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CertificateModal from './components/CertificateModal'

function App() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Organization />
      <CertificateGallery onCertificateClick={setSelectedCertificate} />
      <ProjectGallery />
      <Skills />
      <CreativeJournal />
      <Contact />
      <Footer />
      {selectedCertificate && (
        <CertificateModal 
          certificate={selectedCertificate} 
          onClose={() => setSelectedCertificate(null)} 
        />
      )}
    </div>
  )
}

export default App
