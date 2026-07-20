import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import DiscoveryCallButton from '../components/DiscoveryCallButton'
import { StarBurst } from '../components/Doodles'
import { youthHeroImg, youthIntroImg } from '../assets/siteImages'
import SiteImage from '../components/SiteImage'
import './SchoolYouthPage.css'

const coverThemes = [
  {
    title: 'Foundations of Leadership',
    items: [
      'Principles of transformational leadership',
      'Stories of leaders who changed things for the better',
    ],
  },
  {
    title: 'Knowing Yourself',
    items: [
      'Personal development and value discovery',
      'Vision board exercises',
      'The stories we tell ourselves, and how to write a new one — examining the narratives young people carry about themselves, and learning to write a new one consciously.',
      'Neuroplasticity and growth mindset',
    ],
  },
  {
    title: 'Leading Others',
    items: [
      'Basics of project management',
      'Communication and conflict management',
      'Basics of systems thinking and design',
    ],
  },
]

const formats = [
  {
    title: 'Two-day standard course',
    description:
      'Our full immersion experience, ideal for building lasting habits and deep peer connections among a group of young leaders.',
  },
  {
    title: 'One-day masterclass',
    description:
      'A focused, high-energy day for schools or organisations wanting maximum impact within a single school or work day.',
  },
  {
    title: 'Keynote presentation',
    description:
      'A compact, high-impact talk for assemblies, conferences or leadership days, introducing key ideas and sparking reflection.',
  },
]

export default function SchoolYouthPage() {
  return (
    <div className="school-youth">
      <Header activeLink="youth" ctaStyle="outline" />

      <section className="youth-hero">
        <div className="container">
          <div className="youth-hero__layout">
            <div className="youth-hero__image-wrap">
              <SiteImage
                src={youthHeroImg}
                alt="Young people collaborating and learning together"
                className="youth-hero__image"
                priority
              />
              <div className="youth-hero__overlay-box mm-hero-overlay-box _idGenObjectStyleOverride-2">
                <h1 className="youth-hero__headline">
                  <span className="CharOverride-23">
                    The leaders who will shape tomorrow are sitting in our classrooms today.
                  </span>
                </h1>
                <p className="youth-hero__subtext ParaOverride-4">
                  <span className="CharOverride-23">
                    We help them discover who they are, what they stand for, and how to lead with confidence, courage and purpose.
                  </span>
                </p>
              </div>
              <span className="youth-hero__starburst">
                <StarBurst size={24} />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section youth-intro">
        <div className="container">
          <div className="youth-intro__layout">
            <div className="youth-intro__content">
              <h2 className="youth-intro__title">
                Growing the next generation of leaders, for Namibia and <em>beyond</em>
              </h2>
              <div className="youth-intro__body">
                <p>
                  Leadership needs to be developed and nurtured to reach its full potential.
                </p>
                <p>
                  The teenage years are when identity, confidence and character are still being written. The young people in your classrooms and programmes are forming the beliefs about themselves and the world that will carry into every leadership role they&apos;ll ever hold. <strong>We help them write a stronger story.</strong>
                </p>
                <p>
                  Designed for schools, youth groups, and private and public organisations that are serious about investing in the next generation, this programme meets young people where they are. It equips them with the tools, language and self-understanding to lead — in the classroom, on the sports field, at home, and eventually in the workplaces and communities they will one day shape.
                </p>
              </div>
            </div>
            <div className="youth-intro__media">
              <SiteImage
                src={youthIntroImg}
                alt="Young leader engaged in learning"
                className="youth-intro__image"
                loading="lazy"
              />
              <span className="youth-intro__accent" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="section youth-cover">
        <div className="container">
          <SectionHeading number="01" title="What We Cover" />
          <p className="youth-cover__intro">
            Every session is built around the same conviction: <strong>leadership begins with knowing yourself.</strong> From that foundation, we work outward into how young leaders think, communicate, plan and lead others. Depending on the format chosen, the programme draws from the following themes:
          </p>
          <div className="youth-cover__grid">
            {coverThemes.map((theme) => (
              <div key={theme.title} className="youth-cover__card">
                <h3 className="youth-cover__card-title">{theme.title}</h3>
                <ul className="youth-cover__list">
                  {theme.items.map((item) => (
                    <li key={item} className="youth-cover__list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section youth-formats">
        <div className="container">
          <SectionHeading number="02" title="Formats to Fit Your Setting" />
          <p className="youth-formats__intro">
            We tailor the depth and pace of the programme to the time you have available and the outcomes you&apos;re after:
          </p>
          <div className="youth-formats__grid">
            {formats.map((format) => (
              <div key={format.title} className="youth-formats__card">
                <h3 className="youth-formats__card-title">{format.title}</h3>
                <p className="youth-formats__card-desc">{format.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section youth-why">
        <div className="container">
          <SectionHeading number="03" title="Why It Matters" />
          <div className="youth-why__content">
            <p>
              Young people who understand their own values, think clearly under pressure, and know how to bring others along with them don&apos;t just become better leaders — they become steadier, more grounded people.
            </p>
            <p className="youth-why__highlight">
              Namibia&apos;s future runs through its schools and youth organisations today; this programme is our contribution to that future, one group of young leaders at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="youth-cta">
        <div className="container">
          <div className="youth-cta__inner">
            <h2 className="youth-cta__title">We&apos;d love to design a session for your school or organisation.</h2>
            <p className="youth-cta__text">
              Get in touch to discuss dates, group size, and the format that best fits your goals.
            </p>
            <DiscoveryCallButton className="btn-pill btn-pill--white mm-border-gold-pill youth-cta__btn">
              <span className="CharOverride-25">Book a Discovery Call</span>
            </DiscoveryCallButton>
          </div>
        </div>
      </section>

      <Footer variant="cream" />
    </div>
  )
}
