import { useCallback, useEffect, useRef, useState } from 'react'
import {
  carousel1Getty,
  carousel1Vitaly,
  carousel1Waitress,
  carousel2Curated,
  carousel2Screenshot1,
  carousel2Screenshot2,
  carousel3Ivana,
  carousel3Iwaria,
  carousel3Screenshot,
} from '../assets/siteImages'
import SiteImage from './SiteImage'
import { usePrefetchImages, usePreloadImages } from '../hooks/usePrefetchImages'
import './HeroSlider.css'

const SLIDE_SETS = [
  {
    id: 'set-1',
    label: 'Gallery 1',
    images: [
      { src: carousel1Getty, alt: 'Hospitality team in service' },
      { src: carousel1Waitress, alt: 'Namibian waitress welcoming guests' },
      { src: carousel1Vitaly, alt: 'Warm guest interaction' },
    ],
  },
  {
    id: 'set-2',
    label: 'Gallery 2',
    images: [
      { src: carousel2Curated, alt: 'Curated hospitality experience' },
      { src: carousel2Screenshot1, alt: 'Service excellence in action' },
      { src: carousel2Screenshot2, alt: 'Team delivering memorable service' },
    ],
  },
  {
    id: 'set-3',
    label: 'Gallery 3',
    images: [
      { src: carousel3Ivana, alt: 'Authentic human connection' },
      { src: carousel3Iwaria, alt: 'African hospitality warmth' },
      { src: carousel3Screenshot, alt: 'Professional service moment' },
    ],
  },
] as const

const FIRST_SET_URLS = SLIDE_SETS[0].images.map((image) => image.src)
const PREFETCH_URLS = SLIDE_SETS.slice(1).flatMap((set) => set.images.map((image) => image.src))

const TRANSITION_MS = 360
const DWELL_MS = 1500
const INITIAL_DELAY_MS = 1500

type Direction = 'next' | 'prev'

export default function HeroSlider() {
  usePreloadImages(FIRST_SET_URLS)
  usePrefetchImages(PREFETCH_URLS)

  const [currentSet, setCurrentSet] = useState(0)
  const [pendingSet, setPendingSet] = useState<number | null>(null)
  const [direction, setDirection] = useState<Direction>('next')
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const currentSetRef = useRef(0)
  const isPausedRef = useRef(false)
  const isAnimatingRef = useRef(false)
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const autoPlayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const goToSetRef = useRef<(index: number, dir: Direction) => void>(() => {})
  const wasPausedRef = useRef(false)

  currentSetRef.current = currentSet
  isPausedRef.current = isPaused
  isAnimatingRef.current = isAnimating

  const clearAutoPlayTimer = useCallback(() => {
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current)
      autoPlayTimerRef.current = null
    }
  }, [])

  const queueNextFlip = useCallback(
    (delay: number) => {
      clearAutoPlayTimer()
      if (isPausedRef.current) return

      autoPlayTimerRef.current = setTimeout(() => {
        if (isPausedRef.current) return

        if (isAnimatingRef.current) {
          queueNextFlip(80)
          return
        }

        const next = (currentSetRef.current + 1) % SLIDE_SETS.length
        goToSetRef.current(next, 'next')
      }, delay)
    },
    [clearAutoPlayTimer],
  )

  const goToSet = useCallback(
    (index: number, dir: Direction) => {
      if (isAnimatingRef.current || index === currentSetRef.current) return

      clearAutoPlayTimer()
      setDirection(dir)
      setPendingSet(index)
      setIsAnimating(true)
      isAnimatingRef.current = true

      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current)
      transitionTimerRef.current = setTimeout(() => {
        setCurrentSet(index)
        currentSetRef.current = index
        setPendingSet(null)
        setIsAnimating(false)
        isAnimatingRef.current = false

        if (!isPausedRef.current) {
          queueNextFlip(DWELL_MS)
        }
      }, TRANSITION_MS)
    },
    [clearAutoPlayTimer, queueNextFlip],
  )

  goToSetRef.current = goToSet

  const goNext = useCallback(() => {
    const next = (currentSetRef.current + 1) % SLIDE_SETS.length
    goToSet(next, 'next')
  }, [goToSet])

  const goPrev = useCallback(() => {
    const prev = (currentSetRef.current - 1 + SLIDE_SETS.length) % SLIDE_SETS.length
    goToSet(prev, 'prev')
  }, [goToSet])

  useEffect(() => {
    queueNextFlip(INITIAL_DELAY_MS)
    return () => {
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current)
      clearAutoPlayTimer()
    }
  }, [clearAutoPlayTimer, queueNextFlip])

  useEffect(() => {
    if (isPaused) {
      wasPausedRef.current = true
      clearAutoPlayTimer()
      return
    }

    if (wasPausedRef.current) {
      wasPausedRef.current = false
      if (!isAnimatingRef.current) {
        queueNextFlip(DWELL_MS)
      }
    }
  }, [isPaused, clearAutoPlayTimer, queueNextFlip])

  return (
    <div
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsPaused(false)
        }
      }}
    >
      <div className="hero-slider__viewport">
        <div className="hero-slider__track">
          {[0, 1, 2].map((panelIndex) => {
            const current = SLIDE_SETS[currentSet].images[panelIndex]
            const next = pendingSet !== null ? SLIDE_SETS[pendingSet].images[panelIndex] : null

            return (
              <button
                key={panelIndex}
                type="button"
                className="hero-slider__panel"
                onClick={goNext}
                aria-label={`Show next gallery. Currently ${SLIDE_SETS[currentSet].label}, image ${panelIndex + 1}`}
              >
                <div className="hero-slider__flip">
                  {isAnimating && next ? (
                    <>
                      <div
                        className={`hero-slider__face hero-slider__face--out hero-slider__face--out-${direction}`}
                      >
                        <SiteImage
                          src={current.src}
                          alt={current.alt}
                          priority={currentSet === 0}
                        />
                      </div>
                      <div
                        className={`hero-slider__face hero-slider__face--in hero-slider__face--in-${direction}`}
                      >
                        <SiteImage src={next.src} alt={next.alt} />
                      </div>
                    </>
                  ) : (
                    <div className="hero-slider__face hero-slider__face--static">
                      <SiteImage
                        src={current.src}
                        alt={current.alt}
                        priority={currentSet === 0}
                      />
                    </div>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <button
        type="button"
        className="hero-slider__arrow hero-slider__arrow--prev"
        onClick={goPrev}
        aria-label="Previous gallery"
      >
        ‹
      </button>
      <button
        type="button"
        className="hero-slider__arrow hero-slider__arrow--next"
        onClick={goNext}
        aria-label="Next gallery"
      >
        ›
      </button>

      <div className="hero-slider__controls" role="tablist" aria-label="Hero galleries">
        {SLIDE_SETS.map((set, index) => (
          <button
            key={set.id}
            type="button"
            role="tab"
            aria-selected={currentSet === index}
            aria-label={set.label}
            className={`hero-slider__dot ${currentSet === index ? 'hero-slider__dot--active' : ''}`}
            onClick={() => goToSet(index, index > currentSet ? 'next' : 'prev')}
          />
        ))}
      </div>
    </div>
  )
}
