import WaveDivider from './WaveDivider'
import { Zap, Shield, Flame, Box, Factory, Droplets } from 'lucide-react'

export default function Sectors() {
  const sectors = [
    { 
      icon: <Zap size={20} />, 
      title: 'Nuclear Energy', 
      desc: 'Carbon products for nuclear reactors and energy infrastructure.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
    },
    { 
      icon: <Shield size={20} />, 
      title: 'Defence Sector', 
      desc: 'Strategic materials for defence applications and infrastructure.',
      image: 'https://images.unsplash.com/photo-1574360773950-7164939b56f8?auto=format&fit=crop&q=80&w=800'
    },
    { 
      icon: <Flame size={20} />, 
      title: 'Iron & Steel', 
      desc: 'Essential carbon inputs for steelmaking processes.',
      image: 'https://images.unsplash.com/photo-1506509536853-29a53127813c?auto=format&fit=crop&q=80&w=800'
    },
    { 
      icon: <Box size={20} />, 
      title: 'Aluminium Sector', 
      desc: 'Carbon anodes and materials for aluminium smelting.',
      image: 'https://images.unsplash.com/photo-1616422312217-1f9e0787a7d4?auto=format&fit=crop&q=80&w=800'
    },
    { 
      icon: <Factory size={20} />, 
      title: 'Foundry', 
      desc: 'High-quality carbon for metal casting and foundry operations.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
    },
    { 
      icon: <Droplets size={20} />, 
      title: 'Water Filtration', 
      desc: 'Activated carbon for water purification systems.',
      image: 'https://images.unsplash.com/photo-1541256942802-7a0914c6e93e?auto=format&fit=crop&q=80&w=800'
    },
  ]

  return (
    <section className="section sectors" id="sectors" style={{ backgroundColor: 'var(--bottle-green)', color: '#fff', paddingTop: '160px', paddingBottom: '200px', position: 'relative' }}>
      <div className="container">
        
        {/* Header - Two Column Layout */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ flex: '1 1 400px' }}>
            <span className="section-label reveal" style={{ backgroundColor: '#e2efd9', color: 'var(--bottle-green)', border: 'none', fontWeight: '800' }}>OUR SECTORS</span>
            <h2 className="section-title reveal reveal-delay-1" style={{ color: '#fff', marginBottom: 0, marginTop: '16px' }}>Industries We Empower</h2>
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <p className="section-subtitle reveal reveal-delay-2" style={{ margin: '0', color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '500px' }}>
              Delivering mission-critical carbon solutions across India's most demanding industrial sectors.
            </p>
          </div>
        </div>

        {/* Image Cards Grid */}
        <div className="sectors-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
          {sectors.map((sector, i) => (
            <div
              className={`sector-image-card reveal reveal-delay-${Math.min(i + 1, 8)}`}
              key={i}
              style={{ 
                position: 'relative',
                borderRadius: '24px', 
                overflow: 'hidden',
                height: '360px',
                cursor: 'pointer',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}
            >
              {/* Background Image */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  backgroundImage: `url(${sector.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.5s ease'
                }}
                className="sector-img-bg"
              />
              
              {/* Dark Gradient Overlay */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'linear-gradient(to top, rgba(0,25,15,0.95) 0%, rgba(0,25,15,0.4) 60%, transparent 100%)'
                }}
              />
              
              {/* Content */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 24px', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--jade-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    {sector.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0, color: '#fff' }}>{sector.title}</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, margin: 0 }}>{sector.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <button className="btn-primary" style={{ backgroundColor: 'var(--jade-green)' }}>
            View All Sectors <span style={{ marginLeft: '8px' }}>&rarr;</span>
          </button>
        </div>
      </div>

      <WaveDivider fill="var(--green-50)" />
    </section>
  )
}
