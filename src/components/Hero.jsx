import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.4
        this.speedY = (Math.random() - 0.5) * 0.4
        this.opacity = Math.random() * 0.4 + 0.1
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(106, 191, 59, ${this.opacity})`
        ctx.fill()
      }
    }

    const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 20000))
    for (let i = 0; i < count; i++) {
      particles.push(new Particle())
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(74, 122, 26, ${0.12 * (1 - dist / 140)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      drawConnections()
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="hero" id="hero">
      {/* Background image */}
      <div className="hero-bg-image"></div>

      {/* Particle overlay */}
      <div className="hero-bg">
        <canvas ref={canvasRef}></canvas>
      </div>
      <div className="hero-gradient"></div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot"></span>
          Strategic Carbon Solutions Since Inception
        </div>

        <h1 className="hero-title">
          <span className="green">GREENLIVING</span><br />
          GROUP
        </h1>

        <p className="hero-tagline">
          Powering Industries with <strong>Premium Carbon Products</strong>
        </p>

        <div className="hero-buttons">
          <Link to="/products" className="btn-primary">
            Explore Products →
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">15+</div>
            <div className="hero-stat-label">Products</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">9+</div>
            <div className="hero-stat-label">Sectors</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">4</div>
            <div className="hero-stat-label">States</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">10+</div>
            <div className="hero-stat-label">Partners</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-indicator-mouse">
          <div className="scroll-indicator-dot"></div>
        </div>
      </div>
    </section>
  )
}
