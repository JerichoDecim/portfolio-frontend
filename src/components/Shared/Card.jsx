import { useState } from "react";
import "./Card.css";

function Card({ image, alt = "card image", description = "", link = "#" }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {/* Top Bar */}
      <div className="card-titlebar">
        <div className="card-searchbar" />
        <div className="card-dots">
          <span className="dot dot-cyan" />
          <span className="dot dot-yellow" />
          <span className="dot dot-orange" />
        </div>
      </div>

      {/* Image Section */}
      <div className="card-media">
        {image ? (
          <img
            src={image}
            alt={alt}
            className="card-image"
            loading="lazy"
          />
        ) : (
          <div className="card-placeholder">No Image</div>
        )}

        {description && (
          <div className={`card-overlay ${visible ? "show" : ""}`}>
            <div className="card-popup">
              <p>{description}</p>
              <a 
               
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;