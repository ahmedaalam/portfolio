export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-inner">
        <p className="hero-greeting" id="heroGreeting">
          Hi, I&apos;m Ahmed
        </p>
        <h1 className="hero-heading" id="heroHeading">
          Full Stack Developer
        </h1>
        <p className="hero-description" id="heroCaption">
          Crafting modern web experiences through clean code and{" "}
          <br className="hero-desc-br" />
          thoughtful design
        </p>

        <div className="hero-cta-group">
          <a href="#projects" className="hero-cta" id="heroCTAPrimary">
            <span>View Projects</span>
            <svg
              className="hero-cta-icon"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="#contact"
            className="hero-cta-secondary"
            id="heroCTASecondary"
          >
            Get in Touch
          </a>
        </div>

        <div className="hero-socials" id="heroSocials">
          {/* GitHub */}
          <a
            href="https://github.com/ahmedaalam"
            className="hero-social-btn"
            id="heroSocialGithub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ahmed-aalam/"
            className="hero-social-btn"
            id="heroSocialLinkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="#contact"
            className="hero-social-btn"
            id="heroSocialEmail"
            aria-label="Contact / Email"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
