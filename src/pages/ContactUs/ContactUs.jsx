import { useState } from 'react';
import { Mail, MapPin, Clock, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import './ContactUs.css';

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const subjectOptions = [
  'Bespoke Sizing Consultation',
  'Private Showroom Appointment',
  'Custom Metalwork & Engraving',
  'Order Status & Delivery Inquiries',
  'Press & Editorial Inquiries',
];

export const ContactUs = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData(emptyForm);
  };

  return (
    <div className="contact">
      <div className="page-container">
        {/* Header */}
        <div className="contact__header">
          <div className="section-eyebrow">
            <Sparkles size={12} />
            <span>Personal Concierge</span>
          </div>
          <h1 className="section-title">CONTACT US</h1>
          <div className="gold-rule gold-rule--center" />
          <p className="section-lead contact__lead">
            Whether inquiring regarding bespoke sizing, bridal pairings, or private showroom
            visits, our atelier concierge is at your service.
          </p>
        </div>

        {/* Two columns: contact info + form */}
        <div className="contact__layout">
          {/* Information column */}
          <div className="contact-info">
            <div>
              <h2 className="contact-info__title">Classified Atelier Direct</h2>
              <p className="contact-info__text">
                Our bespoke specialists respond to all digital inquiries within 24 business hours.
                You may also phone our concierge team during salon hours.
              </p>
            </div>

            <div className="contact-info__cards">
              {/* Card 1: Concierge & direct line */}
              <div className="info-card">
                <div className="info-card__head">
                  <div className="icon-badge icon-badge--sm">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h3 className="info-card__title">Concierge & Direct Line</h3>
                    <p className="info-card__subtitle">Bespoke sizing & inquiries</p>
                  </div>
                </div>

                <div className="info-card__rows">
                  <div className="info-card__row">
                    <span className="info-card__label">Email</span>
                    <a href="mailto:concierge@classified-jewelry.com" className="info-card__value">
                      concierge@classified-jewelry.com
                    </a>
                  </div>
                  <div className="info-card__row">
                    <span className="info-card__label">Phone</span>
                    <a href="tel:+12128904102" className="info-card__value tabular-nums">
                      +1 (212) 890-4102
                    </a>
                  </div>
                  <div className="info-card__row info-card__row--small">
                    <span>Hours</span>
                    <span>Mon – Fri, 9am – 6pm EST</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Showroom salons */}
              <div className="info-card">
                <div className="info-card__head">
                  <div className="icon-badge icon-badge--sm">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h3 className="info-card__title">Showroom Salons</h3>
                    <p className="info-card__subtitle">SoHo New York & Paris</p>
                  </div>
                </div>

                <div className="info-card__rows">
                  <div className="info-card__row info-card__row--top">
                    <span className="info-card__label">New York</span>
                    <span className="info-card__value info-card__value--right">
                      48 Mercer St, SoHo, NY
                    </span>
                  </div>
                  <div className="info-card__row info-card__row--top">
                    <span className="info-card__label">Paris</span>
                    <span className="info-card__value info-card__value--right">
                      74 Rue du Faubourg Saint-Honoré
                    </span>
                  </div>
                  <div className="info-card__row info-card__row--small">
                    <span className="info-card__appointments">
                      <Clock size={11} className="info-card__clock" />
                      Appointments
                    </span>
                    <span>Tue – Sat: 11am – 7pm (Private)</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="contact-info__note">
              Appointments required for private viewing chambers.
            </p>
          </div>

          {/* Form column */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <div className="icon-badge icon-badge--lg">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="contact-success__title">Message Transmitted</h3>
                <p className="contact-success__text">
                  Thank you, <span className="contact-success__strong">{formData.name}</span>. Your
                  dispatch has reached our client concierge team. An atelier consultant will respond
                  to <span className="contact-success__strong">{formData.email}</span> within 24
                  hours.
                </p>
                <div className="contact-success__action">
                  <button type="button" onClick={handleReset} className="btn-luxury">
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div>
                  <h3 className="contact-form__title">Send An Inquiry</h3>
                  <p className="contact-form__subtitle">
                    All communications are held in confidential regard.
                  </p>
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="contact-name" className="contact-form__label">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Julian Hayes"
                      className="form-luxury contact-form__control"
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-email" className="contact-form__label">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. julian@example.com"
                      className="form-luxury contact-form__control"
                    />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="contact-phone" className="contact-form__label">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="form-luxury contact-form__control"
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-subject" className="contact-form__label">
                      Subject Matter *
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-luxury contact-form__control contact-form__select"
                    >
                      <option value="">Select inquiry type...</option>
                      {subjectOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-message" className="contact-form__label">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, sizing questions, or specific pieces of interest..."
                    className="form-luxury contact-form__control contact-form__textarea"
                  />
                </div>

                <button type="submit" disabled={loading} className="btn-luxury btn-luxury--block">
                  {loading ? (
                    <span>TRANSMITTING INQUIRY...</span>
                  ) : (
                    <>
                      <span>SUBMIT INQUIRY</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Showroom gallery */}
        <div className="salons">
          <div className="salons__head">
            <div>
              <span className="section-eyebrow">Physical Salons</span>
              <h3 className="salons__title">CLASSIFIED ATELIERS: PARIS & NEW YORK</h3>
            </div>
            <span className="salons__note">Appointments required for private viewing chambers</span>
          </div>

          <div className="salons__grid">
            <div className="salon-card">
              <img
                src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80"
                alt="New York SoHo Atelier Interior"
                className="salon-card__img"
              />
              <div className="salon-card__shade" />
              <div className="salon-card__text">
                <span className="salon-card__place">SoHo, New York</span>
                <h4 className="salon-card__name">48 Mercer Street Atelier</h4>
                <p className="salon-card__desc">Private client viewing vault & sizing salon</p>
              </div>
            </div>

            <div className="salon-card">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                alt="Paris Saint-Honoré Atelier Interior"
                className="salon-card__img"
              />
              <div className="salon-card__shade" />
              <div className="salon-card__text">
                <span className="salon-card__place">8th Arrondissement, Paris</span>
                <h4 className="salon-card__name">74 Rue du Faubourg Salon</h4>
                <p className="salon-card__desc">Master metalsmith workshop & bespoke foundry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
