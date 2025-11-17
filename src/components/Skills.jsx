export default function Skills() {
  const skills = [
    "JavaScript (ES6+)",
    "React & Vite",
    "Git, GitHub & Version Control",
    "Problem Solving",
    "Team Collaboration"
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>

      <div className="grid">
        {skills.map((s, i) => (
          <div className="card skill-card" key={i}>
            <p>{s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
