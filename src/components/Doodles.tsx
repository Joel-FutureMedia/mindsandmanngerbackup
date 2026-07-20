interface DoodleProps {
  color?: string
  size?: number
  className?: string
}

export function Star({ color = '#f5c842', size = 24, className = '' }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`mm-star-animate ${className}`.trim()}
      aria-hidden="true"
    >
      <path
        d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z"
        fill={color}
        stroke={color}
        strokeWidth="1"
      />
    </svg>
  )
}

export function StarBurst({ color = '#2a2a2a', size = 32, className = '' }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={`mm-star-animate ${className}`.trim()}
      aria-hidden="true"
    >
      <path
        d="M16 2L18 12L28 14L18 16L16 26L14 16L4 14L14 12L16 2Z"
        fill={color}
      />
      <path d="M16 6L17 11L22 12L17 13L16 18L15 13L10 12L15 11L16 6Z" fill={color} opacity="0.5" />
    </svg>
  )
}

export function ArrowLoop({ color = '#d9b46e', size = 56, className = '' }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size * 0.55}
      viewBox="0 0 80 44"
      fill="none"
      className={`mm-arrow-animate ${className}`.trim()}
      aria-hidden="true"
    >
      <path
        d="M4 30C20 8 45 6 72 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M64 12L74 18L66 26"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function ArrowRight({ color = '#1e4bbd', size = 40, className = '' }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 30"
      fill="none"
      className={`mm-arrow-animate ${className}`.trim()}
      aria-hidden="true"
    >
      <path
        d="M2 15C10 12 20 10 35 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30 8L42 12L30 16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function ArrowDown({ color = '#1e4bbd', size = 50, className = '' }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 60"
      fill="none"
      className={`mm-arrow-animate ${className}`.trim()}
      aria-hidden="true"
    >
      <path
        d="M20 5C18 20 22 35 20 50"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M12 42L20 52L28 42"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function Squiggle({ color = '#1e4bbd', size = 120 }: DoodleProps) {
  return (
    <svg width={size} height={size * 0.4} viewBox="0 0 200 80" fill="none">
      <path
        d="M5 40C30 10 60 70 90 40C120 10 150 60 195 35"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function CoralStar({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={`mm-star-animate ${className}`.trim()}
      aria-hidden="true"
    >
      <path
        d="M20 2L22 14L34 16L22 18L20 30L18 18L6 16L18 14L20 2Z"
        fill="#e85d3f"
      />
      <circle cx="20" cy="16" r="3" fill="#e85d3f" opacity="0.6" />
    </svg>
  )
}
