import { useState, useEffect } from 'react'

export default function FloatingActionButtons() {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="floating-actions">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918919553938"
        target="_blank"
        rel="noopener noreferrer"
        className="fab-btn fab-whatsapp"
        title="Chat with us on WhatsApp"
      >
        <img src="/images/whatsapp-color-svgrepo-com.svg" alt="WhatsApp" style={{ width: '32px', height: '32px' }} />
      </a>

      {/* Back to Top Button */}
      <button
        className={`fab-btn fab-top ${showTopBtn ? 'show' : ''}`}
        onClick={scrollToTop}
        title="Go to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  )
}
