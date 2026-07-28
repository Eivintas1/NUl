import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Meridian',
    category: 'Web Application',
    description: 'A real-time analytics dashboard for SaaS metrics. Built with React, D3, and WebSocket streams for live data visualization.',
    tech: ['React', 'D3.js', 'WebSocket', 'Node.js'],
    year: '2025',
  },
  {
    id: 2,
    title: 'Canopy',
    category: 'Design System',
    description: 'A comprehensive component library and design system serving 6 product teams. Includes tokens, accessibility patterns, and documentation.',
    tech: ['TypeScript', 'Storybook', 'Figma', 'CSS Variables'],
    year: '2024',
  },
  {
    id: 3,
    title: 'Drift',
    category: 'Mobile App',
    description: 'A mindfulness and habit-tracking app with adaptive notifications. Designed and developed end-to-end from research to release.',
    tech: ['React Native', 'Firebase', 'Swift', 'Figma'],
    year: '2024',
  },
  {
    id: 4,
    title: 'Tessera',
    category: 'Open Source',
    description: 'A lightweight static site generator focused on content-first publishing. Markdown pipeline with custom theming support.',
    tech: ['Node.js', 'Markdown', 'ESBuild', 'CLI'],
    year: '2023',
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="projects" id="work">
      <p className="section-label">02 &mdash; Selected Work</p>
      <div className="projects__list">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href="#"
            className={`project ${hoveredId === project.id ? 'project--active' : ''}`}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <span className="project__index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="project__content">
              <div className="project__header">
                <h3 className="project__title">{project.title}</h3>
                <span className="project__category">{project.category}</span>
              </div>
              <p className="project__desc">{project.description}</p>
              <ul className="project__tech">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <span className="project__year">{project.year}</span>
            <span className="project__arrow" aria-hidden="true">&rarr;</span>
          </a>
        ))}
      </div>
    </section>
  )
}
