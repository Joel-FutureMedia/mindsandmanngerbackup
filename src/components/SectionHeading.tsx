import type { ReactNode } from 'react'

interface SectionHeadingProps {
  number: string
  title: string
  className?: string
  children?: ReactNode
}

export default function SectionHeading({ number, title, className = '', children }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${className}`}>
      <span className="CharOverride-1">{number}</span>
      <span className="CharOverride-13">{title}</span>
      {children}
    </div>
  )
}
