import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { body, validationResult } from 'express-validator'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configure nodemailer (using Gmail as an example)
// In production, use environment variables for credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
})

// Validation middleware
const contactValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
]

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

app.post('/api/contact', contactValidation, async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      })
    }

    const { name, email, message } = req.body

    // Email configuration
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: process.env.CONTACT_EMAIL || 'visulaph@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email
    }

    // Send email (comment out if you don't have email configured yet)
    // await transporter.sendMail(mailOptions)

    // For now, just log the contact form submission
    console.log('Contact form submission:', { name, email, message })

    // In a real application, you might want to:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send auto-reply to user

    res.json({
      success: true,
      message: 'Message sent successfully!'
    })
  } catch (error) {
    console.error('Error processing contact form:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(`Health check: http://localhost:${PORT}/api/health`)
})


