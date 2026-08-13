import PageHero from '../components/PageHero'

export default function GlobalPage() {
  const regions = [
    { name: 'Russia', desc: 'Coal and carbon trade partnerships with Russian industrial producers' },
    { name: 'China', desc: 'Strategic carbon product sourcing and trade with Chinese manufacturers' },
    { name: 'South East Asia', desc: 'Regional supply of carbon products to emerging economies' },
    { name: 'MENA Region', desc: 'Trade relationships across Middle East and North Africa markets' },
  ]

  const states = [
    { name: 'Andhra Pradesh', desc: 'Port access and coastal trade operations', icon: '📍' },
    { name: 'Chhattisgarh', desc: 'Corporate headquarters and operations hub', icon: '🏢' },
    { name: 'Odisha', desc: 'Mining and sourcing operations', icon: '⛏️' },
    { name: 'Jharkhand', desc: 'Coal and mineral sourcing base', icon: '🏗️' },
  ]

  return (
    <>
      <PageHero
        title="Global Presence"
        subtitle="Connecting India's carbon resources with the world's industrial markets"
        breadcrumb="Global Presence"
        bgImage="/images/sec_aluminium.webp"
      />

      {/* Global Trade */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="global-grid">
            <div className="global-map reveal">
              <img src="/images/connecting-world.jpg" alt="Global Trade Map" style={{ width: "100%", height: "auto", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }} />
            </div>

            <div className="global-info reveal reveal-delay-2">
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '16px' }}>Connecting Carbon to the World</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '16px', fontSize: '1.02rem' }}>
                Greenliving Group facilitates global trade across multiple continents. We are in business with
                <strong style={{ color: 'var(--green-600)' }}> Russia, China</strong>, and certain regional economies of
                <strong style={{ color: 'var(--green-600)' }}> South East Asia & the MENA region</strong>.
              </p>

              <div className="trade-regions" style={{ marginTop: '24px' }}>
                {regions.map((r, i) => (
                  <div className="region-tag" key={i}>
                    <span className="dot"></span>
                    {r.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* India Presence */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label reveal">Our Presence in India</span>
            <h2 className="section-title reveal reveal-delay-1">Establishments Across 4 States</h2>
          </div>

          <div className="states-grid">
            {states.map((state, i) => (
              <div className={`state-card reveal reveal-delay-${i + 1}`} key={i}>
                <div className="state-card-icon">{state.icon}</div>
                <h3>{state.name}</h3>
                <p>{state.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
