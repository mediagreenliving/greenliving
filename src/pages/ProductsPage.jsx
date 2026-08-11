import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

  { name: 'Anthracite Coal', category: 'coal', image: '/images/prod_coal.png', filter: 'none', desc: 'Ultra-high carbon content coal for industrial furnaces. Prized for low volatile matter and superior heat output.' },
  { name: 'PCI Coal', category: 'coal', image: '/images/prod_coal.png', filter: 'brightness(1.1)', desc: 'Pulverized coal injection grade for blast furnace optimization, reducing coke consumption and improving efficiency.' },
  { name: 'Thermal Coal', category: 'coal', image: '/images/prod_coal.png', filter: 'contrast(1.2)', desc: 'Energy-grade coal for power generation, cement kilns, and industrial heating applications.' },
  
  { name: 'Activated Carbon', category: 'carbon', image: '/images/prod_carbon.png', filter: 'none', desc: 'Highly porous carbon with exceptional adsorption properties for water purification, air treatment, and chemical processing.' },
  { name: 'Carburiser', category: 'carbon', image: '/images/prod_carbon.png', filter: 'brightness(1.15)', desc: 'High-carbon additive for steelmaking and foundry applications, ensuring precise carbon content in final products.' },
  { name: 'Carbon Raiser', category: 'carbon', image: '/images/prod_carbon.png', filter: 'contrast(1.15)', desc: 'Premium carbon material for increasing carbon content in molten steel and iron, available in multiple grades.' },
  
  { name: 'Carbon Anode', category: 'carbon', image: '/images/prod_anode.png', filter: 'none', desc: 'Pre-baked carbon anodes for the Hall-Héroult process in aluminium smelting. Critical for electrolysis efficiency.' },
  { name: 'Carbon Blocks', category: 'carbon', image: '/images/prod_anode.png', filter: 'brightness(0.9)', desc: 'Dense, high-strength carbon blocks for blast furnace hearth lining, providing thermal and chemical resistance.' },
  
  { name: 'CPC', category: 'coke', image: '/images/prod_coke.png', filter: 'none', desc: 'Calcined Petroleum Coke — a premium carbon source for anode manufacturing in the aluminium industry.' },
  { name: 'Met Coke', category: 'coke', image: '/images/prod_coke.png', filter: 'brightness(1.1)', desc: 'Metallurgical coke for blast furnace operations, providing fuel and structural support during iron smelting.' },
  { name: 'Coke Fines', category: 'coke', image: '/images/prod_coke.png', filter: 'contrast(1.1)', desc: 'Fine-grade coke particles used as fuel in sintering plants, cement kilns, and various industrial processes.' },
  { name: 'Pet Coke', category: 'coke', image: '/images/prod_coke.png', filter: 'brightness(0.95)', desc: 'Petroleum coke for cement, power, and steel industries. Available in fuel-grade and anode-grade specifications.' },
  
  { name: 'Tyre Carbon', category: 'specialty', image: '/images/prod_carbon.png', filter: 'none', desc: 'Recovered carbon black from tyre pyrolysis — a sustainable, cost-effective carbon source for various applications.' },
  { name: 'Dolochar', category: 'specialty', image: '/images/prod_coke.png', filter: 'brightness(1.2)', desc: 'By-product from sponge iron production, used as fuel in power plants and cement industry.' },
]

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'coal', label: 'Coals' },
  { id: 'coke', label: 'Coke Products' },
  { id: 'carbon', label: 'Carbon Products' },
  { id: 'specialty', label: 'Specialty' },
]

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === activeFilter)

  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="A comprehensive range of 15+ carbon and coal-based products for every industrial need"
        breadcrumb="Products"
        bgImage="/images/prod_coal.png"
      />

      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="product-filters reveal">
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
                <div className="product-image" style={{ padding: 0, overflow: 'hidden' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: product.filter }} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                  <span className="product-tag">{product.category}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="specialty-banner reveal" style={{ marginTop: '48px' }}>
            <div className="banner-icon">🎯</div>
            <div>
              <h3>Customised Solutions Available</h3>
              <p>We also offer specialised carbon products tailored to your exact industrial specifications. Contact us for bespoke formulations.</p>
            </div>
            <Link to="/contact" className="btn-primary" style={{ flexShrink: 0 }}>
              Enquire Now →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
