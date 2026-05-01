import React from "react";
import "./Socials.css";

function Socials() {
  return (
    <div className="container-socials">
      <a
        href="https://www.linkedin.com/in/jericho-baal-503163333/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="socials"
          src="/assets/linkedin.png"
          alt="linkedin icon"
        />
      </a>

      <a
        href="https://github.com/JerichoDecim"
        target="_blank"
        rel="noreferrer"
      >
        <img className="socials" src="/assets/github.png" alt="github icon" />
      </a>

      <a
        href="https://mail.google.com/mail/?view=cm&to=jerichobaal1730@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <img className="socials" src="/assets/gmail.png" alt="Gmail" />
      </a>


  

    </div>
  );
}

export default Socials;
