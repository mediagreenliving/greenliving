import { Link } from 'react-router-dom'

export default function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="page-hero">
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
