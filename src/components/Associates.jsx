export default function Associates() {
  const associates = [
    { name: 'Indian Navy', type: 'Government', icon: '⚓' },
    { name: 'Government of India', type: 'Government', icon: '🏛️' },
    { name: 'DAE', type: 'Atomic Energy', icon: '⚛️' },
    { name: 'Indian Oil', type: 'Energy PSU', icon: '🛢️' },
    { name: 'NALCO', type: 'Aluminium PSU', icon: '🏭' },
    { name: 'TATA', type: 'Conglomerate', icon: '🏢' },
    { name: 'Hindalco', type: 'Metals & Mining', icon: '⛏️' },
    { name: 'Vedanta', type: 'Resources', icon: '🌐' },
    { name: 'Balco', type: 'Aluminium', icon: '🔩' },
  ]

  // Duplicate for seamless infinite scroll
  const doubled = [...associates, ...associates]

  return (
    <section className="section associates" id="associates">
      <div className="container">
        <div className="associates-header">
          <span className="section-label reveal">Our Associates</span>
          <h2 className="section-title reveal reveal-delay-1">Trusted By Industry Leaders</h2>
          <p className="section-subtitle reveal reveal-delay-2" style={{ margin: '0 auto' }}>
            Partnering with India's most prestigious government and private sector organisations
          </p>
        </div>
      </div>

      <div className="marquee-wrapper reveal reveal-delay-3">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <div className="associate-item" key={i}>
              <div className="associate-icon">{item.icon}</div>
              <div>
                <div className="associate-name">{item.name}</div>
                <div className="associate-type">{item.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
