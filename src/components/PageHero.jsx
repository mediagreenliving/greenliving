import { Link } from 'react-router-dom'

export default function PageHero({ title, subtitle, breadcrumb, bgImage }) {
  return (
    <section className="page-hero">
      {bgImage && (
        <div 
          style={{ 
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
            opacity: 0.35,
            filter: 'grayscale(0.5)'
          }}
        ></div>
      )}
      <div className="page-hero-bg"></div>
      <div className="page-hero-overlay"></div>
      <div className="container page-hero-content">
        <div className="page-hero-breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-current">{breadcrumb || title}</span>
        </div>
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  )
}
