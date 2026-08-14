export default function WaveDivider({ fill = '#ffffff', style = {}, className = '' }) {
  return (
    <div 
      className={`wave-divider ${className}`}
      style={{
        position: 'absolute',
        bottom: -1, /* -1px to prevent sub-pixel rendering gaps */
        left: 0,
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
        ...style
      }}
    >
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        style={{
          position: 'relative',
          display: 'block',
          width: 'calc(100% + 1.3px)',
          height: '100px', // standard height, can be overridden
        }}
      >
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.34,192.4,99.88,236.4,85.24,278.43,71.21,321.39,56.44Z" 
          style={{ fill: fill }}
        ></path>
      </svg>
    </div>
  )
}
