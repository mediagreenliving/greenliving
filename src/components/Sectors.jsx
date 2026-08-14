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
    <section className="section sectors" id="sectors">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label reveal">Sector Experience</span>
          <h2 className="section-title reveal reveal-delay-1">Industries We Empower</h2>
          <p className="section-subtitle reveal reveal-delay-2" style={{ margin: '0 auto' }}>
            Delivering mission-critical carbon solutions across India's most demanding industrial sectors
          </p>
        </div>

        <div className="sectors-grid">
          {sectors.map((sector, i) => (
            <div
              className={`sector-card reveal reveal-delay-${Math.min(i + 1, 8)}`}
              key={i}
            >
              <div className="sector-icon">{sector.icon}</div>
              <h3>{sector.title}</h3>
              <p>{sector.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
