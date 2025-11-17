export default function Hobbies() {
  const hobbies = [
    {
      title: "Coding",
      desc: "I love creating projects that solve real problems and learning new technologies."
    },
    {
      title: "Photography",
      desc: "Capturing moments and landscapes helps me express creativity in a unique way."
    },
    {
      title: "Reading",
      desc: "I enjoy reading tech articles and books on personal growth and innovation."
    }
  ];

  return (
    <section id="hobbies" className="section">
      <h2 className="section-title">Hobbies & Interests</h2>

      <div className="grid">
        {hobbies.map((h, i) => (
          <div className="card hobby-card" key={i}>
            <h3>{h.title}</h3>
            <p>{h.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
