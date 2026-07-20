import { Link } from 'react-router-dom'
import DiscoveryCallButton from '../components/DiscoveryCallButton'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import HeroSlider from '../components/HeroSlider'
import { ArrowDown, Squiggle } from '../components/Doodles'
import {
  anotherShape,
  arrowone,
  blueShape,
  generalArturo,
  generalBaptista,
  generalChatGpt,
  generalChristian,
  generalGettyKt,
  generalJack,
  generalSincerely,
  generalTwoHMedia,
  generalVitaly,
  panoDdQqD,
  star2,
  starIcon,
} from '../assets/siteImages'
import SiteImage from '../components/SiteImage'
import './HomePage.css'

const methodologyItems = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="16" cy="20" r="8" stroke="#e85d3f" strokeWidth="1.5" />
        <circle cx="32" cy="20" r="8" stroke="#e85d3f" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Human behaviour science',
    subtitle: 'in plain language',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 8C16 16 16 32 24 40" stroke="#e85d3f" strokeWidth="1.5" />
        <path d="M28 36l4 4" stroke="#e85d3f" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Practical, accessible tools',
    subtitle: 'for immediate use',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <ellipse cx="24" cy="32" rx="12" ry="4" stroke="#e85d3f" strokeWidth="1.5" />
        <ellipse cx="24" cy="26" rx="10" ry="3" stroke="#e85d3f" strokeWidth="1.5" />
        <ellipse cx="24" cy="20" rx="8" ry="3" stroke="#e85d3f" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Genuine & lasting behaviour change',
    subtitle: 'to shift behaviour and forge empathy',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="10" stroke="#e85d3f" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="4" stroke="#e85d3f" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Storytelling & narrative therapy principles',
    subtitle: 'to reframe personal and professional stories',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 36V20" stroke="#e85d3f" strokeWidth="1.5" />
        <path d="M18 28c0-4 2-8 6-8s6 4 6 8" stroke="#e85d3f" strokeWidth="1.5" />
        <path d="M20 16c2-4 6-4 8 0" stroke="#e85d3f" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Humour, creativity & engagement',
    subtitle: "because learning sticks when it's enjoyed",
  },
]

const statSurfaceClass: Record<string, string> = {
  salmon: 'mm-stat-peach _idGenObjectStyleOverride-7',
  yellow: 'mm-stat-gold _idGenObjectStyleOverride-11',
  beige: 'mm-stat-cream _idGenObjectStyleOverride-1',
  blue: 'mm-stat-blue _idGenObjectStyleOverride-3',
}

const stats = [
  {
    value: '21%',
    bg: 'salmon',
    lines: [
      'Higher profitability is linked',
      'to highly engaged teams and',
      'positive workplace cultures.',
    ],
  },
  {
    value: '70%',
    bg: 'yellow',
    lines: [
      'Team engagement is largely',
      'shaped by leadership and',
      'workplace culture.',
      '(Gallup)',
    ],
  },
  {
    value: '86%',
    bg: 'beige',
    lines: [
      'Customers are willing to pay',
      'more for a better customer',
      'experience.',
    ],
  },
  {
    value: '90%',
    bg: 'blue',
    lines: [
      'Top performers consistently',
      'demonstrate strong emotional',
      'intelligence.',
    ],
  },
]

const testimonials = [
  {
    image: generalArturo,
    quote: "This training didn't just improve service - it changed how our team sees themselves.",
  },
  {
    image: generalBaptista,
    quote: 'Our staff are more confident, more engaged, and more aligned with what we stand for.',
  },
  {
    image: generalChristian,
    quote: "We've done training before. This was the first time it actually stuck.",
  },
]

const momentsGallery = [
  { src: generalGettyKt, alt: 'Team collaborating in the workplace' },
  { src: generalJack, alt: 'Professional connecting with colleagues' },
  { src: generalSincerely, alt: 'Warm workplace interaction' },
  { src: generalVitaly, alt: 'Engaged service professional' },
]

const audienceOfferings = [
  {
    title: 'Hospitality & Tourism',
    description: 'For lodges, hotels, game reserves, restaurants, tour operators & guest-facing teams',
    to: '/hospitality',
  },
  {
    title: 'Workplace Service Culture',
    description: 'For offices, retail, healthcare, education, public sector, NGOs, call centres & any business where people serve people',
    to: '/service',
  },
  {
    title: 'Youth and Schools',
    description: 'For high schools, youth organisations and school leadership teams',
    to: '/school-youth',
  },
]

const workWithItems = [
  'Lodges, camps, game reserves, hotels, and tourism operators across Southern Africa',
  'Restaurants, guesthouses, boutique properties and hospitality teams',
  'Retail, healthcare, education, finance and professional service organisations',
  'Government institutions, NGOs and community-based organisations',
  'Customer service, administrative and operational teams',
  'HR professionals, managers, business owners and leaders who understand that people are their greatest competitive advantage',
  'Schools & educational institutions: school leaders, student councils, teachers, learners',
]

const changesRows = [
  {
    before: 'Individuals interpreting the brand in their own way.',
    after: 'Employees who consistently and authentically embody the brand.',
  },
  {
    before: 'Management driven by rules, control and compliance.',
    after: 'Leadership that inspires self-leadership, accountability and shared purpose.',
  },
  {
    before: 'Staff who are trained but disengaged',
    after: 'Staff who are genuinely confident and connected',
  },
  {
    before: 'Customers/guests who are served but not seen',
    after: 'People who feel understood and remembered',
  },
  {
    before: 'Complaints that escalate',
    after: 'Complaints handled with calm and grace',
  },
  {
    before: 'Teams divided by culture or personality',
    after: 'Teams aligned around a shared purpose',
  },
  {
    before: 'Inconsistent service quality',
    after: 'A standard that holds — every shift, every day',
  },
  {
    before: 'High turnover, low morale',
    after: 'People who stay, grow, and bring their best selves',
  },
  {
    before: 'Reviews that disappoint',
    after: 'Reviews that tell the story you want told',
  },
  {
    before: 'An atmosphere that functions, but leaves no impression',
    after: 'An atmosphere guests feel the moment they walk in — and remember long after they leave',
  },
]

export default function HomePage() {
  return (
    <div className="home">
      <Header activeLink="home" />

      <div className="hero-block">
        <section className="hero">
          <div className="hero__collage">
            <HeroSlider />
          </div>
        </section>

        <div className="hero__overlay mm-hero-overlay-box _idGenObjectStyleOverride-2">
          <p className="hero__text ParaOverride-4">
            <span className="CharOverride-23">
              At the heart
              <br />
              of every great
              <br />
              experience is a
              <br />
              human being.
              <br />
              Great service isn&apos;t
              <br />
              a skill.
              <br />
              It&apos;s a way of being.
            </span>
          </p>
          <img src={starIcon} alt="" className="hero__star mm-star-animate" aria-hidden="true" decoding="async" />
        </div>
      </div>

      <section className="section section--human-side" aria-labelledby="human-side-title">
        <div className="container">
          <div className="human-side">
            <div className="human-side__panel">
              <div className="human-side__header">
                <img
                  src={starIcon}
                  alt=""
                  className="human-side__star mm-star-animate"
                  aria-hidden="true"
                  decoding="async"
                />
                <h2 id="human-side-title" className="human-side__title">
                  <span className="CharOverride-13">The Human Side of Service</span>
                </h2>
              </div>
              <div className="human-side__copy">
                <div className="human-side__rule" aria-hidden="true" />
                <div className="human-side__body">
                  <p className="ParaOverride-4">
                    <span className="CharOverride-11">
                      Every exceptional experience begins in the same place — not in a manual, process, or script.
                    </span>
                  </p>
                  <p className="ParaOverride-4">
                    <span className="CharOverride-11">
                      It begins in the mind of the person facing another human being.
                    </span>
                  </p>
                  <p className="ParaOverride-4 human-side__closing">
                    <span className="CharOverride-11">We develop the human behind the professional.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--what" id="about">
        <div className="container">
          <SectionHeading number="01" title="What Minds & Manners Is" />
          <div className="what__grid">
            <div className="what__col">
              <p className="ParaOverride-4">
                <span className="CharOverride-11">Minds &amp; Manners is a human-centred training practice for the service and hospitality industry. We do not replicate conventional hospitality training. We start where conventional training stops.</span>
              </p>
              <p className="ParaOverride-4">
                <span className="CharOverride-11">Our work focuses on the personal and professional development of the individual: emotional intelligence, communication, self-awareness, personal presence, etiquette, manners, and the mindset with which people approach their work, their colleagues, and the guests they serve.</span>
              </p>
            </div>
            <div className="what__col">
              <p className="ParaOverride-4">
                <span className="CharOverride-11">We use behavioural science, psychology, storytelling, and practical tools grounded in common sense to make learning engaging, deeply relatable, and immediately applicable.</span>
              </p>
              <p className="ParaOverride-4">
                <span className="CharOverride-11">Critically, our approach honours every participant&apos;s background and story. We do not teach people to be something they are not. We help them discover and develop their best selves — and bring those selves to work every single day.</span>
              </p>
            </div>
            <div className="what__col">
              <p className="ParaOverride-4">
                <span className="CharOverride-11">This approach directly supports one of the central principles of responsible, sustainable African tourism: that community-rooted staff are not a compromise — they are a competitive advantage. But only when they are genuinely empowered.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-section" aria-label="Staff story quote">
        <div className="container quote-section__inner">
          <div className="quote-section__stage">
            <div className="quote-section__yellow" aria-hidden="true" />
            <div className="quote-section__content">
              <blockquote className="quote-section__quote">
                <span className="CharOverride-17 quote-section__quote-text">
                  <span className="quote-section__above-yellow">
                    <span className="quote-section__line">&ldquo;When your staff</span>
                    <span className="quote-section__line">own their story, they</span>
                  </span>
                  <span className="quote-section__in-yellow">
                    become the most
                    <br />
                    authentic thing about
                    <br />
                    your business.&rdquo;
                  </span>
                </span>
              </blockquote>
              <div className="quote-section__cta">
                <img
                  src={arrowone}
                  alt=""
                  className="quote-section__arrowone mm-arrow-animate"
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                />
                <DiscoveryCallButton type="button" className="btn-pill quote-section__btn mm-border-blue-pill">
                  <span className="CharOverride-25">Book a Discovery Call</span>
                </DiscoveryCallButton>
              </div>
            </div>
            <div className="quote-section__image-wrap">
              <SiteImage
                src={generalTwoHMedia}
                alt="Smiling professional in conversation"
                className="quote-section__image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--audiences">
        <div className="container">
          <div className="section-heading section-heading--audiences">
            <span className="audiences__number-block">
              <span className="CharOverride-1">0</span>
              <span className="audiences__two-star">
                <span className="CharOverride-1">2</span>
                <img src={star2} alt="" className="section--audiences__star mm-star-animate" aria-hidden="true" decoding="async" />
              </span>
            </span>
            <span className="CharOverride-13 audiences__section-title">The Minds &amp; Manners Story</span>
          </div>
          <div className="audiences__story">
            <div className="audiences__story-rule" aria-hidden="true" />
            <div className="audiences__story-text">
              <p className="ParaOverride-4">
                <span className="CharOverride-11">
                  We are driven by a passion to help every individual fulfil their potential and help them grow both personally and professionally.
                </span>
              </p>
              <p className="ParaOverride-4">
                <span className="CharOverride-11">
                  By fostering this growth, we enhance personal well-being, professional progress, and customer satisfaction, and create positive, human-centred work cultures.
                </span>
              </p>
              <p className="ParaOverride-4 audiences__story-closing">
                <span className="CharOverride-11">
                  Minds &amp; Manners exists to empower individuals to take control of their stories, live with purpose, and, in doing so, raise the standard of hospitality &amp; customer service.
                </span>
              </p>
            </div>
          </div>

          <div className="audiences__relevance-intro">
            <h3 className="audiences__relevance-heading">
              <span className="CharOverride-13">Relevance</span>
              <span className="audiences__relevance-subtitle">
                <span className="CharOverride-11">— if your team is human, we&apos;re for you.</span>
              </span>
            </h3>
            <p className="audiences__relevance-lead ParaOverride-4">
              <span className="CharOverride-11">Service is a feeling. And feelings come from people.</span>
            </p>
          </div>

          <div className="audiences__grid">
            <div className="audiences__cards">
              <Link to="/hospitality" className="audiences__card audiences__card--blue">
                <div className="audiences__card-surface">
                  <img src={blueShape} alt="" className="audiences__shape" aria-hidden="true" loading="lazy" decoding="async" />
                  <div className="audiences__card-text ParaOverride-4">
                    <span className="CharOverride-21">
                      Whether you welcome
                      <br />
                      guests at a lodge or serve
                      <br />
                      customers on the phone, as
                      <br />
                      a cashier, on the floor or in
                      <br />
                      a boardroom, your people
                      <br />
                      are your biggest asset - and
                      <br />
                      your biggest risk.
                    </span>
                  </div>
                </div>
              </Link>
              <Link to="/service" className="audiences__card audiences__card--coral">
                <div className="audiences__card-surface">
                  <img src={anotherShape} alt="" className="audiences__shape" aria-hidden="true" loading="lazy" decoding="async" />
                  <div className="audiences__card-text ParaOverride-4">
                    <span className="CharOverride-21">
                      Technical training
                      <br />
                      teaches what to do.
                      <br />
                      We focus on <strong>who is</strong>
                      <br />
                      <strong>doing it</strong> - the mindset,
                      <br />
                      emotional intelligence,
                      <br />
                      and personal presence
                      <br />
                      that turn transactions into
                      <br />
                      connections.
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="audiences__buttons">
              {audienceOfferings.map((offering) => (
                <div key={offering.title} className="audiences__button-group">
                  <Link to={offering.to} className="btn-pill btn-pill--blue mm-border-blue-pill audiences__pill">
                    <span className="CharOverride-16">{offering.title}</span>
                  </Link>
                  <p className="audiences__button-desc">
                    <span className="CharOverride-6">{offering.description}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <blockquote className="audiences__quote">
            <span className="CharOverride-10 audiences__quote-line">
              &ldquo;Clients may not remember what you said or did,
            </span>
            <span className="CharOverride-10 audiences__quote-line">
              but they will remember how you made them feel.&rdquo;
            </span>
          </blockquote>
        </div>
      </section>

      <section className="section section--work-with">
        <div className="container">
          <SectionHeading number="03" title="Who We Work With" />
          <div className="work-with__layout">
            <div className="work-with__image-wrap">
              <SiteImage
                src={panoDdQqD}
                alt="Team collaborating and connecting"
                className="work-with__image"
                loading="lazy"
              />
              <div className="work-with__overlay mm-hero-overlay-box _idGenObjectStyleOverride-2">
                <p className="work-with__lead ParaOverride-4">
                  <span className="CharOverride-23">Built for every team that works with people.</span>
                </p>
                <p className="work-with__lead ParaOverride-4">
                  <span className="CharOverride-23">Built for every organisation where people serve people.</span>
                </p>
                <p className="work-with__desc ParaOverride-4">
                  <span className="CharOverride-23">
                    Our programmes are designed for anyone who wants to strengthen service culture, communication, emotional intelligence, and human connection in the workplace.
                  </span>
                </p>
              </div>
              <img
                src={starIcon}
                alt=""
                className="work-with__star mm-star-animate"
                aria-hidden="true"
                decoding="async"
              />
            </div>
            <div className="work-with__list-wrap">
              <p className="work-with__list-label">
                <span className="CharOverride-13">We work with:</span>
              </p>
              <ul className="work-with__list">
                {workWithItems.map((item) => (
                  <li key={item} className="work-with__item">
                    <span className="CharOverride-11">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="work-with__summary">
                <span className="CharOverride-10">
                  Our work is not sector-specific.
                  <br />
                  It is human-specific.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--methodology" id="approach">
        <div className="container">
          <SectionHeading number="04" title="Our Methodology" />
          <p className="methodology__intro ParaOverride-4">
            <span className="CharOverride-10">Human behaviour. Storytelling. Practical change.</span>
          </p>
          <div className="methodology__layout">
            <div className="methodology__grid">
              {methodologyItems.map((item) => (
                <div key={item.title} className="methodology__item">
                  <div className="methodology__icon">{item.icon}</div>
                  <div className="methodology__text">
                    <strong className="CharOverride-14">{item.title}</strong>
                    <span className="CharOverride-6">{item.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="methodology__summary ParaOverride-4">
              <span className="CharOverride-10">
                This is development that respects the individual, unlocks potential, and creates lasting change.
              </span>
            </p>
          </div>
        </div>
        <hr className="section-divider" />
      </section>

      <section className="section section--numbers" id="impact">
        <div className="container">
          <div className="numbers__header">
            <SectionHeading number="05" title="The Numbers" />
            <div className="numbers__cta-wrap">
              <span className="numbers__squiggle">
                <Squiggle color="#1e4bbd" size={90} />
              </span>
              <DiscoveryCallButton className="btn-pill btn-pill--blue mm-border-blue-pill">
                <span className="CharOverride-25">Book a Discovery Call</span>
              </DiscoveryCallButton>
            </div>
          </div>
          <blockquote className="numbers__intro">
            <span className="CharOverride-11">
              &ldquo;In a world where products, technology and facilities can be copied, people increasingly choose based on human connection. Your greatest competitive advantage — and your greatest risk — is your people.&rdquo;
            </span>
          </blockquote>
          <div className="numbers__cards">
            {stats.map((stat) => (
              <div key={stat.value} className={`numbers__card numbers__card--${stat.bg} ${statSurfaceClass[stat.bg]}`}>
                <span className={`numbers__value CharOverride-17 ${stat.bg === 'blue' ? 'CharOverride-27' : ''}`}>
                  {stat.value}
                </span>
                <p className={`numbers__desc ${stat.bg === 'blue' ? '' : ''}`}>
                  <span className={stat.bg === 'blue' ? 'CharOverride-21' : 'CharOverride-11'}>
                    {stat.lines.map((line) => (
                      <span key={line} className="numbers__desc-line">
                        {line}
                        <br />
                      </span>
                    ))}
                  </span>
                </p>
                {stat.bg === 'blue' && (
                  <span className="numbers__card-star">
                    <img src={starIcon} alt="" className="numbers__card-star-img mm-star-animate" aria-hidden="true" loading="lazy" decoding="async" />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--changes">
        <div className="container">
          <SectionHeading number="06" title="What Changes" />
          <p className="changes__intro ParaOverride-4">
            <span className="CharOverride-11">What shifts when your team works with us:</span>
          </p>
          <div className="changes__table" role="table" aria-label="Before and after working with Minds and Manners">
            <div className="changes__row changes__row--head" role="row">
              <div className="changes__cell changes__cell--before" role="columnheader">
                <span className="CharOverride-13">Before</span>
              </div>
              <div className="changes__cell changes__cell--after" role="columnheader">
                <span className="CharOverride-13">After</span>
              </div>
            </div>
            {changesRows.map((row) => (
              <div key={row.before} className="changes__row" role="row">
                <div className="changes__cell changes__cell--before" role="cell">
                  <span className="CharOverride-11">{row.before}</span>
                </div>
                <div className="changes__cell changes__cell--after" role="cell">
                  <span className="CharOverride-11">{row.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--why-matters">
        <div className="container">
          <SectionHeading number="07" title="Why It Matters" />
          <div className="why-matters__content">
            <p className="ParaOverride-4">
              <span className="CharOverride-11">
                Whether you work in hospitality, tourism, retail, healthcare, finance, education, government, or a corporate office, people remember how they were treated long after they forget the transaction itself.
              </span>
            </p>
            <p className="ParaOverride-4">
              <span className="CharOverride-11">
                Exceptional service, strong teams, loyal customers, and thriving organisations are built on the same foundation: emotionally intelligent people who communicate well, make others feel valued, and understand the impact of every interaction.
              </span>
            </p>
            <p className="why-matters__closing ParaOverride-4">
              <span className="CharOverride-11">
                At Minds &amp; Manners, we help organisations develop exactly those skills.
              </span>
            </p>
          </div>
          <div className="why-matters__highlight">
            <div className="why-matters__highlight-media">
              <SiteImage
                src={generalChatGpt}
                alt="Women laughing together in an office"
                className="why-matters__highlight-image"
                loading="lazy"
              />
              <span className="why-matters__highlight-accent" aria-hidden="true" />
            </div>
            <blockquote className="why-matters__highlight-quote">
              <span className="CharOverride-10">
                &ldquo;In a world where people choose based on human connection, your greatest asset - and your greatest risk - is your people.&rdquo;
              </span>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section section--moments" aria-label="Moments from our work">
        <div className="container">
          <div className="moments-gallery">
            {momentsGallery.map((item) => (
              <div key={item.src} className="moments-gallery__item">
                <img src={item.src} alt={item.alt} loading="lazy" decoding="async" width={520} height={390} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--testimonials">
        <div className="container">
          <SectionHeading number="08" title="Testimonials">
            <span className="section--testimonials__arrow">
              <ArrowDown color="#e85d3f" size={28} />
            </span>
          </SectionHeading>
          <div className="testimonials__grid">
            {testimonials.map((t) => (
              <div key={t.quote} className="testimonials__item">
                <div className="testimonials__avatar">
                  <img src={t.image} alt="" loading="lazy" decoding="async" />
                </div>
                <blockquote className="testimonials__quote">
                  <span className="CharOverride-6">&ldquo;{t.quote}&rdquo;</span>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer variant="blue" />
    </div>
  )
}
