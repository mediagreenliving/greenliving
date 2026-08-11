import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label reveal">Get In Touch</span>
          <h2 className="section-title reveal reveal-delay-1">Contact Us</h2>
          <p className="section-subtitle reveal reveal-delay-2" style={{ margin: '0 auto' }}>
            Ready to discuss your carbon requirements? Reach out to our team
          </p>
        </div>

        <div className="contact-grid">
          <div className="reveal reveal-delay-3">
            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Office Address</h4>
                  <p>306, Edge, Vidhan Sabha Road, Mowa<br />Raipur - 492001, Chhattisgarh, India</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Phone Numbers</h4>
                  <p>
                    <a href="tel:+918919553938" style={{ color: 'var(--accent-light)' }}>+91 891 955 3938</a><br />
                    <a href="tel:+916200349081" style={{ color: 'var(--accent-light)' }}>+91 620 034 9081</a>
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:greenliving.vizag@gmail.com" style={{ color: 'var(--accent-light)' }}>
                      greenliving.vizag@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">🕐</div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-4">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="form-submit">
                {submitted ? '✓ Message Sent!' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
