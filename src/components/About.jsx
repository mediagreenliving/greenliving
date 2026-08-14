export default function About() {
  const hexItems = [
    { icon: '⚙️', label: 'Metallurgy' },
    { icon: '♻️', label: 'Recycling' },
    { icon: '⚡', label: 'Energy' },
    { icon: '🏭', label: 'Industrial Products' },
    { icon: '🔬', label: 'Niche Products' },
    { icon: '🧱', label: 'Other Carbon Products' },
  ]

  return (
    <section className="section about" id="about" style={{ backgroundColor: 'var(--green-50)', paddingBottom: '160px' }}>
      <div className="container">
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div className="about-text reveal">
            <span className="section-label">WHO WE ARE</span>
            <h2 className="section-title">India's Premier Strategic Carbon Solutions Provider</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              <strong>GreenLiving Group</strong> is a leading supplier of high-quality carbon and
              coal-based products, serving critical industries across India and
              international markets. With a strong presence in 4 states, we deliver
              reliable solutions that power progress and build a sustainable future.
            </p>
            <div className="about-highlight" style={{ display: 'flex', gap: '16px', backgroundColor: 'var(--green-100)', padding: '24px', borderRadius: '16px', marginTop: '32px', color: 'var(--dark-900)', fontWeight: '600' }}>
              <div style={{ color: 'var(--forest-green)', fontSize: '24px' }}>🌿</div>
              <div>"We don't just supply carbon. We secure your supply chain."</div>
            </div>
            <div style={{ marginTop: '32px' }}>
              <a href="#sectors" className="btn-primary" style={{ backgroundColor: 'var(--jade-green)' }}>
                Learn More About Us <span style={{ marginLeft: '8px' }}>&rarr;</span>
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-3">
            <div className="category-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {hexItems.map((item, i) => (
                <div className="category-card" key={i} style={{ backgroundColor: 'var(--green-100)', padding: '32px 16px', borderRadius: '24px', textAlign: 'center', transition: 'transform 0.3s' }}>
                  <div className="category-icon" style={{ fontSize: '32px', marginBottom: '16px', color: 'var(--forest-green)' }}>{item.icon}</div>
                  <div className="category-label" style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--dark-900)', textTransform: 'uppercase' }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Secondary Stats Bar */}
      <div className="container" style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', width: '100%', zIndex: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'var(--green-200)', padding: '32px 64px', borderRadius: '100px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            { icon: '🌿', count: '4+', label: 'CARBON PRODUCTS' },
            { icon: '🏭', count: '2+', label: 'INDUSTRY SECTORS' },
            { icon: '🗺️', count: '1', label: 'INDIAN STATES' },
            { icon: '🤝', count: '2+', label: 'TRUSTED PARTNERS' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center', borderRight: i !== 3 ? '1px solid rgba(0,0,0,0.1)' : 'none', paddingRight: i !== 3 ? '48px' : '0' }}>
              <div style={{ fontSize: '24px', color: 'var(--forest-green)', marginBottom: '8px' }}>{stat.icon}</div>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--dark-900)', lineHeight: 1 }}>{stat.count}</div>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--dark-600)', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
