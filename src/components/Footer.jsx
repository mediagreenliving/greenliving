import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook, Handshake, Leaf } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)', position: 'relative' }}>
      
      <div className="container">
        {/* Floating CTA Banner */}
        <div style={{
          backgroundColor: '#051f15',
          borderRadius: '24px',
          padding: '48px 64px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '32px',
          marginTop: '-100px', // Pull up to overlap the wave divider
          marginBottom: '80px',
          position: 'relative',
          zIndex: 10,
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ color: 'var(--jade-green)' }}>
              <Handshake size={64} />
            </div>
            <div>
              <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '8px' }}>Ready to Partner with Us?</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0, fontSize: '1rem' }}>Get in touch for competitive pricing on premium carbon products.</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'var(--jade-green)', color: 'var(--dark-900)' }}>
              Request a Quote &rarr;
            </Link>
            <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600' }}>
              Or Contact Us
            </Link>
          </div>
        </div>

        {/* 4-Column Footer Links */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px', marginBottom: '64px' }}>
          
          {/* Column 1: Logo & Info */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '24px' }}>
              <img src="/images/logo.webp" alt="Greenliving Group Logo" style={{ height: '56px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff', letterSpacing: '-0.5px', textTransform: 'uppercase' }}>GreenLiving</span>
            </Link>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '24px', color: 'var(--text-muted)' }}>
              India's premier strategic carbon solutions provider, powering industries across India and beyond with reliable, sustainable and high-quality products.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ color: 'var(--jade-green)', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(0,168,107,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <Facebook size={18} />
              </a>
              <a href="#" style={{ color: 'var(--jade-green)', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(0,168,107,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <Linkedin size={18} />
              </a>
              <a href="#" style={{ color: 'var(--jade-green)', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(0,168,107,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '24px', fontWeight: '700' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['About Us', 'Sectors', 'Products', 'Associates', 'Global Presence', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem' }}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Top Products */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '24px', fontWeight: '700' }}>Top Products</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Anthracite Coal', 'Met Coke', 'CPC', 'Carbon Anode', 'Pet Coke', 'Activated Carbon'].map((link) => (
                <li key={link}>
                  <Link to="/products" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem' }}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '24px', fontWeight: '700' }}>Contact Info</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--jade-green)', marginTop: '2px' }}><MapPin size={20} /></div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  306, Edge, Vidhan Sabha Road,<br />Mowa, Raipur - 492001,<br />Chhattisgarh, India
                </span>
              </li>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ color: 'var(--jade-green)' }}><Phone size={20} /></div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>+91 93196 53058</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>+91 62306 53308</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ color: 'var(--jade-green)' }}><Mail size={20} /></div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>greenliving4raipur@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px', paddingBottom: '24px' }}>
          <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.85rem' }}>
            © 2026 Greenliving Group. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            <span>Strategic Carbon Solutions</span>
            <Leaf size={16} color="var(--jade-green)" />
          </div>
        </div>

      </div>
    </footer>
  )
}
