import { useState } from 'react'

const allProducts = [
  { name: 'Anthracite Coal', category: 'coal', emoji: '⛏️', desc: 'Ultra-high carbon content coal for industrial furnaces' },
  { name: 'PCI Coal', category: 'coal', emoji: '🔥', desc: 'Pulverized coal injection for blast furnace optimization' },
  { name: 'Thermal Coal', category: 'coal', emoji: '🌡️', desc: 'Energy-grade coal for power generation and heating' },
  { name: 'Activated Carbon', category: 'carbon', emoji: '🧫', desc: 'Highly porous carbon for filtration and purification' },
  { name: 'CPC', category: 'coke', emoji: '🪨', desc: 'Calcined Petroleum Coke for anode manufacturing' },
  { name: 'Met Coke', category: 'coke', emoji: '🧱', desc: 'Metallurgical coke for iron and steel smelting' },
  { name: 'Coke Fines', category: 'coke', emoji: '🌑', desc: 'Fine-grade coke particles for various applications' },
  { name: 'Carburiser', category: 'carbon', emoji: '⚗️', desc: 'Carbon additive for steelmaking and foundry' },
  { name: 'Carbon Raiser', category: 'carbon', emoji: '📈', desc: 'Premium carbon for increasing carbon content in steel' },
  { name: 'Carbon Anode', category: 'carbon', emoji: '🔋', desc: 'Pre-baked anodes for aluminium smelting' },
  { name: 'Carbon Blocks', category: 'carbon', emoji: '🧊', desc: 'Dense carbon blocks for furnace lining' },
  { name: 'Tyre Carbon', category: 'carbon', emoji: '🛞', desc: 'Recovered carbon from tyre pyrolysis' },
  { name: 'Dolochar', category: 'specialty', emoji: '💎', desc: 'By-product from sponge iron production' },
  { name: 'Pet Coke', category: 'coke', emoji: '⬛', desc: 'Petroleum coke for cement and power industries' },
]

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'coal', label: 'Coals' },
  { id: 'coke', label: 'Coke Products' },
  { id: 'carbon', label: 'Carbon Products' },
  { id: 'specialty', label: 'Specialty' },
]

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === activeFilter)

  return (
    <section className="section products light-section" id="products">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label reveal">What We Deal In</span>
          <h2 className="section-title reveal reveal-delay-1">Our Product Portfolio</h2>
          <p className="section-subtitle reveal reveal-delay-2" style={{ margin: '0 auto' }}>
            A comprehensive range of carbon and coal-based products for every industrial need
          </p>
        </div>

        <div className="product-filters reveal reveal-delay-3">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn${activeFilter === cat.id ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filtered.map((product, i) => (
            <div className="product-card reveal" key={product.name} style={{ transitionDelay: `${i * 0.05}s` }}>
              <div className="product-image">
                {product.emoji}
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <span className="product-tag">{product.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="specialty-banner reveal">
          <div className="banner-icon">🎯</div>
          <div>
            <h3>Customised Solutions Available</h3>
            <p>We also offer specialised carbon products tailored to your exact industrial specifications. Contact us for bespoke formulations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
