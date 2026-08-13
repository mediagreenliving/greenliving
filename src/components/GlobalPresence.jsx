export default function GlobalPresence() {
  const regions = [
    { name: 'Russia', dot: '🔴' },
    { name: 'China', dot: '🔴' },
    { name: 'South East Asia', dot: '🔴' },
    { name: 'MENA Region', dot: '🔴' },
  ]

  const states = [
    { name: 'Andhra Pradesh', icon: '📍' },
    { name: 'Chhattisgarh', icon: '📍' },
    { name: 'Odisha', icon: '📍' },
    { name: 'Jharkhand', icon: '📍' },
  ]

  return (
    <section className="section global" id="global">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label reveal">Global Presence</span>
          <h2 className="section-title reveal reveal-delay-1">Facilitating Global Trade</h2>
          <p className="section-subtitle reveal reveal-delay-2" style={{ margin: '0 auto' }}>
            Connecting India's carbon resources with the world's industrial markets
          </p>
        </div>

        <div className="global-grid">
          {/* World Map SVG */}
          <div className="global-map reveal reveal-delay-3">
            <img src="/images/connecting-world.jpg" alt="Global Trade Map" style={{ width: "100%", height: "auto", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }} />
          </div>

          <div className="global-info reveal reveal-delay-4">
            <h3>Connecting Carbon to the World</h3>
            <p>
              Greenliving Group facilitates global trade across multiple continents. We are in business with
              <strong style={{ color: 'var(--accent)' }}> Russia, China</strong>, and certain regional economies of
              <strong style={{ color: 'var(--accent)' }}> South East Asia & the MENA region</strong>.
            </p>
            <p>
              Our dedicated logistics wing and established trade relationships ensure seamless international
              supply chain operations with reliability and competitive pricing.
            </p>

            <div className="trade-regions">
              {regions.map((region, i) => (
                <div className="region-tag" key={i}>
                  <span className="dot"></span>
                  {region.name}
                </div>
              ))}
            </div>

            <h3 style={{ marginTop: '40px' }}>Our Presence in India</h3>
            <p>Establishments across 4 key industrial states:</p>

            <div className="presence-cards">
              {states.map((state, i) => (
                <div className="presence-card" key={i}>
                  <div className="state-icon">{state.icon}</div>
                  <div className="state-name">{state.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
