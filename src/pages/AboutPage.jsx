import { useEffect, useRef } from 'react'
import PageHero from '../components/PageHero'

function LottiePlayer({ animationPath, style }) {
  const containerRef = useRef(null)

  useEffect(() => {
    let anim
    let active = true

    if (containerRef.current && window.lottie) {
      fetch(animationPath)
        .then((res) => res.json())
        .then((data) => {
          if (active && containerRef.current) {
            containerRef.current.innerHTML = '' // Prevent duplicates
            anim = window.lottie.loadAnimation({
              container: containerRef.current,
              renderer: 'svg',
              loop: true,
              autoplay: true,
              animationData: data,
            })
          }
        })
        .catch((err) => console.error('Error loading Lottie animation:', err))
    }

    return () => {
      active = false
      if (anim) anim.destroy()
    }
  }, [animationPath])

  return <div ref={containerRef} style={style} />
}

export default function AboutPage() {
  const values = [
    { icon: '🎯', title: 'Quality Centric', desc: 'Every product is tested against committed specifications with a rigorous multi-stage quality assurance process before dispatch.' },
    { icon: '🤝', title: 'Commitment Oriented', desc: 'In a volatile metals market, our commitments are paramount. An order once accepted will always be honoured, no matter the market conditions.' },
    { icon: '🚚', title: 'On-Time Delivery', desc: 'Our captive logistics wing ensures consistent, reliable, and timely delivery to every customer across India and internationally.' },
    { icon: '💰', title: 'Competitive Pricing', desc: 'As a direct supply chain partner, we strive to maximize savings for our customers through competitive and transparent pricing.' },
    { icon: '🌱', title: 'Sustainability', desc: 'We are committed to environmentally responsible sourcing and operations, aligned with MoEFCC and CPCB guidelines.' },
    { icon: '💡', title: 'Innovation Driven', desc: 'We continually invest in R&D to develop carbon products that are technically superior and commercially viable.' },
  ]

  const timeline = [
    { year: 'Foundation', title: 'Company Established', desc: 'Greenliving Group was founded with a vision to become India\'s premier carbon solutions provider.' },
    { year: 'Growth', title: 'Multi-State Expansion', desc: 'Expanded operations to 4 states — Andhra Pradesh, Chhattisgarh, Odisha, and Jharkhand.' },
    { year: 'Diversification', title: 'Product Portfolio Growth', desc: 'Grew our product range to 15+ carbon and coal-based products serving 9+ industrial sectors.' },
    { year: 'Global', title: 'International Trade', desc: 'Established trade relationships with Russia, China, South East Asia, and the MENA region.' },
  ]

  return (
    <>
      <PageHero
        title="About Greenliving Group"
        subtitle="India's premier strategic carbon solutions provider, powering industries across nuclear energy, defense, steel, aluminium, and more."
        breadcrumb="About Us"
        bgImage="/images/sec_nuclear.webp"
      />

      {/* Story Section */}
      <section className="section" style={{ background: 'var(--dark-800)' }}>
        <div className="container">
          <div className="about-grid">
            <div className="reveal">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Building India's Carbon Future</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                <strong style={{ color: 'var(--white)' }}>Greenliving Group</strong> was established with a clear mission:
                to become India's most trusted partner for strategic carbon solutions. From our inception,
                we recognized the critical role that carbon plays across India's industrial landscape — from
                powering nuclear reactors to enabling aluminium smelting.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Today, we operate across <strong style={{ color: 'var(--white)' }}>4 states</strong> — Andhra Pradesh,
                Chhattisgarh, Odisha, and Jharkhand — with a comprehensive portfolio of
                <strong style={{ color: 'var(--white)' }}> 15+ carbon and coal-based products</strong>. Our reach extends
                beyond India's borders into Russia, China, South East Asia, and the MENA region.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                What sets us apart is our <strong style={{ color: 'var(--white)' }}>captive logistics wing</strong> — a
                dedicated fleet that gives us end-to-end control over the supply chain, from sourcing to
                last-mile delivery. This isn't just about supplying carbon; it's about securing your supply chain.
              </p>
            </div>

            <div className="reveal reveal-delay-3">
              <div className="hex-grid">
                {[
                  { icon: '⚙️', label: 'Metallurgy' },
                  { icon: '♻️', label: 'Recycling' },
                  { icon: '⚡', label: 'Energy' },
                  { icon: '🏭', label: 'Industrial Products' },
                  { icon: '🔬', label: 'Niche Products' },
                  { icon: '🧱', label: 'Other Carbon' },
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

      {/* Vision / Mission */}
      <section className="section" style={{ background: 'var(--dark-900)' }}>
        <div className="container">
          <div className="vision-mission-grid">
            <div className="reveal">
              <div className="supply-chain-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ flex: 1 }}>
                  <h4>Our Vision</h4>
                  <p style={{ marginBottom: '20px' }}>
                    To be the most trusted and preferred strategic carbon solutions partner in India and across global
                    markets, driving industrial excellence through quality, reliability, and sustainable practices.
                  </p>
                </div>
                <div className="supply-icon" style={{ width: '120px', height: '120px', marginBottom: 0, marginTop: 'auto' }}>
                  <LottiePlayer animationPath="/images/Our Vision.json" style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="supply-chain-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="supply-icon" style={{ width: '120px', height: '120px', marginBottom: '20px' }}>
                  <LottiePlayer animationPath="/images/Mission.json" style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4>Our Mission</h4>
                  <p>
                    To supply premium carbon and coal-based products with unmatched consistency, competitive pricing,
                    and an end-to-end logistics capability that secures our customers' supply chains across
                    every industrial sector we serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section" style={{ background: 'var(--dark-800)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-label reveal">Our Journey</span>
            <h2 className="section-title reveal reveal-delay-1">Milestones That Define Us</h2>
          </div>

          <div className="timeline" style={{ marginTop: '48px' }}>
            {timeline.map((item, i) => (
              <div className={`timeline-item reveal reveal-delay-${i + 1}`} key={i}>
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                </div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" style={{ background: 'var(--dark-900)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-label reveal">Core Values</span>
            <h2 className="section-title reveal reveal-delay-1">What Drives Us</h2>
            <p className="section-subtitle reveal reveal-delay-2" style={{ margin: '0 auto' }}>
              The principles that guide every decision at Greenliving Group
            </p>
          </div>

          <div className="sectors-grid" style={{ marginTop: '48px' }}>
            {values.map((v, i) => (
              <div className={`sector-card reveal reveal-delay-${Math.min(i + 1, 6)}`} key={i}>
                <div className="sector-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="about-highlight reveal" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.3rem', borderLeft: '4px solid var(--accent)', padding: '28px 32px' }}>
            "We don't just supply carbon. We secure your supply chain."
          </div>
        </div>
      </section>
    </>
  )
}
