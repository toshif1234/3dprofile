// components/Contact/Contact.jsx
import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolioData'
import './Contact.css'

export default function Contact() {
  const { personal } = portfolioData

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Message sent! (This is a demo)')
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-content"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Contact Information</h3>
              
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <strong>Email</strong>
                  <p>{personal.email}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <strong>Phone</strong>
                  <p>{personal.phone}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div>
                  <strong>LinkedIn</strong>
                  <p>{personal.linkedin}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🐙</div>
                <div>
                  <strong>GitHub</strong>
                  <p>{personal.github}</p>
                </div>
              </div>
            </motion.div>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Subject"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  className="form-input form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
        
        <motion.div
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 {personal.name}. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}