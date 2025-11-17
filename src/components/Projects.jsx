export default function Projects() {
  const projects = [
    {
      name: "Todo App",
      desc: "A simple task manager built using React.",
      link: "https://github.com"
    },
    {
      name: "Weather App",
      desc: "Fetches weather data from an API using async/await.",
      link: "https://github.com"
    },
    {
      name: "Portfolio Website",
      desc: "The site you are viewing right now!",
      link: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="grid">
        {projects.map((p, i) => (
          <div className="card project-card" key={i}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer" className="project-btn">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
