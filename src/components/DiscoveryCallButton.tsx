import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { useDiscoveryCall } from './DiscoveryCallModal'

type DiscoveryCallButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export default function DiscoveryCallButton({
  children,
  onClick,
  type = 'button',
  ...props
}: DiscoveryCallButtonProps) {
  const { openDiscoveryCall } = useDiscoveryCall()

  return (
    <button
      type={type}
      {...props}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) openDiscoveryCall()
      }}
    >
      {children}
    </button>
  )
}
