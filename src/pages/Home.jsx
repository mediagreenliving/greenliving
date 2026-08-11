import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'

export default function Home() {
  const featuredSectors = [
    { image: '/images/sec_nuclear.png', title: 'Nuclear Energy', desc: 'Carbon products for nuclear reactors and energy infrastructure' },
    { image: '/images/sec_defense.png', title: 'Defense Sector', desc: 'Strategic materials for defense applications and manufacturing' },
    { image: '/images/sec_steel.png', title: 'Iron & Steel', desc: 'Essential carbon inputs for steelmaking processes' },
    { image: '/images/sec_aluminium.png', title: 'Aluminium Sector', desc: 'Carbon anodes and materials for aluminium smelting' },
    { image: '/images/sec_foundry.png', title: 'Foundry', desc: 'High-grade carbon for metal casting and foundry operations' },
    { image: '/images/sec_water.png', title: 'Water Filtration', desc: 'Activated carbon for water purification systems' },
  ]

  const featuredProducts = [
    { image: '/images/prod_coal.png', filter: 'none', name: 'Anthracite Coal', tag: 'Coal' },
    { image: '/images/prod_coke.png', filter: 'none', name: 'CPC', tag: 'Coke' },
    { image: '/images/prod_coke.png', filter: 'brightness(1.15) contrast(0.9)', name: 'Met Coke', tag: 'Coke' },
    { image: '/images/prod_anode.png', filter: 'none', name: 'Carbon Anode', tag: 'Carbon' },
    { image: '/images/prod_carbon.png', filter: 'none', name: 'Activated Carbon', tag: 'Carbon' },
    { image: '/images/prod_coke.png', filter: 'brightness(0.9) grayscale(0.4)', name: 'Pet Coke', tag: 'Coke' },
    { image: '/images/prod_carbon.png', filter: 'brightness(0.8) contrast(1.4)', name: 'Carbon Raiser', tag: 'Carbon' },
    { image: '/images/prod_coal.png', filter: 'sepia(0.2) hue-rotate(15deg) brightness(0.9)', name: 'Thermal Coal', tag: 'Coal' },
  ]

  const associates = [
    { name: 'Indian Navy', icon: '⚓' },
    { name: 'Government of India', icon: '🏛️' },
    { name: 'DAE', icon: '⚛️' },
    { name: 'Indian Oil', icon: '🛢️' },
    { name: 'NALCO', icon: '🏭' },
    { name: 'TATA', icon: '🏢' },
    { name: 'Hindalco', icon: '⛏️' },
    { name: 'Vedanta', icon: '🌐' },
    { name: 'Balco', icon: '🔩' },
  ]
  const doubled = [...associates, ...associates]

  return (
    <>
      <Hero />

      {/* About Preview */}
      <section className="section" style={{ background: 'var(--dark-800)' }}>
        <div className="container">
          <div className="about-grid">
            <div className="reveal">
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">India's Premier Strategic Carbon Solutions Provider</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '16px' }}>
                <strong style={{ color: 'var(--white)' }}>Greenliving Group</strong> is a leading supplier of high-quality carbon and coal-based products,
                serving critical industries across India and international markets. With establishments in
                <strong style={{ color: 'var(--white)' }}> 4 states</strong>, we deliver an unrivalled supply chain.
              </p>
              <div className="about-highlight">
                "We don't just supply carbon. We secure your supply chain."
              </div>
              <Link to="/about" className="btn-primary" style={{ marginTop: '28px', display: 'inline-flex' }}>
                Learn More About Us →
              </Link>
            </div>

            <div className="reveal reveal-delay-3">
              <div className="hex-grid">
                {[
                  { icon: '⚙️', label: 'Metallurgy' },
                  { icon: '♻️', label: 'Recycling' },
                  { icon: '⚡', label: 'Energy' },
                  { icon: '🏭', label: 'Industrial Products' },
                  { icon: '🔬', label: 'Niche Products' },
                  { icon: '🧱', label: 'Other Carbon Products' },
                ].map((item, i) => (
                  <div className="hex-item" key={i}>
                    <svg viewBox="0 0 120 138">
                      <polygon points="60,1 118,35 118,103 60,137 2,103 2,35" />
                    </svg>
                    <div className="hex-content">
                      <div className="hex-icon">{item.icon}</div>
                      <div className="hex-label">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Featured Sectors */}
      <section className="section" style={{ background: 'var(--dark-900)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-label reveal">Sector Experience</span>
            <h2 className="section-title reveal reveal-delay-1">Industries We Empower</h2>
            <p className="section-subtitle reveal reveal-delay-2" style={{ margin: '0 auto' }}>
              Delivering mission-critical carbon solutions across India's most demanding industrial sectors
            </p>
          </div>

          <div className="sectors-grid" style={{ marginTop: '48px' }}>
            {featuredSectors.map((s, i) => (
              <div className={`sector-card reveal reveal-delay-${Math.min(i + 1, 6)}`} key={i} style={{ padding: 0 }}>
                <div className="sector-image" style={{ height: '200px', overflow: 'hidden' }}>
                  <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }} className="reveal">
            <Link to="/sectors" className="btn-secondary" style={{ display: 'inline-flex' }}>
              View All 9+ Sectors →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" style={{ background: 'var(--dark-800)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-label reveal">Our Products</span>
            <h2 className="section-title reveal reveal-delay-1">What We Deal In</h2>
          </div>

          <div className="products-grid" style={{ marginTop: '40px' }}>
            {featuredProducts.map((p, i) => (
              <div className="product-card reveal" key={p.name} style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="product-image" style={{ padding: 0, overflow: 'hidden' }}>
                  <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: p.filter }} />
                </div>
                <div className="product-info">
                  <h3>{p.name}</h3>
                  <span className="product-tag">{p.tag}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }} className="reveal">
            <Link to="/products" className="btn-primary" style={{ display: 'inline-flex' }}>
              View All 15+ Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Associates Marquee */}
      <section className="section associates" style={{ background: 'var(--dark-900)' }}>
        <div className="container">
          <div className="associates-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-label reveal">Our Associates</span>
            <h2 className="section-title reveal reveal-delay-1">Trusted By Industry Leaders</h2>
          </div>
        </div>

        <div className="marquee-wrapper reveal reveal-delay-2">
          <div className="marquee-track">
            {doubled.map((item, i) => (
              <div className="associate-item" key={i}>
                <div className="associate-icon">{item.icon}</div>
                <div className="associate-name">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }} className="reveal">
          <Link to="/associates" className="btn-secondary" style={{ display: 'inline-flex' }}>
            View All Partners →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title reveal">Ready to Partner with Us?</h2>
          <p className="section-subtitle reveal reveal-delay-1" style={{ margin: '0 auto 32px' }}>
            Get in touch for competitive pricing on premium carbon products
          </p>
          <div className="hero-buttons reveal reveal-delay-2">
            <Link to="/contact" className="btn-primary">
              Request a Quote →
            </Link>
            <Link to="/global-presence" className="btn-secondary">
              Our Global Reach
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
