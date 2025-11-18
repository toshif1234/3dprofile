// components/Skills/Skills.jsx
import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolioData'
import './Skills.css'

export default function Skills() {
  const { skills } = portfolioData
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills</h2>
          
          <motion.div
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="skill-category" variants={itemVariants}>
              <h3 className="skill-category-title">Languages</h3>
              <div className="skill-items">
                {skills.languages.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="skill-item"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div className="skill-category" variants={itemVariants}>
              <h3 className="skill-category-title">Frameworks</h3>
              <div className="skill-items">
                {skills.frameworks.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="skill-item"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div className="skill-category" variants={itemVariants}>
              <h3 className="skill-category-title">Tools</h3>
              <div className="skill-items">
                {skills.tools.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="skill-item"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div className="skill-category" variants={itemVariants}>
              <h3 className="skill-category-title">Soft Skills</h3>
              <div className="skill-items">
                {skills.softSkills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="skill-item"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}