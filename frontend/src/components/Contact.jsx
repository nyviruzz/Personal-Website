import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      // Using FormSubmit.co - a free form endpoint
      // No backend needed - forms are sent via email
      const formElement = e.target
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: new FormData(formElement)
      })

      if (response.ok) {
        setStatus({ type: 'success', message: "Message sent successfully! I'll get back to you soon." })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({
          type: 'error',
          message: 'Failed to send message. Please try again.'
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Interested in collaborating or have a project in mind? Let's connect!
        </motion.p>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="info-card">
              <div className="info-icon">📧</div>
              <div className="info-content">
                <h3>Email</h3>
                <a href="mailto:visulaph@gmail.com">visulaph@gmail.com</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Location</h3>
                <p>New York, NY</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🔗</div>
              <div className="info-content">
                <h3>Connect</h3>
                <div className="social-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
