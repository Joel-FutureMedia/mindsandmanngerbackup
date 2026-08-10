import { Link } from 'react-router-dom'
import DiscoveryCallButton from '../components/DiscoveryCallButton'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import HeroSlider from '../components/HeroSlider'
import { ArrowDown, Squiggle } from '../components/Doodles'
import {
  arrowone,
  generalChatGpt,
  generalTwoHMedia,
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

const stats = [
  {
    value: '21%',
    tone: 'peach',
    title: 'Higher profitability',
    description: 'Linked to highly engaged teams and positive workplace cultures.',
  },
  {
    value: '70%',
    tone: 'gold',
    title: 'Leadership & culture',
    description: 'Team engagement is largely shaped by leadership and workplace culture.',
    source: 'Gallup',
  },
  {
    value: '86%',
    tone: 'cream',
    title: 'Experience premium',
    description: 'Customers are willing to pay more for a better customer experience.',
  },
  {
    value: '90%',
    tone: 'blue',
    title: 'Emotional intelligence',
    description: 'Top performers consistently demonstrate strong emotional intelligence.',
  },
]

const testimonials = [
  {
    name: 'Amanda Roux',
    company: 'Luxury Lodge, Greater Kruger',
    quote: "This training didn't just improve service - it changed how our team sees themselves.",
  },
  {
    name: 'Johan van Wyk',
    company: 'Hospitality Group, Cape Town',
    quote: 'Our staff are more confident, more engaged, and more aligned with what we stand for.',
  },
  {
    name: 'Naledi Molefe',
    company: 'Tourism Operator, Namibia',
    quote: "We've done training before. This was the first time it actually stuck.",
  },
]

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

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
              <div className="human-side__accent" aria-hidden="true">
                <img
                  src={starIcon}
                  alt=""
                  className="human-side__star mm-star-animate"
                  decoding="async"
                />
                <div className="human-side__rule" />
              </div>

              <div className="human-side__content">
                <h2 id="human-side-title" className="human-side__title">
                  <span className="CharOverride-13">The Human Side of Service</span>
                </h2>

                <div className="human-side__body">
                  <p className="ParaOverride-4">
                    <span className="CharOverride-11">
                      Every exceptional experience begins in the same place - not in a manual, process, or script. It begins in the mind of the person facing another human being.
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
          <SectionHeading number="01" title="What is Minds & Manners?" />
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

          <div className="audiences__relevance">
            <p className="audiences__relevance-label">Relevance</p>
            <h3 className="audiences__relevance-lead">
              If your team is human, we&apos;re for you.
            </h3>
            <p className="audiences__relevance-sub">
              Service is a feeling. <em>And feelings come from people.</em>
            </p>
          </div>

          <div className="audiences__grid">
            <div className="audiences__cards">
              <Link to="/hospitality" className="audiences__panel audiences__panel--blue">
                <svg className="audiences__panel-shape" viewBox="0 0 360 300" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 0 H250 C320 0 360 40 360 110 V300 H95 C30 300 0 255 0 185 Z" />
                </svg>
                <div className="audiences__panel-body">
                  <p className="audiences__panel-text">
                    Whether you welcome guests at a lodge or serve customers on the phone, as a cashier, on the floor or in a boardroom, your people are your biggest asset — and your biggest risk.
                  </p>
                </div>
              </Link>
              <Link to="/service" className="audiences__panel audiences__panel--coral">
                <svg className="audiences__panel-shape" viewBox="0 0 360 300" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M24 0 H336 C350 0 360 10 360 24 V170 C360 250 300 300 210 300 H24 C10 300 0 290 0 276 V24 C0 10 10 0 24 0 Z" />
                </svg>
                <div className="audiences__panel-body">
                  <p className="audiences__panel-text">
                    Technical training teaches what to do. We focus on <strong>who is doing it</strong> — the mindset, emotional intelligence, and personal presence that turn transactions into connections.
                  </p>
                </div>
              </Link>
            </div>
            <div className="audiences__buttons">
              {audienceOfferings.map((offering) => (
                <div key={offering.title} className="audiences__button-group">
                  <Link to={offering.to} className="btn-pill btn-pill--blue mm-border-blue-pill audiences__pill">
                    <span className="CharOverride-16">{offering.title}</span>
                  </Link>
                  <p className="audiences__button-desc">{offering.description}</p>
                </div>
              ))}
            </div>
          </div>

          <blockquote className="audiences__quote">
            <p>
              &ldquo;Clients may not remember what you said or did, but they will remember how you made them feel.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      <section className="section section--work-with" id="who-we-work-with">
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
            <p>
              &ldquo;In a world where products, technology and facilities can be copied, people increasingly choose based on human connection. Your greatest competitive advantage — and your greatest risk — is your people.&rdquo;
            </p>
          </blockquote>

          <div className="numbers__grid">
            {stats.map((stat) => (
              <article key={stat.value} className={`numbers__stat numbers__stat--${stat.tone}`}>
                <div className="numbers__stat-top">
                  <span className="numbers__value">{stat.value}</span>
                  {stat.source ? <span className="numbers__source">{stat.source}</span> : null}
                </div>
                <h3 className="numbers__title">{stat.title}</h3>
                <p className="numbers__desc">{stat.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--changes">
        <div className="container">
          <SectionHeading number="06" title="What Changes" />
          <p className="changes__intro">What shifts when your team works with us:</p>

          <div className="changes__legend" aria-hidden="true">
            <span className="changes__legend-item changes__legend-item--before">Before</span>
            <span className="changes__legend-arrow" />
            <span className="changes__legend-item changes__legend-item--after">After</span>
          </div>

          <div className="changes__list" aria-label="Before and after working with Minds and Manners">
            {changesRows.map((row, index) => (
              <article key={row.before} className="changes__item">
                <div className="changes__side changes__side--before">
                  <span className="changes__label">Before</span>
                  <p className="changes__text">{row.before}</p>
                </div>
                <div className="changes__connector" aria-hidden="true">
                  <span className="changes__connector-line" />
                  <span className="changes__connector-arrow" />
                </div>
                <div className="changes__side changes__side--after">
                  <span className="changes__label">After</span>
                  <p className="changes__text">{row.after}</p>
                </div>
                <span className="changes__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </article>
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
            <p className="why-matters__closing">
              At Minds &amp; Manners, we help organisations develop exactly those skills.
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

      <section className="section section--testimonials">
        <div className="container">
          <SectionHeading number="08" title="Testimonials">
            <span className="section--testimonials__arrow">
              <ArrowDown color="#e85d3f" size={28} />
            </span>
          </SectionHeading>
          <div className="testimonials__grid">
            {testimonials.map((t) => (
              <figure key={t.quote} className="testimonials__item">
                <figcaption className="testimonials__meta">
                  <span className="testimonials__name">{t.name}</span>
                  <span className="testimonials__company">{t.company}</span>
                </figcaption>
                <div className="testimonials__avatar" aria-hidden="true">
                  {getInitials(t.name)}
                </div>
                <blockquote className="testimonials__quote">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Footer variant="blue" />
    </div>
  )
}
