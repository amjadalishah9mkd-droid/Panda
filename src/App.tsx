const cards = [
  {
    title: "Vite + React + TypeScript",
    body: "Hot module reload dev server running inside the Alloy sandbox on port 3000.",
  },
  {
    title: "Dockerized",
    body: "Started from docker-compose.alloy.yaml with network_mode: host.",
  },
  {
    title: "Ready to build",
    body: "Edit src/App.tsx and the page updates instantly.",
  },
];

export default function App() {
  return (
    <main
      style={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "64px 24px",
        gap: 40,
      }}
    >
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          textAlign: "center",
          maxWidth: 640,
        }}
      >
        <span
          style={{
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--muted)",
            border: "1px solid var(--line)",
            background: "var(--surface)",
            borderRadius: 999,
            padding: "6px 14px",
          }}
        >
          Panda
        </span>
        <h1 style={{ margin: 0, fontSize: 44, lineHeight: 1.1 }}>
          The app is running
        </h1>
        <p style={{ margin: 0, fontSize: 17, color: "var(--muted)" }}>
          This starter confirms the Alloy Docker Compose environment boots and
          serves the frontend correctly.
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
          width: "100%",
          maxWidth: 960,
        }}
      >
        {cards.map((card) => (
          <article
            key={card.title}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: 14,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 17 }}>{card.title}</h2>
            <p style={{ margin: 0, fontSize: 14, color: "var(--muted)" }}>
              {card.body}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
