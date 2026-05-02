import { useState, useEffect } from "react";
import "./Hero.css";
import Socials from "../Shared/Socials";

function useTypewriter(text, speed = 200) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

const PROFILE = [
  { key: "ece",    value: "Electronics Engineer" },
  { key: "ect",    value: "Electronics Technician" },
  { key: "post",   value: "Design Engineer" },
  { key: "school", value: "Special Science Teacher I – Robotics Coach" },
];

export default function Hero() {
  const displayed = useTypewriter("Engineer");

  return (
    <section className="hero" id="home">
      <p className="hero-label">
        {displayed}
        <span className="cursor" aria-hidden="true">|</span>
      </p>

      <h1 className="hero-name">
        <span>Jericho B. Baal, ECT</span></h1>

      <div className="hero-code-block">
        <pre aria-label="Profile summary">
          <span className="code-keyword">const</span>
          {" profile = "}
          <span className="code-var">{"{"}</span>
          {"\n"}
          {PROFILE.map(({ key, value }, i) => (
            <span key={key}>
              {"  "}{"  "}{key} : <span className="code-str">"{value}"</span>
              {i < PROFILE.length - 1 ? "," : ""}
              {"\n"}
            </span>
          ))}
          <span className="code-var">{"}"}</span>
        </pre>
      </div>

      <Socials className="socials" />
    </section>
  );
}