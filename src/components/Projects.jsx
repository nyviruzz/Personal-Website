import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 'Project 01',
      title: 'Machine Learning Pipeline',
      description: 'Predictive analytics pipeline using ensemble methods and explainability tools for actionable data insights.',
      tags: ['Python', 'XGBoost', 'SHAP', 'Scikit-learn'],
      status: 'Case Study',
      github: '#',
      demo: '#',
    },
    {
      id: 'Project 02',
      title: 'Statistical Data Analysis',
      description: 'Deep dive into complex datasets using statistical methods, hypothesis testing, and advanced visualization.',
      tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      status: 'Case Study',
      github: '#',
      demo: '#',
    },
    {
      id: 'Project 03',
      title: 'Neural Network Classifier',
      description: 'Deep learning models for pattern recognition and multi-class classification using modern architectures.',
      tags: ['TensorFlow', 'Keras', 'PyTorch', 'NLP'],
      status: 'Case Study',
      github: '#',
      demo: '#',
    },
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// 02 PROJECTS</span>
          <h2 className="section-title">Selected Projects</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="proj-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -4 }}
            >
              <div className="proj-head">
                <span className="proj-id">{project.id}</span>
                <span className="proj-status">{project.status}</span>
              </div>
              <h3 className="proj-title">{project.title}</h3>
              <p className="proj-desc">{project.description}</p>
              <div className="proj-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="proj-tag">{tag}</span>
                ))}
              </div>
              <div className="proj-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo ↗</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects




