'use client';

import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ message: '', type: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: '', type: '' });

    const submissionData = new FormData();
    submissionData.append('access_key', '5ab8db48-b3c7-4267-a05e-a94369954f41');
    submissionData.append('subject', 'New Portfolio Message from Ahmed Alam Website');
    submissionData.append('from_name', 'Ahmed Alam Portfolio');
    submissionData.append('name', formData.name);
    submissionData.append('email', formData.email);
    submissionData.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submissionData,
      });
      const result = await response.json();

      if (result.success) {
        setFormData({ name: '', email: '', message: '' });
        setStatus({
          message: "Thank you! Your message has been sent directly to Ahmed's inbox.",
          type: 'success',
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (err) {
      console.error(err);
      setStatus({
        message: 'Oops! Something went wrong. Please reach out directly to ahmedalam.dev@gmail.com',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setStatus({ message: '', type: '' });
      }, 7000);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <span className="section-label">Get in Touch</span>
        <div className="contact-grid">
          <div>
            <h2 className="contact-info-title">
              Let&apos;s build something extraordinary together.
            </h2>
            <p className="contact-info-desc">
              Have a project in mind, looking for a consultation, or just want
              to connect? Send a message and let&apos;s discuss how I can bring your
              vision to life.
            </p>

            <div className="contact-details">
              <a
                href="mailto:ahmedalam.dev@gmail.com"
                className="contact-detail-item"
              >
                <div className="contact-icon-box">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="contact-detail-label">Email</span>
                  <span className="contact-detail-val">
                    ahmedalam.dev@gmail.com
                  </span>
                </div>
              </a>

              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className="contact-detail-label">Location</span>
                  <span className="contact-detail-val">Karachi, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <form onSubmit={handleSubmit} id="contactForm">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-input"
                  placeholder="Your@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Project Details
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="form-textarea"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="form-submit-btn"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>

              {status.message && (
                <div
                  className={`form-status ${status.type === 'error' ? 'error' : 'success'}`}
                  style={{
                    marginTop: '16px',
                    color: status.type === 'error' ? '#dc2626' : '#10b981',
                    fontSize: '14px',
                    fontWeight: 500,
                  }}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
