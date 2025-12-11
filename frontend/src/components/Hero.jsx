import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="gradient-text">Visula Peduru</span>
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transforming data into actionable insights with machine learning and advanced analytics
            </motion.p>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Applied Mathematics & Statistics student at Stony Brook University
            </motion.p>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="floating-card card-1">
              <div className="card-icon">📊</div>
              <div className="card-text">Data Science</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">🤖</div>
              <div className="card-text">Machine Learning</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">📈</div>
              <div className="card-text">Analytics</div>
            </div>
            <div className="center-circle">
              <div className="circle-content">VP</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero


