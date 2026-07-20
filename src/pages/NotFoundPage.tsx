import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './NotFoundPage.css'

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <Header activeLink="home" />
      <main className="not-found__main container">
        <p className="not-found__eyebrow">404</p>
        <h1 className="not-found__title">This page isn&apos;t here.</h1>
        <p className="not-found__text">
          The link may be outdated, or the page may have moved. Choose a destination below.
        </p>
        <nav className="not-found__nav" aria-label="Helpful links">
          <Link to="/" className="btn-pill btn-pill--blue mm-border-blue-pill">
            Home
          </Link>
          <Link to="/hospitality" className="btn-pill btn-pill--blue mm-border-blue-pill">
            Hospitality
          </Link>
          <Link to="/service" className="btn-pill btn-pill--blue mm-border-blue-pill">
            Service Industries
          </Link>
          <Link to="/school-youth" className="btn-pill btn-pill--blue mm-border-blue-pill">
            School &amp; Youth
          </Link>
          <Link to="/approach" className="btn-pill btn-pill--blue mm-border-blue-pill">
            Our Approach
          </Link>
          <Link to="/impact" className="btn-pill btn-pill--blue mm-border-blue-pill">
            Impact
          </Link>
        </nav>
      </main>
      <Footer variant="cream" />
    </div>
  )
}
