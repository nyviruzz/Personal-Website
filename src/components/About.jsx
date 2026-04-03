import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const courses = [
    'AMS 161 — Calculus II',
    'AMS 210 — Linear Algebra',
    'AMS 261 — Calculus III',
    'AMS 310 — Probability & Statistics',
    'AMS 315 — Data Analysis',
    'AMS 380 — Data Mining',
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// 01 ABOUT</span>
          <h2 className="section-title">Mission Brief</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-bio"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="bio-lead">
              Applied Mathematics & Statistics student at Stony Brook University
              with a passion for Machine Learning, Data Science, and Information Security.
            </p>
            <p className="bio-text">
              Completed coursework spanning calculus, linear algebra, probability,
              statistical analysis, and data mining. Expertise in statistical modeling,
              deep learning, NLP, and computer vision.
            </p>
            <p className="bio-text">
              Committed to leveraging data science to solve real-world problems and
              create meaningful impact across industries.
            </p>
            <div className="bio-stats">
              <div className="stat">
                <span className="stat-val">6+</span>
                <span className="stat-key">Courses</span>
              </div>
              <div className="stat">
                <span className="stat-val">3+</span>
                <span className="stat-key">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-val">SBU</span>
                <span className="stat-key">University</span>
              </div>
            </div>
            <button className="btn btn-secondary">Download Resume</button>
          </motion.div>

          <motion.div
            className="about-panels"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="data-panel">
              <div className="panel-head">
                <span className="panel-id">COURSEWORK</span>
                <span className="panel-badge">SBU</span>
              </div>
              <ul className="course-list">
                {courses.map((course, i) => (
                  <motion.li
                    key={course}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                  >
                    <span className="ci">{String(i + 1).padStart(2, '0')}</span>
                    {course}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="data-panel info-grid">
              <div className="info-row">
                <span className="ik">INSTITUTION</span>
                <span className="iv">Stony Brook University</span>
              </div>
              <div className="info-row">
                <span className="ik">DEGREE</span>
                <span className="iv">Applied Math & Statistics</span>
              </div>
              <div className="info-row">
                <span className="ik">FOCUS</span>
                <span className="iv">ML / Data Science / InfoSec</span>
              </div>
              <div className="info-row">
                <span className="ik">LOCATION</span>
                <span className="iv">New York, NY</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About




