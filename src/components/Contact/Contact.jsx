import { useState } from "react";
import "./Contact.css";
import Socials from "../Shared/Socials";

const INITIAL_FORM = { name: "", email: "", message: "" };

function FormField({ label, children }) {
  return (
    <div className="contact-field">
      <label className="contact-field-label">{label}</label>
      {children}
    </div>
  );
}

function SuccessMessage() {
  return (
    <div className="contact-success" role="status" aria-live="polite">
      <p>
        <span className="code-keyword">return </span>
        <span className="code-str">"Message sent! I'll get back to you soon."</span>
      </p>
    </div>
  );
}

// --- added error message component ---
function ErrorMessage({ message }) {
  return (
    <div className="contact-error" role="alert">
      <p>
        <span className="code-keyword">error </span>
        <span className="code-str">"{message}"</span>
      </p>
    </div>
  );
}

function ContactForm({ form, onChange, onSubmit, isLoading }) {
  return (
    <div className="contact-form" onSubmit={onSubmit}>
      <FormField label="name">
        <input
          type="text"
          name="name"
          placeholder="your name"
          value={form.name}
          onChange={onChange}
          required
          className="contact-input"
          disabled={isLoading}
        />
      </FormField>

      <FormField label="email">
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={onChange}
          required
          className="contact-input"
          disabled={isLoading}
        />
      </FormField>

      <FormField label="message">
        <textarea
          name="message"
          placeholder="your message..."
          value={form.message}
          onChange={onChange}
          required
          className="contact-textarea"
          rows={5}
          disabled={isLoading}
        />
      </FormField>

      <button
        type="submit"
        className="contact-btn"
        onClick={onSubmit}
        disabled={isLoading}
      >
        <span className="code-keyword">
          {isLoading ? "Sending..." : "Submit "}
        </span>
        {!isLoading && <span className="code-keyword">() </span>}
      </button>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setSent(true);
        setForm(INITIAL_FORM);
      } else {
        // backend returned a validation error (400) or server error (500)
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      // network error — backend is unreachable
      setError("Could not reach the server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-container" id="contact">
      <div className="contact-left">
        <h2 className="contact-label">Get in touch</h2>

        {sent ? (
          <SuccessMessage />
        ) : (
          <>
            {error && <ErrorMessage message={error} />}
            <ContactForm
              form={form}
              onChange={handleChange}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </>
        )}
      </div>

      <div className="contact-right">
        <p className="note">Here's a lucky picture of my cat!</p>
        <div className="frame">
          <img
            className="sticker"
            src="./assets/sticker.png"
            alt="One of Jericho's rescued cats"
          />
        </div>

        <div className="contact-socials">
          <Socials />
        </div>
      </div>
    </section>
  );
}