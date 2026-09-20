import HeroVisual from "../ui/HeroVisual";

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__grid">
        <div className="hero__status type-label">
          <span className="hero__status-line" aria-hidden="true" />
          Available for creative projects
        </div>

        <div className="hero__heading">
          <p className="hero__index type-metadata" aria-hidden="true">
            01 / Portfolio
          </p>
          <h1 id="hero-title" className="hero__name">
            AMJAD
          </h1>
          <p className="hero__role">Frontend Developer</p>
        </div>

        <div className="hero__visual-wrap">
          <HeroVisual />
        </div>

        <div className="hero__intro">
          <p>
            I build thoughtful, interactive digital experiences with modern web
            technologies.
          </p>
          <div className="hero__actions" aria-label="Portfolio actions">
            <a className="button button--primary" href="#work">
              <span>View my work</span>
              <span aria-hidden="true">↘</span>
            </a>
            <a className="button button--secondary" href="#contact">
              <span>Let's connect</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <dl className="hero__metadata type-metadata">
          <div>
            <dt>Build</dt>
            <dd>React / TypeScript</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Interaction / Interface</dd>
          </div>
          <div>
            <dt>Canvas</dt>
            <dd>Scene ready</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
