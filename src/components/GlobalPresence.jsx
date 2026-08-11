export default function GlobalPresence() {
  const regions = [
    { name: 'Russia', dot: '🔴' },
    { name: 'China', dot: '🔴' },
    { name: 'South East Asia', dot: '🔴' },
    { name: 'MENA Region', dot: '🔴' },
  ]

  const states = [
    { name: 'Andhra Pradesh', icon: '📍' },
    { name: 'Chhattisgarh', icon: '📍' },
    { name: 'Odisha', icon: '📍' },
    { name: 'Jharkhand', icon: '📍' },
  ]

  return (
    <section className="section global" id="global">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label reveal">Global Presence</span>
          <h2 className="section-title reveal reveal-delay-1">Facilitating Global Trade</h2>
          <p className="section-subtitle reveal reveal-delay-2" style={{ margin: '0 auto' }}>
            Connecting India's carbon resources with the world's industrial markets
          </p>
        </div>

        <div className="global-grid">
          {/* World Map SVG */}
          <div className="global-map reveal reveal-delay-3">
            <svg viewBox="0 0 800 400" className="map-svg" xmlns="http://www.w3.org/2000/svg">
              {/* Simplified world map outlines */}
              <defs>
                <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2f4f0f" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#1a2618" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Continents - simplified paths */}
              {/* North America */}
              <path d="M 80,60 Q 120,40 180,50 Q 200,70 220,100 Q 200,140 180,160 Q 140,170 100,150 Q 70,120 80,60Z" fill="url(#mapGrad)" stroke="#4a7a1a" strokeWidth="0.8" opacity="0.7" />
              {/* South America */}
              <path d="M 180,200 Q 200,180 220,190 Q 240,230 230,280 Q 210,320 190,330 Q 170,300 165,260 Q 170,220 180,200Z" fill="url(#mapGrad)" stroke="#4a7a1a" strokeWidth="0.8" opacity="0.7" />
              {/* Europe */}
              <path d="M 360,50 Q 400,40 430,55 Q 440,80 430,100 Q 410,110 380,105 Q 350,90 360,50Z" fill="url(#mapGrad)" stroke="#4a7a1a" strokeWidth="0.8" opacity="0.7" />
              {/* Africa */}
              <path d="M 380,130 Q 420,120 440,140 Q 450,190 440,240 Q 420,280 400,290 Q 380,270 370,230 Q 365,180 380,130Z" fill="url(#mapGrad)" stroke="#4a7a1a" strokeWidth="0.8" opacity="0.7" />
              {/* Russia / Northern Asia */}
              <path d="M 440,30 Q 520,20 620,35 Q 680,50 700,70 Q 690,90 650,95 Q 580,85 500,80 Q 450,70 440,30Z" fill="url(#mapGrad)" stroke="#4a7a1a" strokeWidth="0.8" opacity="0.7" />
              {/* India / South Asia */}
              <path d="M 510,120 Q 540,110 560,125 Q 565,160 555,190 Q 535,200 520,195 Q 505,170 510,120Z" fill="url(#mapGrad)" stroke="#6abf3b" strokeWidth="1.5" opacity="0.9" />
              {/* China / East Asia */}
              <path d="M 580,80 Q 640,75 680,95 Q 690,120 670,140 Q 640,150 600,140 Q 575,120 580,80Z" fill="url(#mapGrad)" stroke="#4a7a1a" strokeWidth="0.8" opacity="0.7" />
              {/* SE Asia */}
              <path d="M 600,160 Q 640,155 670,170 Q 680,190 660,210 Q 630,215 610,200 Q 595,180 600,160Z" fill="url(#mapGrad)" stroke="#4a7a1a" strokeWidth="0.8" opacity="0.7" />
              {/* Australia */}
              <path d="M 640,260 Q 690,250 720,270 Q 730,300 710,320 Q 670,325 650,310 Q 635,290 640,260Z" fill="url(#mapGrad)" stroke="#4a7a1a" strokeWidth="0.8" opacity="0.5" />
              {/* Middle East / MENA */}
              <path d="M 460,110 Q 500,100 510,120 Q 505,145 490,150 Q 470,145 460,130Z" fill="url(#mapGrad)" stroke="#4a7a1a" strokeWidth="0.8" opacity="0.7" />

              {/* India marker (home base) - large glowing */}
              <circle cx="535" cy="155" r="6" className="map-dot-lg" />
              <circle cx="535" cy="155" r="12" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.3">
                <animate attributeName="r" from="6" to="18" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Russia trade dot */}
              <circle cx="560" cy="45" r="4" className="map-dot" />
              {/* China trade dot */}
              <circle cx="640" cy="110" r="4" className="map-dot" />
              {/* SE Asia trade dot */}
              <circle cx="635" cy="185" r="4" className="map-dot" />
              {/* MENA trade dot */}
              <circle cx="480" cy="125" r="4" className="map-dot" />

              {/* Trade route lines from India */}
              <line x1="535" y1="155" x2="560" y2="45" stroke="#6abf3b" strokeWidth="0.8" strokeDasharray="4,4" opacity="0.4">
                <animate attributeName="stroke-dashoffset" from="0" to="-8" dur="1s" repeatCount="indefinite" />
              </line>
              <line x1="535" y1="155" x2="640" y2="110" stroke="#6abf3b" strokeWidth="0.8" strokeDasharray="4,4" opacity="0.4">
                <animate attributeName="stroke-dashoffset" from="0" to="-8" dur="1s" repeatCount="indefinite" />
              </line>
              <line x1="535" y1="155" x2="635" y2="185" stroke="#6abf3b" strokeWidth="0.8" strokeDasharray="4,4" opacity="0.4">
                <animate attributeName="stroke-dashoffset" from="0" to="-8" dur="1s" repeatCount="indefinite" />
              </line>
              <line x1="535" y1="155" x2="480" y2="125" stroke="#6abf3b" strokeWidth="0.8" strokeDasharray="4,4" opacity="0.4">
                <animate attributeName="stroke-dashoffset" from="0" to="-8" dur="1s" repeatCount="indefinite" />
              </line>

              {/* Labels */}
              <text x="535" y="175" textAnchor="middle" fill="#c9a84c" fontSize="9" fontFamily="Outfit" fontWeight="700">INDIA (HQ)</text>
              <text x="560" y="38" textAnchor="middle" fill="#8fd665" fontSize="8" fontFamily="Inter" fontWeight="500">Russia</text>
              <text x="640" y="105" textAnchor="middle" fill="#8fd665" fontSize="8" fontFamily="Inter" fontWeight="500">China</text>
              <text x="635" y="200" textAnchor="middle" fill="#8fd665" fontSize="8" fontFamily="Inter" fontWeight="500">SE Asia</text>
              <text x="480" y="118" textAnchor="middle" fill="#8fd665" fontSize="8" fontFamily="Inter" fontWeight="500">MENA</text>
            </svg>
          </div>

          <div className="global-info reveal reveal-delay-4">
            <h3>Connecting Carbon to the World</h3>
            <p>
              Greenliving Group facilitates global trade across multiple continents. We are in business with
              <strong style={{ color: 'var(--accent)' }}> Russia, China</strong>, and certain regional economies of
              <strong style={{ color: 'var(--accent)' }}> South East Asia & the MENA region</strong>.
            </p>
            <p>
              Our dedicated logistics wing and established trade relationships ensure seamless international
              supply chain operations with reliability and competitive pricing.
            </p>

            <div className="trade-regions">
              {regions.map((region, i) => (
                <div className="region-tag" key={i}>
                  <span className="dot"></span>
                  {region.name}
                </div>
              ))}
            </div>

            <h3 style={{ marginTop: '40px' }}>Our Presence in India</h3>
            <p>Establishments across 4 key industrial states:</p>

            <div className="presence-cards">
              {states.map((state, i) => (
                <div className="presence-card" key={i}>
                  <div className="state-icon">{state.icon}</div>
                  <div className="state-name">{state.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
