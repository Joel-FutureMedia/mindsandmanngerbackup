import { Link } from 'react-router-dom'
import { logoImage } from '../assets/siteImages'
import './Logo.css'

export default function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logoImage} alt="Minds & Manners" className="logo__image" loading="eager" fetchPriority="high" decoding="async" />
    </Link>
  )
}
