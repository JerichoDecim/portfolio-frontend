import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#0a131e"
          />
        </svg>
      </div>

      <div className="footer-bar">
        <span className="footer-text">© 2026 | Engr. Jericho B. Baal</span>
        <div className="footer-dots">
          <span className="dot dot-cyan" />
          <span className="dot dot-yellow" />
          <span className="dot dot-orange" />
        </div>
      </div>
    </footer>
  );
}
