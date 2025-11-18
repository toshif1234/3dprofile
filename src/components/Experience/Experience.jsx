// components/Experience/Experience.jsx
import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolioData'
import './Experience.css'

export default function Experience() {
  const { experience, certificates } = portfolioData

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience</h2>
          
          <div className="experience-timeline">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="job-title">{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                  <p className="period">{exp.period}</p>
                  <div className="skills-used">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="certificates-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="certificates-title">Certificates</h3>
            <div className="certificates-grid">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certificate-card"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={cert.image} style={{width: "100%"}} alt="" srcset="" />
                  <p className="certificate-name">{cert.name}</p>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">View on Web</a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}