import { useEffect, useState } from "react";
import "./Navbar.css";

const links = ["Home", "About Me", "Tech Stack", "Projects", "Contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observers = [];

    links.forEach((item) => {
      const id = item.toLowerCase().replace(/\s+/g, "-");
      const section = document.getElementById(id);

      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handler = (e) => {
      if (!e.target.closest(".navbar")) setMenuOpen(false);
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [menuOpen]);

  const CVButton = ({ extraClass = "" }) => (
    <a
      href="/assets/JerichoBaal_CV.pdf"
      download="Jericho Baal_CV.pdf"
      className={`button ${extraClass}`}
      onClick={() => setMenuOpen(false)}
    >
      <svg
        className="btn-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>

      Download CV
    </a>
  );

  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        <div className="card-dots">
          <span className="dot dot-cyan" />
          <span className="dot dot-yellow" />
          <span className="dot dot-orange" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="nav-right">

        {/* Desktop links */}
        <ul className="navbar-links">
          {links.map((item) => {
            const id = item.toLowerCase().replace(/\s+/g, "-");

            return (
              <li key={item}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? "active" : ""}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CV ONLY */}
        <div className="desktop-only">
          <CVButton />
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`ham-line ${menuOpen ? "open" : ""}`} />
          <span className={`ham-line ${menuOpen ? "open" : ""}`} />
          <span className={`ham-line ${menuOpen ? "open" : ""}`} />
        </button>

      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>

        <ul>
          {links.map((item) => {
            const id = item.toLowerCase().replace(/\s+/g, "-");

            return (
              <li key={item}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile CV ONLY */}
        <CVButton extraClass="mobile-cv-btn" />

      </div>

    </nav>
  );
}