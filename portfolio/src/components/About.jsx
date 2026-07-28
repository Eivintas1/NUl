import './About.css'

const stats = [
  { number: '5+', label: 'Years experience' },
  { number: '40+', label: 'Projects delivered' },
  { number: '12', label: 'Happy clients' },
]

const skills = [
  'React', 'TypeScript', 'Node.js', 'Python',
  'Figma', 'PostgreSQL', 'AWS', 'GraphQL',
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__grid">
        <div className="about__left">
          <p className="section-label">01 &mdash; About</p>
          <h2 className="about__heading">
            I craft interfaces<br />
            that people remember.
          </h2>
        </div>
        <div className="about__right">
          <p className="about__text">
            I'm a full-stack developer and designer based in San Francisco.
            I believe great software starts with empathy — understanding who
            uses it, what they need, and how they feel. My work spans from
            early-stage startups to established platforms, always with the
            same goal: make something that works beautifully.
          </p>
          <p className="about__text">
            When I'm not coding, you'll find me sketching interfaces in a
            coffee shop, hiking coastal trails, or deep in a documentary
            about typography.
          </p>
          <div className="about__stats">
            {stats.map(({ number, label }) => (
              <div key={label} className="stat">
                <span className="stat__number">{number}</span>
                <span className="stat__label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about__skills">
        <p className="section-label">Tools &amp; Technologies</p>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill} className="skills-list__item">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
