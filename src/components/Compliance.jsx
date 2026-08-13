export default function Compliance() {
  const certifications = [
    { icon: '🏛️', name: 'MoEFCC', desc: 'Ministry of Environment, Forest & Climate Change' },
    { icon: '🌿', name: 'CPCB', desc: 'Central Pollution Control Board' },
    { icon: '📋', name: 'DGFT', desc: 'Directorate General of Foreign Trade' },
    { icon: '🏗️', name: 'State PCBs', desc: 'State Pollution Control Boards' },
    { icon: '🔬', name: 'Mines Dept', desc: 'Department of Mines & Minerals' },
    { icon: '📦', name: 'State Govts', desc: 'Relevant State Government Departments' },
  ]

  return (
    <section className="section compliance" id="compliance">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label reveal">Trust & Compliance</span>
          <h2 className="section-title reveal reveal-delay-1">Certified & Compliant</h2>
          <p className="section-subtitle reveal reveal-delay-2" style={{ margin: '0 auto' }}>
            Our activities are certified by the following departments, ensuring full regulatory compliance
          </p>
        </div>

        <div className="compliance-grid">
          <div className="compliance-col reveal reveal-delay-3">
            <h3>🛡️ Our Certifications</h3>
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

          <div className="compliance-col reveal reveal-delay-4">
            <h3>🚚 Our Supply Chain</h3>
            <div className="supply-chain-card">
              <div className="supply-icon">🚛</div>
              <h4>Dedicated & Certified Captive Logistics Wing</h4>
              <p>
                We operate our own certified logistics fleet, ensuring end-to-end control over
                the supply chain - from sourcing and quality control to last-mile delivery. Our
                captive logistics capability sets us apart from competitors who rely on third-party
                transporters.
              </p>
              <div className="supply-quote">
                "We don't just supply carbon. We secure your supply chain."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
