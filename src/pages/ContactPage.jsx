import { useState } from 'react'
import PageHero from '../components/PageHero'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', subject: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Ready to discuss your carbon requirements? Our team is here to help."
        breadcrumb="Contact"
        bgImage="/images/sec_water.webp"
      />

      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="contact-grid">
            <div className="reveal">
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>Get In Touch</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.7 }}>
                Whether you need a quote, have a question about our products, or want to explore
                a long-term supply partnership, we'd love to hear from you.
              </p>

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
                      <a href="tel:+918919553938" style={{ color: 'var(--green-600)' }}>+91 891 955 3938</a><br />
                      <a href="tel:+916200349081" style={{ color: 'var(--green-600)' }}>+91 620 034 9081</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:greenliving.vizag@gmail.com" style={{ color: 'var(--green-600)' }}>
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

            <div className="reveal reveal-delay-2">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input id="company" type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Product enquiry, Quote request, etc." />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your requirements, quantities, specifications..." required style={{ minHeight: '140px' }}></textarea>
                </div>

                <button type="submit" className="form-submit">
                  {submitted ? '✓ Message Sent Successfully!' : 'Send Message →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
