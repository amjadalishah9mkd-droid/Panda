const principles = [
  "Clarity before decoration",
  "Motion with a reason",
  "Details form the system",
];

export default function About() {
  return (
    <section id="about" className="about content-section" aria-labelledby="about-title">
      <div className="section-frame">
        <header className="about__header">
          <p className="section-kicker type-label">
            <span>02</span>
            About / Approach
          </p>
          <h2 id="about-title" className="about__title">
            Interfaces with intent.
            <span>Engineering with care.</span>
          </h2>
        </header>

        <div className="about__layout">
          <p className="about__lead">
            I'm Amjad, a frontend developer shaping a practice around precise
            interfaces, thoughtful interaction, and dependable engineering.
          </p>

          <div className="about__narrative">
            <div className="about__passage">
              <p className="type-metadata">01 / Focus</p>
              <p>
                I focus on the point where visual design and frontend systems
                meet: translating ideas into responsive, accessible experiences
                that feel considered at every scale.
              </p>
            </div>
            <div className="about__passage">
              <p className="type-metadata">02 / Process</p>
              <p>
                My approach is iterative and detail-led. I learn by building,
                questioning each decision, refining the system, and keeping the
                implementation as clear as the interface it supports.
              </p>
            </div>
            <div className="about__passage">
              <p className="type-metadata">03 / Direction</p>
              <p>
                I want to create digital products that are useful, expressive,
                and memorable, where motion and emerging web technology deepen
                the experience without competing with the content.
              </p>
            </div>
          </div>

          <aside className="about__principles" aria-label="Working principles">
            <p className="type-label">Working principles</p>
            <ol>
              {principles.map((principle, index) => (
                <li key={principle}>
                  <span className="type-metadata">0{index + 1}</span>
                  <span>{principle}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
