// components/Projects/Projects.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { portfolioData } from '../../data/portfolioData'
import ProjectCard3D from './ProjectCard3D'
import './Projects.css'

export default function Projects() {
  const { projects } = portfolioData
  const [activeCategory, setActiveCategory] = useState('external')
  
  const categories = [
    { key: 'external', label: 'External Projects' },
    { key: 'internal', label: 'Internal Projects' },
    { key: 'personal', label: 'Personal Projects' }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Projects</h2>
          
          <div className="projects-categories">
            {categories.map((category) => (
              <button
                key={category.key}
                className={`category-btn ${activeCategory === category.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="projects-showcase">
            <div className="projects-3d">
              <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                {projects[activeCategory].map((project, index) => (
                  <ProjectCard3D
                    key={index}
                    project={project}
                    position={[
                      (index - (projects[activeCategory].length - 1) / 2) * 3,
                      0,
                      0
                    ]}
                  />
                ))}
              </Canvas>
            </div>

            <div className="projects-list">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="projects-grid"
                >
                  {projects[activeCategory].map((project, index) => (
                    <motion.div
                      key={index}
                      className="project-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="project-name">{project.name}</h3>
                      <p className="project-description">{project.description}</p>
                      {project.tech && (
                        <div className="project-tech">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}