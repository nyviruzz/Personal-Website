import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:visulaph@gmail.com?subject=${subject}&body=${body}`
  }

  const details = [
    { key: 'EMAIL', val: 'visulaph@gmail.com', href: 'mailto:visulaph@gmail.com' },
    { key: 'LOCATION', val: 'New York, NY', href: null },
    { key: 'GITHUB', val: 'github.com/nyviruzz', href: 'https://github.com/nyviruzz' },
    { key: 'LINKEDIN', val: 'linkedin.com/in/visula', href: 'https://linkedin.com/in/visula' },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// 04 CONTACT</span>
          <h2 className="section-title">Contact</h2>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-details"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="contact-intro">
              Open to new opportunities, collaborations, and interesting projects.
              Reach out via the form or any channel below.
            </p>
            <div className="contact-list">
              {details.map(({ key, val, href }) => (
                <div key={key} className="detail-row">
                  <span className="detail-key">{key}</span>
                  {href
                    ? <a className="detail-val link" href={href} target="_blank" rel="noopener noreferrer">{val}</a>
                    : <span className="detail-val">{val}</span>
                  }
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label className="field-label" htmlFor="cf-email">EMAIL</label>
                <input id="cf-email" name="email" type="email" value={formData.email}
                  onChange={handleChange} required placeholder="your@email.com" />
              </div>
              <div className="form-field">
                <label className="field-label" htmlFor="cf-name">NAME</label>
                <input id="cf-name" name="name" type="text" value={formData.name}
                  onChange={handleChange} required placeholder="Your Name" />
              </div>
              <div className="form-field">
                <label className="field-label" htmlFor="cf-message">MESSAGE</label>
                <textarea id="cf-message" name="message" value={formData.message}
                  onChange={handleChange} required placeholder="Your message..." rows="5" />
              </div>
              <button type="submit" className="btn btn-primary">Transmit Message</button>
              <p className="form-note">I usually respond within 24-48 hours.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact