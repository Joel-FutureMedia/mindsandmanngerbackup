import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import { StarBurst } from '../components/Doodles'
import {
  hospFlagshipImg,
  hospGallery1,
  hospGallery2,
  hospGallery3,
  hospGallery4,
  hospGallery5,
  hospGallery6,
  hospGallery7,
  hospGallery8,
  hospGallery9,
  hospHeroImg,
} from '../assets/siteImages'
import SiteImage from '../components/SiteImage'
import './HospitalityPage.css'

const hospitalityGallery = [
  { src: hospGallery1, alt: 'Curated hospitality experience' },
  { src: hospGallery2, alt: 'Guest welcome at a lodge' },
  { src: hospGallery3, alt: 'Fine dining service' },
  { src: hospGallery4, alt: 'Hotel reception warmth' },
  { src: hospGallery5, alt: 'Safari lodge hospitality' },
  { src: hospGallery6, alt: 'Restaurant service excellence' },
  { src: hospGallery7, alt: 'Tourism team in action' },
  { src: hospGallery8, alt: 'Guest-facing professional' },
  { src: hospGallery9, alt: 'Luxury hospitality moment' },
]

const programmes = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M14 30c4-8 16-8 20 0" stroke="#1e4bbd" strokeWidth="1.5" />
        <circle cx="18" cy="18" r="6" stroke="#1e4bbd" strokeWidth="1.5" />
        <circle cx="30" cy="18" r="6" stroke="#1e4bbd" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Personal Mastery',
    description: 'Emotional intelligence, self-awareness, personal storytelling & confidence.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="10" stroke="#1e4bbd" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="4" stroke="#1e4bbd" strokeWidth="1.5" />
        <path d="M24 14v-4M24 38v-4M14 24h-4M38 24h-4" stroke="#1e4bbd" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Communication & Connection',
    description: 'Cross-cultural communication, deep listening, reading the room.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 8C16 16 16 32 24 40" stroke="#1e4bbd" strokeWidth="1.5" />
        <path d="M28 36l4 4" stroke="#1e4bbd" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Service Excellence',
    description: 'Authentic guest experiences, handling pressure with grace, consistency.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 36V20" stroke="#1e4bbd" strokeWidth="1.5" />
        <path d="M18 28c0-4 2-8 6-8s6 4 6 8" stroke="#1e4bbd" strokeWidth="1.5" />
        <path d="M20 16c2-4 6-4 8 0" stroke="#1e4bbd" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Brand & Professional Identity',
    description: "Embodying your lodge's story, representing with pride.",
  },
]

export default function HospitalityPage() {
  return (
    <div className="hospitality">
      <Header activeLink="hospitality" ctaStyle="outline" />

      <section className="hosp-hero">
        <div className="container">
          <div className="hosp-hero__layout">
            <div className="hosp-hero__image-wrap">
              <SiteImage
                src={hospHeroImg}
                alt="Hospitality team welcoming guests"
                className="hosp-hero__image"
                priority
              />
              <div className="hosp-hero__overlay-box mm-hero-overlay-box _idGenObjectStyleOverride-2">
                <h1 className="hosp-hero__headline">
                  <span className="CharOverride-23">You don&apos;t just host guests. You </span>
                  <em><span className="CharOverride-27">create memories.</span></em>
                </h1>
                <p className="hosp-hero__subtext ParaOverride-4">
                  <span className="CharOverride-23">
                    In luxury hospitality, the difference between good and legendary isn&apos;t the thread count or the wine list. It&apos;s the human being who welcomes the guest, listens to their story, and makes them feel truly seen.
                  </span>
                </p>
              </div>
              <span className="hosp-hero__starburst">
                <StarBurst size={24} />
              </span>
            </div>
            <blockquote className="hosp-hero__quote">
              <span className="CharOverride-17">&ldquo;When your staff own their story, they become the most authentic thing about your business.&rdquo;</span>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section hosp-programmes">
        <div className="container">
          <SectionHeading number="01" title="Our Hospitality Programmes" />
          <div className="hosp-moment">
            <h3 className="hosp-moment__headline">
              Africa&apos;s tourism moment is here. <em>Is your team ready?</em>
            </h3>
            <div className="hosp-moment__body">
              <p>
                International arrivals reached 74&nbsp;million in 2024&nbsp;&mdash; 7% above pre-pandemic levels&nbsp;&mdash; and growth continues at 12% year-on-year. The landscapes are extraordinary. The investment is flowing.
              </p>
              <p className="hosp-moment__highlight">
                But the defining competitive edge lives in the people on the ground.
              </p>
              <p>
                Today&apos;s luxury traveller seeks authentic human connection, not performed service. They stay longer, go deeper, and notice everything. <strong>Your team must be ready.</strong>
              </p>
            </div>
            <h4 className="hosp-moment__pillars-title">Four pillars of transformation:</h4>
          </div>
          <div className="hosp-programmes__grid">
            {programmes.map((prog) => (
              <div key={prog.title} className="hosp-programmes__item">
                <div className="hosp-programmes__icon">{prog.icon}</div>
                <div className="hosp-programmes__text">
                  <h3 className="hosp-programmes__title"><span className="CharOverride-14">{prog.title}</span></h3>
                  <p className="hosp-programmes__desc"><span className="CharOverride-11">{prog.description}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section hosp-gallery" aria-label="Hospitality moments">
        <div className="container">
          <div className="hosp-gallery__grid">
            {hospitalityGallery.map((item) => (
              <div key={item.src} className="hosp-gallery__item">
                <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hosp-flagship">
        <div className="container">
          <div className="hosp-flagship__header">
            <div className="hosp-flagship__heading-group">
              <span className="hosp-flagship__number CharOverride-1">02</span>
              <span className="hosp-flagship__title CharOverride-13">Our Flagship</span>
            </div>
            <div className="hosp-flagship__book-icon">
              <svg viewBox="0 0 48 48" fill="none">
                <rect x="10" y="8" width="28" height="32" rx="2" stroke="white" strokeWidth="1.5" />
                <path d="M24 8v32" stroke="white" strokeWidth="1.5" />
                <path d="M16 2l4 6M32 2l-4 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className="hosp-flagship__content">
            <div className="hosp-flagship__orange-box _idGenObjectStyleOverride-10">
              <p className="ParaOverride-4">
                <span className="CharOverride-21">
                  Flagship: The Minds &amp; Manners Customer Service Masterclass - immersive, interactive, and tailored to your specific needs from the pillars of transformation.
                </span>
              </p>
              <h3 className="hosp-flagship__custom-title">Because One Size Rarely Fits All</h3>
              <p className="hosp-flagship__custom-body">
                Every team has its own story, culture, strengths, and challenges. While our core principles remain the same, we regularly customise workshops, masterclasses, and training programmes to address our clients&apos; specific needs.
              </p>
              <p className="hosp-flagship__custom-body">
                We would love to meet with you, learn more about your people and goals, and create a programme tailored to your organisation and the outcomes you want to achieve.
              </p>
              <p className="hosp-flagship__custom-contact">
                For more information, contact{' '}
                <a href="mailto:manners@onceuponmind.com" className="hosp-flagship__custom-link">
                  manners@onceuponmind.com
                </a>
                .
              </p>
            </div>
            <div className="hosp-flagship__peach-circle _idGenObjectStyleOverride-7" />
            <div className="hosp-flagship__person-wrap">
              <SiteImage src={hospFlagshipImg} alt="Hospitality professional smiling" className="hosp-flagship__person" loading="lazy" />
            </div>
          </div>

          <div className="hosp-flagship__buttons">
            <button className="btn-pill btn-pill--white mm-border-gold-pill">
              <span className="CharOverride-25">View Hospitality Programmes</span>
            </button>
            <button className="btn-pill btn-pill--white mm-border-gold-pill">
              <span className="CharOverride-25">Download Hospitality Brochure</span>
            </button>
          </div>
        </div>
      </section>

      <Footer variant="cream" />
    </div>
  )
}
