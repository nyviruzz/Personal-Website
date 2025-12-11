import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Machine Learning',
      icon: '🧠',
      skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'LightGBM', 'Keras']
    },
    {
      title: 'Data Analysis',
      icon: '📊',
      skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'R', 'Jupyter']
    },
    {
      title: 'Visualization',
      icon: '📈',
      skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI']
    },
    {
      title: 'Big Data & Cloud',
      icon: '☁️',
      skills: ['Apache Spark', 'AWS', 'Google Cloud', 'Docker', 'Azure']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
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


