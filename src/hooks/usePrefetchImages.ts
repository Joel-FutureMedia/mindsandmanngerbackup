import { useEffect } from 'react'

export function usePrefetchImages(urls: string[]) {
  useEffect(() => {
    if (!urls.length) return

    const links: HTMLLinkElement[] = []

    const prefetch = () => {
      urls.forEach((href) => {
        if (!href || links.some((link) => link.href === href)) return

        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.as = 'image'
        link.href = href
        document.head.appendChild(link)
        links.push(link)
      })
    }

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(prefetch, { timeout: 2000 })
      return () => {
        window.cancelIdleCallback(id)
        links.forEach((link) => link.remove())
      }
    }

    const timer = setTimeout(prefetch, 300)
    return () => {
      clearTimeout(timer)
      links.forEach((link) => link.remove())
    }
  }, [urls])
}

export function usePreloadImages(urls: string[]) {
  useEffect(() => {
    if (!urls.length) return

    const links: HTMLLinkElement[] = urls.map((href) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = href
      document.head.appendChild(link)
      return link
    })

    return () => {
      links.forEach((link) => link.remove())
    }
  }, [urls])
}
