import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import WaveDivider from './WaveDivider'

const productsData = [
  { name: 'Anthracite Coal', category: 'COAL', image: 'https://images.unsplash.com/photo-1587309995543-c07dd865b458?auto=format&fit=crop&q=80&w=400' },
  { name: 'CPC', category: 'COAL', image: 'https://images.unsplash.com/photo-1621501103258-3e1346ce2361?auto=format&fit=crop&q=80&w=400' },
  { name: 'Met Coke', category: 'COAL', image: 'https://images.unsplash.com/photo-1590501192534-11a511ff3e41?auto=format&fit=crop&q=80&w=400' },
  { name: 'Carbon Anode', category: 'COAL', image: 'https://images.unsplash.com/photo-1558222218-b7b54eede3f3?auto=format&fit=crop&q=80&w=400' },
  { name: 'Pet Coke', category: 'COAL', image: 'https://images.unsplash.com/photo-1616422312217-1f9e0787a7d4?auto=format&fit=crop&q=80&w=400' },
]

export default function Products() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="section products" id="products" style={{ backgroundColor: '#e2efd9', paddingTop: '160px', paddingBottom: '200px', position: 'relative' }}>
      <div className="container">
        
        {/* Two-Column Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <span className="section-label reveal" style={{ backgroundColor: 'var(--green-200)', color: 'var(--bottle-green)', border: 'none', fontWeight: '800' }}>OUR PRODUCTS</span>
            <h2 className="section-title reveal reveal-delay-1" style={{ color: 'var(--dark-900)', marginBottom: 0, marginTop: '16px', fontSize: '3rem' }}>What We Deal In</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <p className="section-subtitle reveal reveal-delay-2" style={{ margin: '0', color: 'var(--dark-600)', maxWidth: '300px', fontSize: '1rem', fontWeight: '600' }}>
              High quality carbon and coal-based products tailored for your industrial needs.
            </p>
            <button className="btn-primary" style={{ backgroundColor: 'var(--jade-green)' }}>
              View All Products &rarr;
            </button>
          </div>
        </div>

        {/* Products Carousel */}
        <div style={{ position: 'relative' }}>
          {/* Controls */}
          <button onClick={() => scroll('left')} style={{ position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.05)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <ChevronLeft size={24} color="var(--dark-900)" />
          </button>
          
          <button onClick={() => scroll('right')} style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.05)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <ChevronRight size={24} color="var(--dark-900)" />
          </button>

          {/* Scrolling Container */}
          <div 
            ref={scrollRef}
            style={{ 
              display: 'flex', 
              gap: '24px', 
              overflowX: 'auto', 
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE and Edge
              padding: '20px 0'
            }}
            className="hide-scroll"
          >
            {productsData.map((product, i) => (
              <div 
                key={i} 
                style={{ 
                  flex: '0 0 auto', 
                  width: '320px', 
                  backgroundColor: '#ffffff', 
                  borderRadius: '24px', 
                  padding: '24px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ backgroundColor: '#f0f0f0', borderRadius: '16px', height: '200px', marginBottom: '24px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--dark-900)', marginBottom: '12px' }}>{product.name}</h3>
                <span style={{ display: 'inline-block', backgroundColor: '#e2efd9', color: 'var(--bottle-green)', padding: '6px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase' }}>
                  {product.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <WaveDivider fill="var(--bg-secondary)" />
    </section>
  )
}
