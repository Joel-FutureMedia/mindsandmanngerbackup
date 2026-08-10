import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import DiscoveryCallButton from './DiscoveryCallButton'
import { arrowIcon } from '../assets/siteImages'
import './Header.css'

interface HeaderProps {
  activeLink?: 'home' | 'hospitality' | 'service' | 'youth' | 'approach' | 'impact' | 'team'
  ctaStyle?: 'gold' | 'outline'
}

const whoWeWorkWithLinks = [
  { label: 'Hospitality & Tourism', to: '/hospitality' },
  { label: 'Service Industries', to: '/service' },
  { label: 'Schools & Youth', to: '/school-youth' },
  { label: 'Teams & Organisations', to: '/#who-we-work-with' },
]

function NavLink({
  to,
  children,
  coral = false,
  onNavigate,
}: {
  to: string
  children: string
  coral?: boolean
  onNavigate?: () => void
}) {
  return (
    <Link to={to} className="header__link" onClick={onNavigate}>
      <span className={coral ? 'CharOverride-5' : 'CharOverride-6'}>{children}</span>
    </Link>
  )
}

function SectionLink({
  to,
  children,
  onNavigate,
}: {
  to: string
  children: string
  onNavigate?: () => void
}) {
  return (
    <Link to={to} className="header__link" onClick={onNavigate}>
      <span className="CharOverride-6">{children}</span>
    </Link>
  )
}

function WhoWeWorkWithMenu({
  active = false,
  onNavigate,
}: {
  active?: boolean
  onNavigate?: () => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`header__dropdown ${open ? 'header__dropdown--open' : ''} ${active ? 'header__dropdown--active' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="header__link header__dropdown-toggle"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
      >
        <span className={active ? 'CharOverride-5' : 'CharOverride-6'}>Who We Work With</span>
        <span className="header__dropdown-caret" aria-hidden="true" />
      </button>
      <div className="header__dropdown-menu" role="menu">
        {whoWeWorkWithLinks.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="header__dropdown-link"
            role="menuitem"
            onClick={() => {
              setOpen(false)
              onNavigate?.()
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Header({ activeLink, ctaStyle = 'gold' }: HeaderProps) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const isHospitality = activeLink === 'hospitality' || location.pathname === '/hospitality'
  const isService = activeLink === 'service' || location.pathname === '/service'
  const isYouth = activeLink === 'youth' || location.pathname === '/school-youth'
  const isWhoWeWorkWith = isHospitality || isService || isYouth || location.hash === '#who-we-work-with'
  const isApproach = activeLink === 'approach' || location.pathname === '/approach'
  const isImpact = activeLink === 'impact' || location.pathname === '/impact'
  const isTeam = activeLink === 'team' || location.pathname === '/team'
  const isHome = activeLink === 'home' || (!activeLink && location.pathname === '/')

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    closeMenu()
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const ctaButton = (
    <DiscoveryCallButton
      className={`btn-pill btn-pill--small header__cta-btn mm-border-gold-pill ${ctaStyle === 'outline' ? 'btn-pill--outline' : 'btn-pill--gold'}`}
      onClick={closeMenu}
    >
      <span className="CharOverride-4">Book a Discovery Call</span>
    </DiscoveryCallButton>
  )

  return (
    <header className="header mm-surface-cream">
      <div className={`header__inner container ${menuOpen ? 'header__inner--open' : ''}`}>
        <button
          type="button"
          className="header__menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="header-mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="header__menu-toggle-bar" />
          <span className="header__menu-toggle-bar" />
          <span className="header__menu-toggle-bar" />
          <span className="header__menu-toggle-label">{menuOpen ? 'Close' : 'Menu'}</span>
        </button>

        <div className="header__bar">
          <nav className="header__nav header__nav--left" aria-label="Primary">
            <NavLink to="/" coral={isHome} onNavigate={closeMenu}>
              About Us
            </NavLink>
            <WhoWeWorkWithMenu active={isWhoWeWorkWith} onNavigate={closeMenu} />
            <NavLink to="/approach" coral={isApproach} onNavigate={closeMenu}>
              Our Approach
            </NavLink>
          </nav>

          <div className="header__logo">
            <Logo />
          </div>

          <nav className="header__nav header__nav--right" aria-label="Secondary">
            <NavLink to="/impact" coral={isImpact} onNavigate={closeMenu}>
              Impact
            </NavLink>
            <NavLink to="/team" coral={isTeam} onNavigate={closeMenu}>
              Team
            </NavLink>
            <div className="header__cta-anchor header__cta-anchor--desktop">
              <div className="header__actions">
                <div className="header__cta">{ctaButton}</div>
                <img
                  src={arrowIcon}
                  alt=""
                  className="header__contact-arrow mm-arrow-animate"
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <SectionLink to="/#contact" onNavigate={closeMenu}>
              Contact
            </SectionLink>
          </nav>
        </div>

        <div id="header-mobile-nav" className="header__mobile-panel">
          <nav className="header__mobile-links" aria-label="Mobile">
            <NavLink to="/" coral={isHome} onNavigate={closeMenu}>
              About Us
            </NavLink>
            <WhoWeWorkWithMenu active={isWhoWeWorkWith} onNavigate={closeMenu} />
            <NavLink to="/approach" coral={isApproach} onNavigate={closeMenu}>
              Our Approach
            </NavLink>
            <NavLink to="/impact" coral={isImpact} onNavigate={closeMenu}>
              Impact
            </NavLink>
            <NavLink to="/team" coral={isTeam} onNavigate={closeMenu}>
              Team
            </NavLink>
            <SectionLink to="/#contact" onNavigate={closeMenu}>
              Contact
            </SectionLink>
          </nav>
          <div className="header__mobile-cta">
            {ctaButton}
            <img
              src={arrowIcon}
              alt=""
              className="header__contact-arrow mm-arrow-animate"
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
