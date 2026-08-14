import { Link } from 'react-router-dom'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" style={{ backgroundColor: 'var(--bottle-green)', color: '#fff', paddingTop: '80px', paddingBottom: '40px', borderTopLeftRadius: '80px', borderTopRightRadius: '80px', marginTop: '-40px', position: 'relative', zIndex: 5 }}>
      <div className="container">
        {/* CTA Banner inside footer */}
        <div style={{ backgroundColor: 'var(--forest-green)', borderRadius: '24px', padding: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
          <div style={{ maxWidth: '600px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '16px', color: '#fff' }}>Ready to transform your industrial operations?</h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)' }}>Get in touch with our experts today to discuss your carbon requirements.</p>
          </div>
          <div>
            <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'var(--jade-green)' }}>
              Contact Us <span style={{ marginLeft: '8px' }}>&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo" style={{ marginBottom: '24px', display: 'inline-block' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: '800', color: '#fff' }}>GreenLiving</span>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
              India's premier strategic carbon solutions provider, powering industries across
              nuclear energy, defense, steel, aluminium, and more. Trusted by leading government
              and private sector organisations nationwide.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--jade-green)' }}>Quick Links</h4>
            <div className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/sectors">Sectors</Link>
              <Link to="/products">Products</Link>
              <Link to="/associates">Associates</Link>
              <Link to="/global-presence">Global Presence</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          <div>
            <h4 style={{ color: 'var(--jade-green)' }}>Top Products</h4>
            <div className="footer-links">
              <Link to="/products">Anthracite Coal</Link>
              <Link to="/products">Met Coke</Link>
              <Link to="/products">CPC</Link>
              <Link to="/products">Carbon Anode</Link>
              <Link to="/products">Pet Coke</Link>
              <Link to="/products">Activated Carbon</Link>
            </div>
          </div>

          <div>
            <h4 style={{ color: 'var(--jade-green)' }}>Contact Info</h4>
            <div className="footer-contact-item">
              <span className="fc-icon">
                <img src="/images/google-map-icon.svg" alt="Map" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
              </span>
              <a href="https://maps.google.com/?q=306,+Edge,+Vidhan+Sabha+Road,+Mowa,+Raipur+-+492001,+Chhattisgarh,+India" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>306, Edge, Vidhan Sabha Road, Mowa, Raipur - 492001, Chhattisgarh, India</a>
            </div>
            <div className="footer-contact-item">
              <span className="fc-icon">
                <img src="/images/accept-call-icon.svg" alt="Phone" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
              </span>
              <span style={{ display: 'flex', flexDirection: 'column' }}>
                <a href="tel:+918919553938" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>+91 891 955 3938</a>
                <a href="tel:+916200349081" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>+91 620 034 9081</a>
              </span>
            </div>
            <div className="footer-contact-item">
              <span className="fc-icon">
                <img src="/images/gmail-icon.svg" alt="Email" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
              </span>
              <a href="mailto:greenliving.vizag@gmail.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>greenliving.vizag@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '48px', paddingTop: '24px' }}>
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>© 2026 GreenLiving Group. All Rights Reserved.</span>
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>Strategic Carbon Solutions</span>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/greenliving-vizag/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="social-link" title="Instagram" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}
