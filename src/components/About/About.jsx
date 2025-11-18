// components/About/About.jsx
import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolioData'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              {portfolioData.personal.about}
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <strong>Email:</strong> {portfolioData.personal.email}
              </div>
              <div className="detail-item">
                <strong>Phone:</strong> {portfolioData.personal.phone}
              </div>
              <div className="detail-item">
                <strong>LinkedIn:</strong> {portfolioData.personal.linkedin}
              </div>
              <div className="detail-item">
                <strong>GitHub:</strong> {portfolioData.personal.github}
              </div>
            </div>
          </div>
          
          <motion.div
            className="about-image"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="image-placeholder">
              <img src="/download.png" style={{width: "98%", borderRadius: "50%"}} alt="" srcset="" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}