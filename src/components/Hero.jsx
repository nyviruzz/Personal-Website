import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <motion.div
            className="hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="status-dot" />
            <span className="meta-tag">STONY BROOK UNIVERSITY · APPLIED MATHEMATICS & STATISTICS</span>
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            VISULA<br />PEDURU
          </motion.h1>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            I build practical machine learning and analytics projects with a
            focus on clear business impact, reliable modeling, and clean communication.
          </motion.p>

          <motion.ul
            className="hero-points"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
          >
            <li>Interested in ML / data science internships and new grad roles</li>
            <li>Coursework in statistics, optimization, and data mining</li>
            <li>Based in New York and open to relocation</li>
          </motion.ul>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              View Projects
            </button>
            <button className="btn btn-secondary" onClick={() => scrollTo('contact')}>
              Get In Touch
            </button>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="hero-card">
            <p className="card-label">Current Focus</p>
            <h3>Machine Learning</h3>
            <p>Predictive modeling, feature engineering, and model explainability.</p>
            <p className="card-label">Toolbox</p>
            <div className="hero-tags">
              <span>Python</span>
              <span>Scikit-learn</span>
              <span>Pandas</span>
              <span>TensorFlow</span>
              <span>SQL</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero




