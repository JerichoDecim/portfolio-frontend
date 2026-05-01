import "./Tech.css";

const TECH_CATEGORIES = [
  {
    id: "electronics",
    label: "Electronics",
    icons: [
      { src: "/assets/arduino.png", alt: "Arduino" },
      { src: "/assets/ESP32.png",   alt: "Espressif ESP32" },
      { src: "/assets/kicad.png",   alt: "KiCad" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icons: [
      { src: "/assets/html.png",  alt: "HTML" },
      { src: "/assets/css.png",   alt: "CSS" },
      { src: "/assets/js.png",    alt: "JavaScript" },
      { src: "/assets/react.png", alt: "React" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icons: [
      { src: "/assets/node.png",       alt: "Node.js" },
      { src: "/assets/express.png",    alt: "Express.js" },
      { src: "/assets/postgresql.png", alt: "PostgreSQL" },
      { src: "/assets/python.png",     alt: "Python" },
    ],
  },
  {
    id: "technologies",
    label: "Technologies",
    icons: [
      { src: "/assets/vs.png",      alt: "VS Code" },
      { src: "/assets/git.png",     alt: "Git" },
      { src: "/assets/siemens.png", alt: "Siemens NX" },
    ],
  },
];

const TECH_BULLETS = [
  "Embedded Systems & Robotics — Arduino, ESP32, robotics sensors, modules, IoT development",
  "Programming — C, Python, HTML, CSS, JavaScript",
  "Schematic & PCB Design — KiCad, circuit debugging and testing",
  "Web Development — Node.js, Express.js, React, PostgreSQL, Git",
  "Engineering Tools — Siemens NX, SUMO: Simulation of Urban Mobility",
];

function TechCategory({ label, icons }) {
  return (
    <div className="tech-category">
      <h2 className="tech-label">{label}</h2>
      <div className="set">
        {icons.map(({ src, alt }) => (
          <img key={alt} src={src} alt={`${alt} logo`} />
        ))}
      </div>
    </div>
  );
}

export default function Tech() {
  return (
    <section className="tech-container" id="tech-stack">
      
      <div className="tech-left">
        {TECH_CATEGORIES.slice(0, 3).map((cat) => (
          <TechCategory key={cat.id} {...cat} />
        ))}
      </div>

      
      <div className="tech-right">
        <div className="right-text">
          <pre aria-label="Tech stack summary">
            <span className="code-keyword">function</span>
            {" tech() "}
            <span className="code-var">{"{"}</span>
            {"\n"}
            {TECH_BULLETS.map((line, i) => (
              <span key={i}>{`  • ${line}\n`}</span>
            ))}
            <span className="code-var">{"}"}</span>
          </pre>
        </div>

        <TechCategory key={TECH_CATEGORIES[3].id} {...TECH_CATEGORIES[3]} />
      </div>
    </section>
  );
}