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
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text reveal">
            <span className="section-label">About Us</span>
            <h2 className="section-title">India's Premier Strategic Carbon Solutions Provider</h2>
            <p>
              <strong>Greenliving Group</strong> is a leading supplier of high-quality carbon and coal-based products,
              serving critical industries across India and international markets. With establishments in
              <strong> 4 states</strong> — Andhra Pradesh, Chhattisgarh, Odisha, and Jharkhand — we have built
              an unrivalled supply chain that ensures consistent quality and timely delivery.
            </p>
            <p>
              Our expertise spans from sourcing raw carbon materials to delivering precision-engineered products
              that meet the exacting standards of the nuclear energy, defense, steel, and aluminium sectors.
              We are committed to sustainable practices and responsible sourcing while driving industrial growth.
            </p>
            <div className="about-highlight">
              "We don't just supply carbon. We secure your supply chain."
            </div>
          </div>

          <div className="reveal reveal-delay-3">
            <div className="hex-grid">
              {hexItems.map((item, i) => (
                <div className={`hex-item${i === 0 ? '' : ''}`} key={i}>
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
  )
}
