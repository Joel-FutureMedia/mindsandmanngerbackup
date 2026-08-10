import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import { teamChristineImg, teamElmarieImg, teamHeroImg } from '../assets/siteImages'
import SiteImage from '../components/SiteImage'
import './TeamPage.css'

const teamMembers = [
  {
    name: 'Christine Hugo',
    email: 'christine@onceuponmind.com',
    image: teamChristineImg,
    imageAlt: 'Christine Hugo',
    paragraphs: [
      'An experienced Creative Thinking and Communication Specialist with over 25 years of experience. She is a highly skilled writer, accomplished business leader, and expert communications specialist. Driven by a passion for transforming individuals into their best selves, she uses storytelling to encourage individuals to take control of their lives and create their own stories.',
      "Her work has been showcased in established magazine publications, film documentaries, and books. As the founder of OnceUponMind, a creative thinking consultancy, Christine passionately promotes the concept of 'narrative authority '.",
      'This concept emphasises that every individual has the power to shape their own story, and this belief drives her to empower individuals to discover their inner heroes and craft life stories that positively impact the world.',
    ],
  },
  {
    name: 'Elmarie van Rensburg',
    email: 'elmarie@onceuponmind.com',
    image: teamElmarieImg,
    imageAlt: 'Elmarie van Rensburg',
    paragraphs: [
      'With her degree & expertise in Consumer Science and years of valuable experience in the hospitality and service industry, Elmarie has gained a profound understanding of the complex and demanding nature of customer service.',
      'Elmarie is an experienced project consultant with a proven track record across various industries. With a background in project management, PR, marketing, sales, and client relations management, she brings a unique blend of versatility and a comprehensive approach to her work.',
      'With a wealth of experience, diverse skill set, and genuine dedication to making a difference, Elmarie is a valuable asset to any organisation seeking strategic guidance and innovative solutions for the unique challenges and opportunities in the service industry.',
      'Her current involvement with various social enterprises & non-profit organisations has further strengthened her passion for helping empower people to reach their full potential.',
    ],
  },
]

const closingParagraphs = [
  'Minds & Manners is not a conventional course or a once-off team-building exercise. It is a reflective, introspective workshop experience that starts with the person and works outward - into relationships, teams, leadership and culture.',
  'We help people work together with greater awareness and trust, and help leaders lead with courage, clarity, accountability and humanity.',
  "We'd love to work with you to bring out the best in your team and create a personal, warm, and unforgettable company culture.",
]

export default function TeamPage() {
  return (
    <div className="team-page">
      <Header activeLink="team" ctaStyle="outline" />

      <section className="team-hero">
        <div className="team-hero__copy-band">
          <div className="container team-hero__copy">
            <p className="team-hero__eyebrow">The people behind Minds &amp; Manners</p>
            <h1 className="team-hero__title">
              Meet the <em>Team</em>
            </h1>
            <p className="team-hero__intro">
              Two specialists united by a belief that exceptional service, culture, and leadership begin with the human being.
            </p>
          </div>
        </div>
        <div className="team-hero__media">
          <SiteImage
            src={teamHeroImg}
            alt="Minds & Manners team collaborating"
            className="team-hero__image"
            priority
          />
        </div>
      </section>

      <section className="section team-profiles">
        <div className="container">
          <SectionHeading number="01" title="Our Founders" />
          <div className="team-profiles__list">
            {teamMembers.map((member, index) => (
              <article
                key={member.name}
                className={`team-profile ${index % 2 === 1 ? 'team-profile--reverse' : ''}`}
              >
                <div className="team-profile__media">
                  <div className="team-profile__glow" aria-hidden="true" />
                  <div className="team-profile__image-wrap">
                    <SiteImage
                      src={member.image}
                      alt={member.imageAlt}
                      className="team-profile__image"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="team-profile__content">
                  <h2 className="team-profile__name">{member.name}</h2>
                  <a href={`mailto:${member.email}`} className="team-profile__email">
                    {member.email}
                  </a>
                  <div className="team-profile__bio">
                    {member.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="team-closing">
        <div className="container">
          <div className="team-closing__copy">
            {closingParagraphs.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 40)}
                className={index === closingParagraphs.length - 1 ? 'team-closing__highlight' : undefined}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <Footer variant="blue" />
    </div>
  )
}
