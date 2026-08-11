import PageHero from '../components/PageHero'

export default function AssociatesPage() {
  const associates = [
    { name: 'Indian Navy', type: 'Defense — Government of India', icon: '⚓', desc: 'Supplying strategic carbon materials for naval defense infrastructure and vessel manufacturing.' },
    { name: 'Government of India', type: 'Government', icon: '🏛️', desc: 'Recognized and certified supplier under various government departments and public sector enterprises.' },
    { name: 'Department of Atomic Energy (DAE)', type: 'Nuclear — Government of India', icon: '⚛️', desc: 'Providing high-purity carbon and graphite products for India\'s nuclear energy programme.' },
    { name: 'Indian Oil Corporation', type: 'Energy — Maharatna PSU', icon: '🛢️', desc: 'Partnering with India\'s largest oil company for petroleum coke and carbon supply.' },
    { name: 'NALCO', type: 'Aluminium — Navratna PSU', icon: '🏭', desc: 'Supplying CPC, carbon anodes, and carbon paste for aluminium smelting operations at NALCO.' },
    { name: 'TATA Group', type: 'Conglomerate', icon: '🏢', desc: 'Trusted carbon solutions partner across multiple TATA group companies in steel and metals.' },
    { name: 'Hindalco Industries', type: 'Metals & Mining — Aditya Birla Group', icon: '⛏️', desc: 'Premium carbon anode and CPC supply for one of India\'s largest aluminium producers.' },
    { name: 'Vedanta Limited', type: 'Natural Resources', icon: '🌐', desc: 'Supplying carbon products for Vedanta\'s aluminium and zinc smelting operations across India.' },
    { name: 'BALCO', type: 'Aluminium — Vedanta Group', icon: '🔩', desc: 'Dedicated carbon supply partnership for Bharat Aluminium Company\'s smelter operations.' },
  ]

  const certifications = [
    { icon: '🏛️', name: 'MoEFCC', desc: 'Ministry of Environment, Forest & Climate Change' },
    { icon: '🌿', name: 'CPCB', desc: 'Central Pollution Control Board' },
    { icon: '📋', name: 'DGFT', desc: 'Directorate General of Foreign Trade' },
    { icon: '🏗️', name: 'State PCBs', desc: 'State Pollution Control Boards' },
    { icon: '🔬', name: 'Mines Dept', desc: 'Department of Mines & Minerals' },
    { icon: '📦', name: 'State Govts', desc: 'Relevant State Government Departments' },
  ]

  return (
    <>
      <PageHero
        title="Our Associates & Partners"
        subtitle="Trusted by India's leading government, defense, and private sector organisations"
        breadcrumb="Associates"
        bgImage="/images/sec_foundry.png"
      />

      {/* Associates Grid */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label reveal">Trusted Partners</span>
            <h2 className="section-title reveal reveal-delay-1">Who We Work With</h2>
          </div>

          <div className="associates-detail-grid">
            {associates.map((item, i) => (
              <div className={`associate-detail-card reveal reveal-delay-${(i % 3) + 1}`} key={i}>
                <div className="associate-detail-icon">{item.icon}</div>
                <div className="associate-detail-info">
                  <h3>{item.name}</h3>
                  <span className="associate-detail-type">{item.type}</span>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Supply Chain */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label reveal">Trust & Compliance</span>
            <h2 className="section-title reveal reveal-delay-1">Certified & Compliant</h2>
            <p className="section-subtitle reveal reveal-delay-2" style={{ margin: '0 auto' }}>
              Our activities are certified by the following departments
            </p>
          </div>

          <div className="compliance-grid">
            <div className="reveal">
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                🛡️ Our Certifications
              </h3>
              <div className="cert-grid">
                {certifications.map((cert, i) => (
                  <div className="cert-badge" key={i}>
                    <div className="cert-icon">{cert.icon}</div>
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-desc">{cert.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                🚚 Our Supply Chain
              </h3>
              <div className="supply-chain-card">
                <div className="supply-icon">🚛</div>
                <h4>Dedicated & Certified Captive Logistics Wing</h4>
                <p>
                  We operate our own certified logistics fleet, ensuring end-to-end control over
                  the supply chain — from sourcing and quality control to last-mile delivery.
                </p>
                <div className="supply-quote">
                  "We don't just supply carbon. We secure your supply chain."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
