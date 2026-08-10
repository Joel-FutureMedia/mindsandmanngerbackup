import Header from '../components/Header'
import Footer from '../components/Footer'
import DiscoveryCallButton from '../components/DiscoveryCallButton'
import { generalFakhri, generalGetty37, panoUsm } from '../assets/siteImages'
import SiteImage from '../components/SiteImage'
import './ImpactPage.css'

const researchStats = [
  {
    value: '21%',
    headline: 'higher profitability',
    description: 'Highly engaged teams outperform disengaged teams.',
    tone: 'salmon',
  },
  {
    value: '86%',
    headline: 'of customers will pay more for a better experience',
    description: 'Service quality directly influences business performance.',
    tone: 'beige',
  },
  {
    value: '90%',
    headline: 'of top performers score highly in emotional intelligence',
    description: 'Technical skills matter, but people skills drive exceptional performance.',
    tone: 'blue',
  },
  {
    value: '81%',
    headline: 'of travellers rely on reviews and recommendations',
    description: 'Every interaction has the potential to strengthen or damage your reputation.',
    tone: 'yellow',
  },
  {
    value: '69%',
    headline: 'of employees say they would work harder if they felt more appreciated',
    description: 'Human connection influences motivation, retention, and culture.',
    tone: 'peach',
  },
]

const outcomes = [
  'Stronger communication and collaboration',
  'Greater self-awareness and emotional intelligence',
  'Improved service and guest experiences',
  'More confident, resilient teams',
  'Reduced workplace conflict',
  'Stronger alignment with organisational values and culture',
  'More engaged employees and healthier workplace relationships',
]

export default function ImpactPage() {
  return (
    <div className="impact-page">
      <Header activeLink="impact" ctaStyle="outline" />

      <section className="impact-hero">
        <div className="impact-hero__shell">
          <div className="container impact-hero__grid">
            <div className="impact-hero__copy">
              <p className="impact-hero__eyebrow">Impact</p>
              <h1 className="impact-hero__title">The Impact of Our Workshops</h1>
              <div className="impact-hero__narrative">
                <p className="impact-hero__lead">
                  The effects of our workshops don&apos;t stay in the room — they follow your team into every shift and every interaction. Staff leave with real confidence, a quieter sense of peace, and the kind of patience that doesn&apos;t run out when a guest is difficult or a day is long.
                </p>
                <p>
                  Empathy deepens. Clarity replaces confusion. And something that can be hard to manufacture begins to grow naturally — genuine team spirit, where people feel connected not just to their role, but to each other and to the purpose behind what they do.
                </p>
                <p className="impact-hero__closing">
                  Your team doesn&apos;t just function better. <strong>It feels better</strong> — and your guests or clients will notice.
                </p>
              </div>
            </div>
            <div className="impact-hero__media">
              <SiteImage
                src={generalGetty37}
                alt="Team experiencing positive workshop outcomes"
                className="impact-hero__image"
                priority
              />
            </div>
          </div>
        </div>
        <div className="impact-hero__band" aria-hidden="true">
          <img src={panoUsm} alt="" className="impact-hero__band-image" loading="lazy" decoding="async" />
          <span className="impact-hero__band-wash" />
        </div>
      </section>

      <section className="impact-research" aria-labelledby="impact-research-title">
        <div className="container">
          <div className="impact-research__header">
            <p className="impact-research__label">Results That Matter</p>
            <h2 id="impact-research-title" className="impact-research__title">
              Research Shows Why It Matters
            </h2>
          </div>
          <div className="impact-research__grid">
            {researchStats.map((stat) => (
              <article key={stat.value + stat.headline} className={`impact-stat impact-stat--${stat.tone}`}>
                <span className="impact-stat__value">{stat.value}</span>
                <h3 className="impact-stat__headline">{stat.headline}</h3>
                <p className="impact-stat__desc">{stat.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-outcomes" aria-labelledby="impact-outcomes-title">
        <div className="container">
          <div className="impact-outcomes__layout">
            <div className="impact-outcomes__content">
              <h2 id="impact-outcomes-title" className="impact-outcomes__title">
                The Outcomes We Help Create
              </h2>
              <ul className="impact-outcomes__list">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="impact-outcomes__item">
                    {outcome}
                  </li>
                ))}
              </ul>
              <DiscoveryCallButton className="btn-pill btn-pill--blue mm-border-blue-pill impact-outcomes__cta">
                <span className="CharOverride-25">Book a Discovery Call</span>
              </DiscoveryCallButton>
            </div>
            <div className="impact-outcomes__media">
              <SiteImage
                src={generalFakhri}
                alt="Engaged team member after workshop"
                className="impact-outcomes__image"
                loading="lazy"
              />
              <span className="impact-outcomes__accent" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <Footer variant="cream" />
    </div>
  )
}
