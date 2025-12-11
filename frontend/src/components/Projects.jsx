import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Machine Learning Project',
      description: 'A comprehensive machine learning project utilizing advanced algorithms for predictive analytics and data insights.',
      tags: ['Python', 'XGBoost', 'SHAP', 'Scikit-learn'],
      image: '📊',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Data Analysis Project',
      description: 'Deep dive into complex datasets using statistical methods and data visualization techniques.',
      tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      image: '📈',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Neural Network Project',
      description: 'Implementation of deep learning models for pattern recognition and classification tasks.',
      tags: ['TensorFlow', 'Keras', 'PyTorch', 'NLP'],
      image: '🤖',
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
                <div className="project-overlay">
                  <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Demo
                  </a>
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub →
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


