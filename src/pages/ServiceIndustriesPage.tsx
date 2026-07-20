import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import { StarBurst } from '../components/Doodles'
import {
  serviceFlagshipImg,
  serviceGallery1,
  serviceGallery2,
  serviceGallery3,
  serviceGallery4,
  serviceGallery5,
  serviceGallery6,
  serviceGallery7,
  serviceGallery8,
  serviceGallery9,
  serviceGallery10,
  serviceGallery11,
  serviceGallery12,
  serviceHeroImg,
} from '../assets/siteImages'
import SiteImage from '../components/SiteImage'
import serviceBrochureSafari from '../assets/new assets/Service/Safari Guide Hat Face Close-Up.pdf'
import serviceBrochureTeam from '../assets/new assets/Service/Team Working Together.pdf'
import './ServiceIndustriesPage.css'

const serviceGallery = [
  { src: serviceGallery1, alt: 'Frontline service professional' },
  { src: serviceGallery2, alt: 'Customer service interaction' },
  { src: serviceGallery3, alt: 'Team delivering service excellence' },
  { src: serviceGallery4, alt: 'Retail service moment' },
  { src: serviceGallery5, alt: 'Professional client engagement' },
  { src: serviceGallery6, alt: 'Service industry teamwork' },
  { src: serviceGallery7, alt: 'Confident service representative' },
  { src: serviceGallery8, alt: 'Workplace service culture' },
  { src: serviceGallery9, alt: 'Engaged service team member' },
  { src: serviceGallery10, alt: 'Collaborative service environment' },
  { src: serviceGallery11, alt: 'Professional service delivery' },
  { src: serviceGallery12, alt: 'Client-facing team member' },
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
            <blockquote className="service-hero__quote">
              <span className="CharOverride-17">&ldquo;When your people show up as their best selves, every transaction becomes a chance to build loyalty.&rdquo;</span>
            </blockquote>
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
          <div className="service-flagship__header">
            <div className="service-flagship__heading-group">
              <span className="service-flagship__number CharOverride-1">02</span>
              <span className="service-flagship__title CharOverride-13">Our Flagship</span>
            </div>
            <div className="service-flagship__book-icon">
              <svg viewBox="0 0 48 48" fill="none">
                <rect x="10" y="8" width="28" height="32" rx="2" stroke="white" strokeWidth="1.5" />
                <path d="M24 8v32" stroke="white" strokeWidth="1.5" />
                <path d="M16 2l4 6M32 2l-4 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className="service-flagship__content">
            <div className="service-flagship__orange-box _idGenObjectStyleOverride-10">
              <p className="ParaOverride-4">
                <span className="CharOverride-21">
                  The Minds &amp; Manners Service Excellence Masterclass &ndash; practical, engaging, built for frontline teams.
                </span>
              </p>
            </div>
            <div className="service-flagship__peach-circle _idGenObjectStyleOverride-7" />
            <div className="service-flagship__person-wrap">
              <SiteImage src={serviceFlagshipImg} alt="Service professional" className="service-flagship__person" loading="lazy" />
            </div>
          </div>

          <div className="service-flagship__buttons">
            <button type="button" className="btn-pill btn-pill--white mm-border-gold-pill">
              <span className="CharOverride-25">View Service Programmes</span>
            </button>
            <a href={serviceBrochureSafari} download className="btn-pill btn-pill--white mm-border-gold-pill">
              <span className="CharOverride-25">Download Service Brochure</span>
            </a>
            <a href={serviceBrochureTeam} download className="btn-pill btn-pill--white mm-border-gold-pill">
              <span className="CharOverride-25">Download Team Guide</span>
            </a>
          </div>
        </div>
      </section>

      <Footer variant="cream" />
    </div>
  )
}
