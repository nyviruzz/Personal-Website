import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">
      <div className="hud-corner hud-tl" />
      <div className="hud-corner hud-tr" />
      <div className="hud-corner hud-bl" />
      <div className="hud-corner hud-br" />
      <div className="scan-line" />

      <div className="container hero-inner">
        <div className="hero-text">
          <motion.div
            className="hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="status-dot" />
            <span className="meta-tag">STONY BROOK UNIVERSITY // APPLIED MATHEMATICS & STATISTICS</span>
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
            Transforming data into actionable insights through machine learning,
            statistical modeling, and advanced analytics.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              View Projects
            </button>
            <button className="btn btn-secondary" onClick={() => scrollTo('contact')}>
              Contact
            </button>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="radar">
            <div className="radar-ring r1" />
            <div className="radar-ring r2" />
            <div className="radar-ring r3" />
            <div className="radar-sweep" />
            <div className="radar-center" />
            <div className="radar-dot" style={{ top: '28%', left: '62%', animationDelay: '0s' }} />
            <div className="radar-dot" style={{ top: '58%', left: '30%', animationDelay: '1.4s' }} />
            <div className="radar-dot" style={{ top: '72%', left: '65%', animationDelay: '2.8s' }} />
          </div>
          <div className="radar-tag">SYSTEM ACTIVE</div>
        </motion.div>
      </div>

      <div className="hero-statusbar">
        <span>LAT 40.9176° N</span>
        <span>LON 73.1232° W</span>
        <span>ALT 0 FT MSL</span>
        <span className="status-on">STATUS: ONLINE</span>
      </div>
    </section>
  )
}

export default Hero




