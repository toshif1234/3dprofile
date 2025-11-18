// components/Hero/Hero.jsx
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import Scene3D from './Scene3D'
import FallingStars from './FallingStars'
import { portfolioData } from '../../data/portfolioData'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            {portfolioData.personal.name}
          </h1>
          <h2 className="hero-subtitle">
            {portfolioData.personal.title}
          </h2>
          <p className="hero-description">
            {portfolioData.personal.description}
          </p>
          <motion.div
            className="hero-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="cta-button">Learn More</button>
          </motion.div>
        </motion.div>
        
        <div className="hero-3d">
          <Canvas>
            <Scene3D />
            <FallingStars count={150} />
          </Canvas>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <motion.div
          className="scroll-line"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
    </section>
  )
}