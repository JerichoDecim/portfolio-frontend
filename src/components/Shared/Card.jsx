import { useState } from "react";
import "./Card.css";

function Card({ image, alt = "card image", description = "", link = "#" }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      <div className="card-titlebar">
        <div className="card-searchbar" />
        <div className="card-dots">
          <span className="dot dot-cyan" />
          <span className="dot dot-yellow" />
          <span className="dot dot-orange" />
        </div>
      </div>

      <div className="card-image-wrapper">
        {image
          ? <img src={image} alt={alt} className="card-image" />
          : <div className="card-placeholder">No Image</div>
        }

        {visible && description && (
          <div className="card-popup">
            <p className="card-popup-text">{description}</p>
            <a
              href={link}
              className="card-popup-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;