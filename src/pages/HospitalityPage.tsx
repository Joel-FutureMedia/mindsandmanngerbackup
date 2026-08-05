import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import { StarBurst } from '../components/Doodles'
import {
  hospFlagshipImg,
  hospGallery1,
  hospGallery2,
  hospGallery3,
  hospHeroImg,
} from '../assets/siteImages'
import SiteImage from '../components/SiteImage'
import './HospitalityPage.css'

const hospitalityGallery = [
  { src: hospGallery1, alt: 'Curated hospitality experience' },
  { src: hospGallery2, alt: 'Guest welcome at a lodge' },
  { src: hospGallery3, alt: 'Fine dining service' },
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
    description: 'Emotional intelligence, self-awareness, mindset, personal storytelling & confidence.',
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
    description: 'Communication, deep listening, reading the room, handling difficult conversations, and building trust through genuine human connection.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 8C16 16 16 32 24 40" stroke="#1e4bbd" strokeWidth="1.5" />
        <path d="M28 36l4 4" stroke="#1e4bbd" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Service Excellence',
    description: 'Authentic guest and customer experiences, handling pressure with grace, consistency, service recovery, attention to detail, and making people feel seen, valued, and respected.',
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
    description: "Understanding your organisation's story, values and culture — and representing them with pride, authenticity and professionalism.",
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
                <p className="hosp-hero__closer">
                  <span className="hosp-hero__closer-line" aria-hidden="true" />
                  <em>We develop that human being.</em>
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

      <section className="section hosp-flagship">
        <div className="container">
          <SectionHeading number="02" title="Our Flagship" />

          <div className="hosp-flagship__layout">
            <div className="hosp-flagship__copy">
              <h3 className="hosp-flagship__title">
                Flagship: The Minds &amp; Manners Customer Service Masterclass
              </h3>
              <p className="hosp-flagship__intro">
                Immersive, interactive, and tailored to your specific needs from the pillars of transformation.
              </p>
              <h4 className="hosp-flagship__headline">
                Because One Size Rarely Fits <em>All</em>
              </h4>
              <div className="hosp-flagship__body">
                <p>
                  Every team has its own story, culture, strengths, and challenges. While our core principles remain the same, we regularly customise workshops, masterclasses, and training programmes to address our clients&apos; specific needs.
                </p>
                <p className="hosp-flagship__highlight">
                  We would love to meet with you, learn more about your people and goals, and create a programme tailored to your organisation and the outcomes you want to achieve.
                </p>
                <p className="hosp-flagship__contact">
                  For more information, contact{' '}
                  <a href="mailto:manners@onceuponmind.com">manners@onceuponmind.com</a>.
                </p>
              </div>
              <div className="hosp-flagship__buttons">
                <button className="btn-pill btn-pill--outline mm-border-gold-pill">
                  <span className="CharOverride-25">View Hospitality Programmes</span>
                </button>
                <button className="btn-pill btn-pill--blue mm-border-gold-pill">
                  <span className="CharOverride-25">Download Hospitality Brochure</span>
                </button>
              </div>
            </div>

            <div className="hosp-flagship__portrait">
              <div className="hosp-flagship__portrait-glow" aria-hidden="true" />
              <div className="hosp-flagship__person-wrap">
                <SiteImage
                  src={hospFlagshipImg}
                  alt="Hospitality professional smiling"
                  className="hosp-flagship__person"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="blue" />
    </div>
  )
}
