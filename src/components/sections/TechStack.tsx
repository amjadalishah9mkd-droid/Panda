type StackCategory = {
  index: string;
  title: string;
  mode: string;
  technologies: readonly string[];
};

const stackCategories: readonly StackCategory[] = [
  {
    index: "01",
    title: "Frontend",
    mode: "Building with",
    technologies: ["React", "Responsive CSS", "Component architecture", "Accessible UI"],
  },
  {
    index: "02",
    title: "Languages",
    mode: "Working with",
    technologies: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    index: "03",
    title: "Tools",
    mode: "In the workflow",
    technologies: ["Vite", "Git / GitHub", "npm", "Browser DevTools"],
  },
  {
    index: "04",
    title: "Currently exploring",
    mode: "In progress",
    technologies: ["WebGL fundamentals", "Motion systems", "3D for the web", "Creative coding"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="tech-stack content-section" aria-labelledby="stack-title">
      <div className="section-frame">
        <header className="tech-stack__header">
          <p className="section-kicker type-label">
            <span>03</span>
            Stack / Practice
          </p>
          <div>
            <h2 id="stack-title" className="tech-stack__title">
              A focused toolkit,
              <span>kept in motion.</span>
            </h2>
            <p className="tech-stack__intro">
              Technologies I use to build today, alongside the areas I am
              actively learning through hands-on work.
            </p>
          </div>
        </header>

        <div className="tech-stack__categories">
          {stackCategories.map((category) => (
            <article key={category.title} className="tech-category">
              <header className="tech-category__header">
                <span className="tech-category__index type-metadata">
                  {category.index}
                </span>
                <h3>{category.title}</h3>
                <span className="tech-category__mode type-metadata">
                  {category.mode}
                </span>
              </header>
              <ul>
                {category.technologies.map((technology) => (
                  <li key={technology}>
                    <span>{technology}</span>
                    <span aria-hidden="true">↗</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="tech-stack__note type-metadata">
          <span>Practice over percentages</span>
          <span>Always iterating / Always learning</span>
        </div>
      </div>
    </section>
  );
}
