import Header from '../components/Header'
import Footer from '../components/Footer'
import DiscoveryCallButton from '../components/DiscoveryCallButton'
import { generalCuratedMk, generalCuratedRro, panoChatGpt } from '../assets/siteImages'
import SiteImage from '../components/SiteImage'
import './ApproachPage.css'

const methodologySteps = [
  {
    number: '01',
    title: 'Human behaviour science',
    description: 'Explained simply, applied practically.',
  },
  {
    number: '02',
    title: 'Storytelling & narrative principles',
    description: 'Helping people reframe their stories.',
  },
  {
    number: '03',
    title: 'Interactive, experiential workshops',
    description: 'Learning by doing, reflecting, sharing.',
  },
  {
    number: '04',
    title: 'Tailored to your team',
    description: 'Honouring backgrounds, meeting people where they are.',
  },
  {
    number: '05',
    title: 'Fun, engaging, with gravitas',
    description: "Because big change doesn't have to feel heavy.",
  },
  {
    number: '06',
    title: 'Storyboards & reflection tools',
    description: 'Turning personal insight into visible, practical growth.',
  },
]

const notList = [
  'Not therapy.',
  'Not corporate jargon.',
  'Not one-size-fits-all.',
  'Not about changing who people are — but about unlocking who they can be.',
]

const engagementSteps = [
  {
    step: '1',
    title: 'Discovery Call (30–45 minutes)',
    description:
      "We listen first. You tell us about your team, your challenges, and what you've tried before. We ask questions. Together, we identify what's really going on beneath the surface.",
  },
  {
    step: '2',
    title: 'Suggested Proposal',
    description:
      'We will propose a programme specifically for your team to best fit your size, context, culture, budget and goals. Duration ranges from a 2-hour inspirational talk to a one-day masterclass to a multi-session programme over 2 or more days.',
  },
  {
    step: '3',
    title: 'Delivery — On-Site or Hybrid',
    description:
      'We come to you. Workshops are delivered on-site at your lodge, office, or facility of choice. Remote and hybrid delivery is available where needed.',
  },
  {
    step: '4',
    title: 'Follow-Through',
    description:
      "Lasting change doesn't happen in a single day. We provide post-session resources, manager toolkits, and optional follow-up sessions to embed what was learned and measure what has shifted.",
  },
]

export default function ApproachPage() {
  return (
    <div className="approach-page">
      <Header activeLink="approach" ctaStyle="outline" />

      <section className="approach-hero">
        <div className="container approach-hero__grid">
          <div className="approach-hero__copy">
            <p className="approach-hero__eyebrow">Our Approach</p>
            <h1 className="approach-hero__title">
              How We <em>Create Change</em>
            </h1>
            <p className="approach-hero__lead">
              We start where conventional training stops.
            </p>
            <p className="approach-hero__text">
              We focus not on what to do, but on <strong>who is doing it</strong> — and how their mindset, emotional intelligence, and personal presence shape every interaction.
            </p>
          </div>
          <div className="approach-hero__media">
            <SiteImage
              src={generalCuratedMk}
              alt="Professional reflecting on human-centred service"
              className="approach-hero__image"
              priority
            />
            <span className="approach-hero__shape" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="approach-pano" aria-hidden="true">
        <img src={panoChatGpt} alt="" className="approach-pano__image" loading="lazy" decoding="async" />
      </section>

      <section className="approach-philosophy">
        <div className="container">
          <div className="approach-philosophy__layout">
            <blockquote className="approach-philosophy__quote">
              The way we think shapes our reality. By reframing the stories we tell ourselves, we can reshape our brains and transform our lives — leading to more authentic connections and job satisfaction.
            </blockquote>
            <div className="approach-philosophy__body">
              <p>
                Our primary focus is to empower staff to understand human behaviour and take ownership of their personal and professional stories. By developing emotional intelligence and communication skills, we help them thrive in their roles and elevate their performance.
              </p>
            </div>
            <div className="approach-philosophy__media">
              <SiteImage
                src={generalCuratedRro}
                alt="Team connecting in the workplace"
                className="approach-philosophy__image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="approach-methodology" aria-labelledby="approach-methodology-title">
        <div className="container">
          <h2 id="approach-methodology-title" className="approach-section-label">
            Our Methodology
          </h2>
          <ol className="approach-methodology__list">
            {methodologySteps.map((item) => (
              <li key={item.number} className="approach-methodology__item">
                <span className="approach-methodology__number">{item.number}</span>
                <div className="approach-methodology__content">
                  <h3 className="approach-methodology__title">{item.title}</h3>
                  <p className="approach-methodology__desc">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="approach-not" aria-labelledby="approach-not-title">
        <div className="container">
          <h2 id="approach-not-title" className="approach-not__title">
            What This Is Not
          </h2>
          <ul className="approach-not__list">
            {notList.map((item) => (
              <li key={item} className="approach-not__item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="approach-journey" aria-labelledby="approach-journey-title">
        <div className="container">
          <div className="approach-journey__header">
            <h2 id="approach-journey-title" className="approach-journey__title">
              How a Typical Engagement Works
            </h2>
            <p className="approach-journey__intro">
              Every engagement begins with a conversation — no obligation, no pressure. Here&apos;s what the journey typically looks like:
            </p>
          </div>
          <div className="approach-journey__steps">
            {engagementSteps.map((item) => (
              <article key={item.step} className="approach-journey__step">
                <span className="approach-journey__step-num">{item.step}</span>
                <div className="approach-journey__step-body">
                  <h3 className="approach-journey__step-title">{item.title}</h3>
                  <p className="approach-journey__step-desc">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="approach-journey__cta">
            <DiscoveryCallButton className="btn-pill btn-pill--blue mm-border-blue-pill approach-journey__btn">
              <span className="CharOverride-25">Start with a Discovery Call</span>
            </DiscoveryCallButton>
          </div>
        </div>
      </section>

      <section className="approach-note">
        <div className="container">
          <p className="approach-note__text">
            Programmes are available in <strong>English and Afrikaans</strong>. Travel to remote locations across Southern Africa is part of what we do.
          </p>
        </div>
      </section>

      <Footer variant="cream" />
    </div>
  )
}
