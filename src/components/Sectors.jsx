export default function Sectors() {
  const sectors = [
    { icon: '☢️', title: 'Nuclear Energy', desc: 'Carbon products for nuclear reactors and energy infrastructure' },
    { icon: '🛡️', title: 'Defense Sector', desc: 'Strategic materials for defense applications and manufacturing' },
    { icon: '🚗', title: 'Auto Components', desc: 'Precision carbon solutions for automotive manufacturing' },
    { icon: '🏗️', title: 'Foundry', desc: 'High-grade carbon for metal casting and foundry operations' },
    { icon: '⚒️', title: 'Iron & Steel', desc: 'Essential carbon inputs for steelmaking processes' },
    { icon: '🔩', title: 'Aluminium Sector', desc: 'Carbon anodes and materials for aluminium smelting' },
    { icon: '🧪', title: 'Carbon Paste', desc: 'Specialized carbon paste for electrode manufacturing' },
    { icon: '💧', title: 'Water Filtration', desc: 'Activated carbon for water purification systems' },
    { icon: '🔮', title: 'Glass Industry', desc: 'Carbon-based materials for glass production' },
  ]

  return (
    <section className="section sectors curved-bottom" id="sectors" style={{ backgroundColor: 'var(--bottle-green)', color: '#fff', paddingTop: '160px', paddingBottom: '160px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label reveal" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--jade-green)', border: 'none' }}>OUR SECTORS</span>
          <h2 className="section-title reveal reveal-delay-1" style={{ color: '#fff' }}>Industries We Empower</h2>
          <p className="section-subtitle reveal reveal-delay-2" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.8)' }}>
            Delivering mission-critical carbon solutions across India's most demanding industrial sectors
          </p>
        </div>

        <div className="sectors-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {sectors.map((sector, i) => (
            <div
              className={`sector-card reveal reveal-delay-${Math.min(i + 1, 8)}`}
              key={i}
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '32px 24px', textAlign: 'center', transition: 'transform 0.3s, background-color 0.3s', cursor: 'pointer' }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)' }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)' }}
            >
              <div className="sector-icon" style={{ fontSize: '40px', marginBottom: '24px', color: 'var(--jade-green)' }}>{sector.icon}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px' }}>{sector.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{sector.desc}</p>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <button className="btn-primary" style={{ backgroundColor: 'var(--jade-green)' }}>
            View All Sectors <span style={{ marginLeft: '8px' }}>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  )
}
