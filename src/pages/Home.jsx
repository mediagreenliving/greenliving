import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import { Factory, Recycle, Zap, Settings, Mountain, Construction, Atom, Shield, Flame, Hammer, Droplet, ArrowRight, Globe, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Home() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current
      const scrollTo = direction === 'left' ? scrollLeft - 310 : scrollLeft + 310
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  const featuredSectors = [
    { image: '/images/sec_nuclear.webp', title: 'Nuclear Energy', desc: 'Carbon products for nuclear reactors and energy infrastructure', icon: <Atom size={18} /> },
    { image: '/images/sec_defense.webp', title: 'Defense Sector', desc: 'Strategic materials for defense applications and manufacturing', icon: <Shield size={18} /> },
    { image: '/images/sec_steel.webp', title: 'Iron & Steel', desc: 'Essential carbon inputs for steelmaking processes', icon: <Flame size={18} /> },
    { image: '/images/sec_aluminium.webp', title: 'Aluminum Sector', desc: 'Carbon anodes and materials for aluminum smelting', icon: <Hammer size={18} /> },
    { image: '/images/sec_foundry.webp', title: 'Foundry', desc: 'High-grade carbon for metal casting and foundry operations', icon: <Factory size={18} /> },
    { image: '/images/sec_water.webp', title: 'Water Filtration', desc: 'Activated carbon for water purification systems', icon: <Droplet size={18} /> },
  ]

  const featuredProducts = [
    { image: '/images/prod_coal.webp', filter: 'none', name: 'Anthracite Coal', tag: 'Coal' },
    { image: '/images/prod_coke.webp', filter: 'none', name: 'CPC', tag: 'Coke' },
    { image: '/images/prod_coke.webp', filter: 'brightness(1.1)', name: 'Met Coke', tag: 'Coke' },
    { image: '/images/prod_anode.webp', filter: 'none', name: 'Carbon Anode', tag: 'Carbon' },
    { image: '/images/prod_carbon.webp', filter: 'none', name: 'Activated Carbon', tag: 'Carbon' },
    { image: '/images/prod_coke.webp', filter: 'brightness(0.95)', name: 'Pet Coke', tag: 'Coke' },
    { image: '/images/prod_carbon.webp', filter: 'contrast(1.15)', name: 'Carbon Raiser', tag: 'Carbon' },
    { image: '/images/prod_coal.webp', filter: 'contrast(1.2)', name: 'Thermal Coal', tag: 'Coal' },
  ]

  const associates = [
    { name: 'Indian Navy', image: '/images/Associates/indian navy logo.webp' },
    { name: 'Government of India', image: '/images/Associates/Government of India.svg' },
    { name: 'DAE', image: '/images/Associates/Department of Atomic Energy (DAE).webp' },
    { name: 'Indian Oil', image: '/images/Associates/indian oil logo.svg' },
    { name: 'NALCO', image: '/images/Associates/nalco logo.svg' },
    { name: 'TATA', image: '/images/Associates/tata logo.svg' },
    { name: 'Hindalco', image: '/images/Associates/hindalco logo.webp' },
    { name: 'Vedanta', image: '/images/Associates/vedanta-logo.svg' },
    { name: 'Balco', image: '/images/Our Compliances/BALCO_Logo.webp' },
  ]
  const doubled = [...associates, ...associates]

  return (
    <>
      <Hero />

      {/* About Preview */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="about-grid">
            <div className="reveal">
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">India's Premier Strategic Carbon Solutions Provider</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '16px' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Greenliving Group</strong> is a leading supplier of high-quality carbon and
                coal-based products, serving critical industries across India and international markets. With a
                strong presence in 4 states, we deliver reliable solutions that power progress and build a
                sustainable future.
              </p>
              <div className="about-highlight">
                "We don't just supply carbon. We secure your supply chain."
              </div>
              <Link to="/about" className="btn-primary" style={{ marginTop: '28px', display: 'inline-flex' }}>
                Learn More About Us →
              </Link>
            </div>

            <div className="reveal reveal-delay-3">
              <div className="about-features-grid">
                {[
                  { icon: <Factory size={28} />, label: 'METALLURGY' },
                  { icon: <Recycle size={28} />, label: 'RECYCLING' },
                  { icon: <Zap size={28} />, label: 'ENERGY' },
                  { icon: <Settings size={28} />, label: 'INDUSTRIAL PRODUCTS' },
                  { icon: <Mountain size={28} />, label: 'ROCK PRODUCTS' },
                  { icon: <Construction size={28} />, label: 'CONSTRUCTION PRODUCTS' },
                ].map((item, i) => (
                  <div className="about-feature-card" key={i}>
                    <div className="about-feature-icon">{item.icon}</div>
                    <div className="about-feature-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Featured Sectors */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header-split">
            <div className="reveal">
              <span className="section-label">SECTOR EXPERTISE</span>
              <h2 className="section-title" style={{ margin: 0 }}>Industries We Empower</h2>
            </div>
            <div className="reveal reveal-delay-1">
              <p className="section-header-desc">
                Delivering mission-critical carbon solutions across India's most demanding industrial sectors.
              </p>
            </div>
          </div>

          <div className="sectors-grid" style={{ marginTop: '32px' }}>
            {featuredSectors.map((s, i) => (
              <div className={`sector-overlay-card reveal reveal-delay-${Math.min(i + 1, 6)}`} key={i}>
                <img src={s.image} alt={s.title} className="card-bg-img" />
                <div className="card-overlay">
                  <div className="card-header-row">
                    <div className="card-icon-badge">
                      {s.icon}
                    </div>
                    <h3>{s.title}</h3>
                  </div>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal">
            <Link to="/sectors" className="btn-secondary" style={{ display: 'inline-flex', padding: '12px 32px' }}>
              View All Sectors →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="container">
          <div className="section-header-split align-center">
            <div className="reveal">
              <span className="section-label">OUR PRODUCTS</span>
              <h2 className="section-title" style={{ margin: 0 }}>What We Deal In</h2>
            </div>
            <div className="reveal reveal-delay-1" style={{ display: 'flex', alignItems: 'center', gap: '24px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '1rem', maxWidth: '400px' }}>
                High-quality carbon and coal-based products tailored to your industrial needs.
              </p>
              <Link to="/products" className="btn-outline-green" style={{ display: 'inline-flex' }}>
                View All Products →
              </Link>
            </div>
          </div>

          <div className="carousel-container reveal" style={{ position: 'relative', marginTop: '40px' }}>
            {/* Left Nav Button */}
            <button className="carousel-nav-btn prev" onClick={() => scroll('left')} aria-label="Previous Products">
              <ChevronLeft size={24} />
            </button>

            {/* Slider Row */}
            <div className="product-slider-row" ref={scrollRef}>
              {featuredProducts.map((p) => (
                <div className="product-slider-card" key={p.name}>
                  <div className="product-slider-image">
                    <img src={p.image} alt={p.name} style={{ filter: p.filter }} />
                  </div>
                  <div className="product-slider-info">
                    <h3>{p.name}</h3>
                    <span className="product-slider-tag">{p.tag.toUpperCase()}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Nav Button */}
            <button className="carousel-nav-btn next" onClick={() => scroll('right')} aria-label="Next Products">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Associates Section */}
      <section className="section associates" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="associates-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-label reveal">OUR ASSOCIATES</span>
            <h2 className="section-title reveal reveal-delay-1">
              Trusted By <span className="green">Industry Leaders</span>
            </h2>
          </div>

          <div className="marquee-wrapper reveal reveal-delay-2" style={{ marginTop: '40px' }}>
            <div className="marquee-track">
              {doubled.map((item, i) => (
                <div className="associate-item" key={i}>
                  <div className="associate-icon">
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div>
                    {item.name === 'DAE' ? (
                      <>
                        <div className="associate-name">DAE</div>
                        <div className="associate-type">Department of Atomic Energy</div>
                      </>
                    ) : (
                      <div className="associate-name">{item.name}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal">
            <Link to="/associates" className="btn-outline-green" style={{ display: 'inline-flex' }}>
              View All Partners →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-mockup">
        <div className="container">
          <div className="cta-grid-mockup">
            <div className="cta-left reveal">
              <div className="cta-hex-icon">
                <Globe size={36} />
              </div>
              <div className="cta-text-wrap">
                <h2>Ready to Partner with Us?</h2>
                <p>Get in touch for competitive pricing on premium carbon products.</p>
              </div>
            </div>
            <div className="cta-right reveal reveal-delay-1">
              <Link to="/contact" className="btn-primary" style={{ padding: '14px 36px' }}>
                Request a Quote →
              </Link>
              <Link to="/contact" className="cta-link-secondary">
                Or Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
