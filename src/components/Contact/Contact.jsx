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

function ContactForm({ form, onChange, onSubmit }) {
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
        />
      </FormField>

      <button type="submit" className="contact-btn" onClick={onSubmit}>
        <span className="code-keyword">Submit </span>
        <span className="code-keyword">() </span>
      </button>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact-container" id="contact">
      <div className="contact-left">
        <h2 className="contact-label">Get in touch</h2>
        {sent
          ? <SuccessMessage />
          : <ContactForm form={form} onChange={handleChange} onSubmit={handleSubmit} />
        }
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