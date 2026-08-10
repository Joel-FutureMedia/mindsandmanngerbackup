import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import { StarBurst } from '../components/Doodles'
import {
  serviceFlagshipImg,
  serviceGallery1,
  serviceGallery2,
  serviceGallery3,
  serviceHeroImg,
} from '../assets/siteImages'
import SiteImage from '../components/SiteImage'
import './ServiceIndustriesPage.css'

const serviceGallery = [
  { src: serviceGallery1, alt: 'Frontline service professional' },
  { src: serviceGallery2, alt: 'Customer service interaction' },
  { src: serviceGallery3, alt: 'Team delivering service excellence' },
]

const challengeSkills = [
  'Emotional regulation under pressure',
  'Empathetic communication',
  'Conflict resolution that de-escalates',
  'Team dynamics across differences',
  'Professional presence that builds trust',
]

const programmes = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 36V20" stroke="#e85d3f" strokeWidth="1.5" />
        <path d="M18 28c0-4 2-8 6-8s6 4 6 8" stroke="#e85d3f" strokeWidth="1.5" />
        <path d="M20 16c2-4 6-4 8 0" stroke="#e85d3f" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Professional Response Under Pressure',
    description: 'Managing stress, regulating emotions, thinking clearly, and responding with professionalism under pressure.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="10" stroke="#e85d3f" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="4" stroke="#e85d3f" strokeWidth="1.5" />
        <path d="M24 14v-4M24 38v-4M14 24h-4M38 24h-4" stroke="#e85d3f" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Communication & Emotional Intelligence',
    description: 'Developing self-awareness, empathy, active listening, and effective interpersonal communication.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M14 30c4-8 16-8 20 0" stroke="#e85d3f" strokeWidth="1.5" />
        <circle cx="18" cy="18" r="6" stroke="#e85d3f" strokeWidth="1.5" />
        <circle cx="30" cy="18" r="6" stroke="#e85d3f" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Team Dynamics & Collaborative Culture',
    description: 'Building trust, improving collaboration, resolving conflict, and strengthening team culture.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 8C16 16 16 32 24 40" stroke="#e85d3f" strokeWidth="1.5" />
        <path d="M28 36l4 4" stroke="#e85d3f" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Brand Ambassador Development',
    description: "Living your organisation's values, embodying its culture, and creating positive experiences through every interaction.",
  },
]

export default function ServiceIndustriesPage() {
  return (
    <div className="service">
      <Header activeLink="service" ctaStyle="outline" />

      <section className="service-hero">
        <div className="container">
          <div className="service-hero__layout">
            <div className="service-hero__image-wrap">
              <SiteImage
                src={serviceHeroImg}
                alt="Professional in a service environment"
                className="service-hero__image"
                priority
              />
              <div className="service-hero__overlay-box mm-hero-overlay-box _idGenObjectStyleOverride-2">
                <h1 className="service-hero__headline">
                  <span className="CharOverride-23">You don&apos;t just serve customers. You </span>
                  <em><span className="CharOverride-27">shape experiences.</span></em>
                </h1>
                <p className="service-hero__subtext ParaOverride-4">
                  <span className="CharOverride-23">
                    In retail, banking, telecoms, and every client-facing industry, the difference between adequate and exceptional is the human being behind the interaction — their mindset, presence, and ability to connect.
                  </span>
                </p>
              </div>
              <span className="service-hero__starburst">
                <StarBurst size={24} />
              </span>
            </div>
            <div className="service-hero__statement">
              <h2 className="service-hero__statement-title">
                Better Humans, <em>Better Business</em>
              </h2>
              <p className="service-hero__statement-tagline">Every business is a people business.</p>
              <div className="service-hero__statement-body">
                <p>
                  Whether you&apos;re in retail, healthcare, finance, or corporate services, your success depends on how your people show up — for customers, for each other, for your brand.
                </p>
                <p className="service-hero__statement-closer">
                  <span className="service-hero__statement-line" aria-hidden="true" />
                  <em>We help them show up better.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section service-challenge">
        <div className="container">
          <div className="service-challenge__inner">
            <p className="service-challenge__label">The Service Challenge</p>
            <h2 className="service-challenge__headline">
              Trained is not the same as <em>transformed.</em>
            </h2>
            <p className="service-challenge__lead">
              Most training focuses on procedures and products. But what about human skills?
            </p>
            <ul className="service-challenge__list">
              {challengeSkills.map((skill) => (
                <li key={skill} className="service-challenge__list-item">
                  {skill}
                </li>
              ))}
            </ul>
            <p className="service-challenge__closing">
              These aren&apos;t in the manual. They&apos;re in the person. <strong>We develop the person.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="section service-programmes">
        <div className="container">
          <SectionHeading number="01" title="Our Service Industry Programmes" />
          <h3 className="service-programmes__intro-title">Practical development for every team:</h3>
          <div className="service-programmes__grid">
            {programmes.map((prog) => (
              <div key={prog.title} className="service-programmes__item">
                <div className="service-programmes__icon">{prog.icon}</div>
                <div className="service-programmes__text">
                  <h3 className="service-programmes__title"><span className="CharOverride-14">{prog.title}</span></h3>
                  <p className="service-programmes__desc"><span className="CharOverride-11">{prog.description}</span></p>
                </div>
              </div>
            ))}
          </div>
          <div className="service-tailor">
            <h3 className="service-tailor__title">Tailor-Made for Your Team</h3>
            <p className="service-tailor__body">
              Every workshop can be adapted to suit your organisation&apos;s unique needs. We welcome the opportunity to meet with you, understand your challenges and objectives, and design a programme that delivers the greatest value and impact for your people.
            </p>
          </div>
        </div>
      </section>

      <section className="section service-gallery" aria-label="Service industry moments">
        <div className="container">
          <div className="service-gallery__grid">
            {serviceGallery.map((item) => (
              <div key={item.src} className="service-gallery__item">
                <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-flagship">
        <div className="container">
          <div className="service-flagship__layout">
            <div className="service-flagship__copy">
              <div className="service-flagship__heading-group">
                <span className="service-flagship__number">02</span>
                <span className="service-flagship__title">Our Flagship</span>
              </div>

              <div className="service-flagship__masterclass">
                <p className="service-flagship__label">Service Excellence Masterclass</p>
                <p className="service-flagship__lead">
                  The Minds &amp; Manners Service Excellence Masterclass — practical, engaging, built for frontline teams.
                </p>
              </div>

              <div className="service-flagship__buttons">
                <button type="button" className="btn-pill btn-pill--white mm-border-gold-pill">
                  <span className="CharOverride-25">View Service Profile</span>
                </button>
              </div>
            </div>

            <div className="service-flagship__portrait">
              <div className="service-flagship__portrait-glow" aria-hidden="true" />
              <div className="service-flagship__person-wrap">
                <SiteImage
                  src={serviceFlagshipImg}
                  alt="Service professional"
                  className="service-flagship__person"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="cream" />
    </div>
  )
}
