import { Link } from 'react-router-dom'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo" style={{ marginBottom: '16px', display: 'inline-block' }}>
              <img src="/logo.jpeg" alt="Greenliving Group Logo" style={{ height: '56px', objectFit: 'contain' }} />
            </Link>
            <p>
              India's premier strategic carbon solutions provider, powering industries across
              nuclear energy, defense, steel, aluminium, and more. Trusted by leading government
              and private sector organisations nationwide.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
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
            <h4>Top Products</h4>
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
            <h4>Contact Info</h4>
            <div className="footer-contact-item">
              <span className="fc-icon">📍</span>
              <span>306, Edge, Vidhan Sabha Road, Mowa, Raipur - 492001, Chhattisgarh, India</span>
            </div>
            <div className="footer-contact-item">
              <span className="fc-icon">📞</span>
              <span>+91 891 955 3938<br />+91 620 034 9081</span>
            </div>
            <div className="footer-contact-item">
              <span className="fc-icon">✉️</span>
              <span>greenliving.vizag@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Greenliving Group. All Rights Reserved.</span>
          <span>Strategic Carbon Solutions</span>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
