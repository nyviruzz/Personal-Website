import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const skills = [
    'Machine Learning',
    'Data Science',
    'Statistical Modeling',
    'Deep Learning',
    'NLP',
    'Computer Vision'
  ]

  const courses = [
    'AMS 161 (Calculus II)',
    'AMS 210 (Linear Algebra)',
    'AMS 261 (Calculus III)',
    'AMS 310 (Probability and Statistics)',
    'AMS 315 (Data Analysis)',
    'AMS 380 (Data Mining)'
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="about-intro">
              Hi, I'm <strong>Visula Peduru</strong>, an Applied Mathematics & Statistics student at Stony Brook University with a growing passion for Machine Learning, Data Science, and Information Security.
            </p>
            
            <p>
              I have completed coursework in various data science domains, including calculus, linear algebra, probability and statistics, data analysis, and data mining. My expertise spans statistical modeling, deep learning, NLP, and computer vision.
            </p>
            
            <p>
              I'm committed to leveraging data science to solve real-world problems and create meaningful impact across industries.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">6+</span>
                <span className="highlight-label">Courses Completed</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">∞</span>
                <span className="highlight-label">Passion for Learning</span>
              </div>
            </div>

            <button className="btn btn-primary">
              Download Resume
            </button>
          </motion.div>

          <motion.div
            className="about-details"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="details-card">
              <h3>Skills & Expertise</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="details-card">
              <h3>Relevant Coursework</h3>
              <ul className="course-list">
                {courses.map((course, index) => (
                  <motion.li
                    key={course}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {course}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About


