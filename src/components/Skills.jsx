import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const systems = [
    {
      id: 'Category 01',
      title: 'Machine Learning',
      skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'LightGBM', 'Keras'],
    },
    {
      id: 'Category 02',
      title: 'Data Analysis',
      skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'R', 'Jupyter'],
    },
    {
      id: 'Category 03',
      title: 'Visualization',
      skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI'],
    },
    {
      id: 'Category 04',
      title: 'Infrastructure',
      skills: ['Apache Spark', 'AWS', 'Docker', 'Git', 'Azure', 'Linux'],
    },
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// 03 SKILLS</span>
          <h2 className="section-title">Skills</h2>
        </motion.div>

        <div className="sys-grid">
          {systems.map((sys, index) => (
            <motion.div
              key={sys.id}
              className="sys-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="sys-head">
                <span className="sys-id">{sys.id}</span>
                <span className="sys-title">{sys.title}</span>
              </div>
              <div className="sys-body">
                {sys.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    className="skill-row"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.06 + i * 0.04 }}
                  >
                    <span className="skill-name">{skill}</span>
                    <div className="skill-track">
                      <motion.div
                        className="skill-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: index * 0.08 + i * 0.06, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills




