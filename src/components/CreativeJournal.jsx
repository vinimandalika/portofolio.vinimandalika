import React from 'react'
import { journalPosts } from '../data/portfolioData'
import '../styles/CreativeJournal.css'

const CreativeJournal = () => {
  return (
    <section id="journal" className="creative-journal">
      <div className="section-header">
        <p className="section-subtitle">Thoughts & Reflections</p>
        <h2 className="section-title">Creative Journal</h2>
      </div>
      
      <div className="journal-intro">
        <p>A space for sharing learning experiences, professional development insights, and reflections on administrative and digital skills.</p>
      </div>
      
      <div className="journal-grid">
        {journalPosts.map((post) => (
          <article key={post.id} className="journal-card card">
            <div className="journal-category">{post.category}</div>
            <h3>{post.title}</h3>
            <p className="journal-date">{post.date}</p>
            <p className="journal-excerpt">{post.excerpt}</p>
            <div className="journal-placeholder-note">
              This is placeholder content for future journal entries
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CreativeJournal
