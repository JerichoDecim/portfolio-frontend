import "./About.css";
import Gallery from "./Gallery"

const BIO_LINES = [
  `Hello! I am Jericho — Echo to most people, Sir Echo to my students, and a father of 12 rescued cats. I am a licensed Electronics Engineer and Technician with a knack for robotics and microcontroller systems, IoT research and development, programming, and a bit of web development.`,
  `My teaching career is a return of service for my DOST scholarship during my undergraduate studies. Beyond teaching, I have had the privilege of mentoring Senior High School students in robotic systems, sumobots, line-racing robots, microcontrollers, IoT research and development, and programming — helping them grow to their full potential.`,
];

export default function About() {
  return (
    <section className="about-container" id="about-me">
      <div className="about-top">
        <div className="about-left">
          <img
            src="/assets/heroprofile.png"
            alt="Portrait of Jericho B. Baal"
          />
        </div>

        <div className="about-right">
          <div className="hero-code-block">
            <pre>
              <span className="code-keyword">let </span>
              <span>about</span>
              {" =\n"}
              {BIO_LINES.map((line, i) => (
                <span key={i} className="about-bio-line">
                  {`      `}
                  <span className="code-str">
                    {i === 0 ? `"` : ""}
                    {line}
                    {i === BIO_LINES.length - 1 ? `"` : ""}
                  </span>
                  {"\n"}
                </span>
              ))}
            </pre>
          </div>
        </div>
      </div>

      <div className="about-bottom">
        <Gallery />
      </div>
    </section>
  );
}