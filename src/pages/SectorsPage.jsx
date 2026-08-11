import PageHero from '../components/PageHero'

export default function SectorsPage() {
  const sectors = [
    {
      image: '/images/sec_nuclear.png', title: 'Nuclear Energy',
      desc: 'We supply specialised carbon and graphite products essential for nuclear reactor components, moderators, and energy infrastructure. Our materials meet the exacting purity and performance standards demanded by India\'s atomic energy sector.',
      keyProducts: ['High-purity Graphite', 'Carbon Blocks', 'Specialty Carbon']
    },
    {
      image: '/images/sec_defense.png', title: 'Defense Sector',
      desc: 'Strategic carbon materials for defense applications including vehicle armoring, aerospace components, and military-grade manufacturing. Trusted by the Indian Navy and defense establishments.',
      keyProducts: ['Carbon Composites', 'Specialty Carbon', 'Activated Carbon']
    },
    {
      image: '/images/sec_auto.png', title: 'Auto Components',
      desc: 'Precision carbon solutions for automotive manufacturing, from brake components and gaskets to engine parts and carbon fiber composites for next-generation vehicles.',
      keyProducts: ['Carbon Paste', 'Carburiser', 'Carbon Blocks']
    },
    {
      image: '/images/sec_foundry.png', title: 'Foundry',
      desc: 'High-grade carbon additives for metal casting and foundry operations. Our carburisers and carbon raisers ensure optimal carbon content and superior casting quality.',
      keyProducts: ['Carburiser', 'Carbon Raiser', 'Met Coke']
    },
    {
      image: '/images/sec_steel.png', title: 'Iron & Steel',
      desc: 'The backbone of our business: essential carbon inputs for steelmaking. From PCI coal for blast furnace injection to met coke for smelting, we power India\'s steel industry.',
      keyProducts: ['PCI Coal', 'Met Coke', 'Anthracite Coal', 'Coke Fines']
    },
    {
      image: '/images/sec_aluminium.png', title: 'Aluminium Sector',
      desc: 'Pre-baked carbon anodes, CPC, and carbon paste for aluminium smelting operations. Serving major aluminium producers like NALCO, Hindalco, Vedanta, and Balco.',
      keyProducts: ['Carbon Anode', 'CPC', 'Carbon Paste']
    },
    {
      image: '/images/sec_foundry.png', title: 'Carbon Paste',
      desc: 'Specialised carbon paste manufacturing for electrode production in ferroalloy, calcium carbide, and submerged arc furnace applications.',
      keyProducts: ['Electrode Paste', 'Carbon Paste', 'CPC']
    },
    {
      image: '/images/sec_water.png', title: 'Water Filtration',
      desc: 'Activated carbon products for municipal and industrial water purification systems. Our high-adsorption activated carbon removes contaminants, chlorine, and organic compounds.',
      keyProducts: ['Activated Carbon', 'Granular Activated Carbon']
    },
    {
      image: '/images/sec_glass.png', title: 'Glass Industry',
      desc: 'Carbon-based reducing agents and energy materials for glass production furnaces. Our products help maintain the precise temperatures required for high-quality glass manufacturing.',
      keyProducts: ['Pet Coke', 'Thermal Coal', 'Carbon Fines']
    },
  ]

  return (
    <>
      <PageHero
        title="Sector Experience"
        subtitle="Delivering mission-critical carbon solutions across India's most demanding industrial sectors"
        breadcrumb="Sectors"
      />

      <section className="section" style={{ background: 'var(--dark-800)' }}>
        <div className="container">
          <div className="sectors-detail-grid">
            {sectors.map((sector, i) => (
              <div className={`sector-detail-card reveal reveal-delay-${(i % 3) + 1}`} key={i} style={{ padding: 0 }}>
                <div className="sector-image" style={{ height: '300px', overflow: 'hidden' }}>
                  <img src={sector.image} alt={sector.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '32px' }}>
                  <div className="sector-detail-header">
                    <h3 style={{ margin: 0, fontSize: '1.6rem' }}>{sector.title}</h3>
                  </div>
                  <p className="sector-detail-desc">{sector.desc}</p>
                  <div className="sector-products">
                    <span className="sector-products-label">Key Products:</span>
                    <div className="sector-product-tags">
                      {sector.keyProducts.map((p, j) => (
                        <span className="product-tag" key={j}>{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
