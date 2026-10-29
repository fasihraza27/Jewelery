import { useState } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import "./Newsletter.css";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="newsletter">
      <div className="newsletter__inner">
        <div className="section-eyebrow newsletter__eyebrow">
          <Sparkles size={12} />
          <span>Privilege & Releases</span>
        </div>
        <h2 className="section-title newsletter__title">
          JOIN THE INNER CIRCLE
        </h2>
        <div className="gold-rule gold-rule--center" />
        <p className="section-lead newsletter__lead">
          Receive private invitations to confidential preview drops, numbered
          bespoke hand jewelry runs, and private showroom viewings in Paris and
          New York.
        </p>

        {submitted ? (
          <div className="newsletter__success animate-fade-in">
            <Check size={16} className="newsletter__success-icon" />
            <span>
              You have been subscribed to Classified private releases.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter__form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your confidential email..."
              required
              className="form-luxury newsletter__input"
              aria-label="Email address for newsletter"
            />
            <button type="submit" className="btn-luxury">
              <span>Subscribe</span>
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="newsletter__privacy">
          We honor your privacy. Unsubscribe at any time with one click.
        </p>
      </div>
    </section>
  );
};
