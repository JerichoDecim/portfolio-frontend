import "./Tech.css";

const TECH_CATEGORIES = [
  {
    id: "electronics",
    label: "Embedded Systems",
    icons: [
      { src: "/assets/arduino.png", alt: "Arduino" },
      { src: "/assets/ESP32.png", alt: "Espressif ESP32" },
      { src: "/assets/kicad.png", alt: "KiCad" },
      { src: "/assets/c.png", alt: "c language" },
      { src: "/assets/c++.png", alt: "c ++ language" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icons: [
      { src: "/assets/html.png", alt: "HTML" },
      { src: "/assets/css.png", alt: "CSS" },
      { src: "/assets/js.png", alt: "JavaScript" },
      { src: "/assets/react.png", alt: "React" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icons: [
      { src: "/assets/node.png", alt: "Node.js" },
      { src: "/assets/express.png", alt: "Express.js" },
      { src: "/assets/postgresql.png", alt: "PostgreSQL" },
      { src: "/assets/python.png", alt: "Python" },
    ],
  },
  {
    id: "technologies",
    label: "Technologies",
    icons: [
      { src: "/assets/vs.png", alt: "VS Code" },
      { src: "/assets/stm.png", alt: "STM32 Cube IDE" },
      { src: "/assets/git.png", alt: "Git" },
      { src: "/assets/siemens.png", alt: "Siemens NX" },
    ],
  },
];

const TECH_BULLETS = [
  "Embedded Systems - Arduino, ESP32, peripherals (GPIO, ADC), modules, IoT development",
  "Programming - C, C++, Python, VS Code, STM32 Cube IDE",
  "Electronics and Hardware Design - Schematic & PCB Design (KiCad), circuit debugging and testing",
  "Engineering & Lab Tools - Siemens NX , Git (version control), anechoic chamber",
  "Web Development - HTML, CSS, Javascript, Node.js, Express.js, React.js, PostgreSQL",
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
        

        <TechCategory key={TECH_CATEGORIES[3].id} {...TECH_CATEGORIES[3]} />

        <div className="right-text">
          <pre aria-label="Tech stack summary">
            <span className="code-keyword">function</span>{" "}
            <span className="code-var">tech</span>
            {"() {\n"}
            {"  "}
            <span className="code-keyword">return</span>
            {" [\n"}
            {TECH_BULLETS.map((line, i) => (
              <span key={i}>
                {"    "}
                <span className="code-str">{`"${line}"`}</span>
                {i < TECH_BULLETS.length - 1 ? ",\n" : ",\n"}
              </span>
            ))}
            {"  ];\n"}
            {"}"}
          </pre>
        </div>
      </div>
    </section>
  );
}
