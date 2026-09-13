export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-inner">
        <h1 className="hero-heading" id="heroHeading">
          Ahmed Alam <br />Full Stack Developer
        </h1>
        <p className="hero-description" id="heroCaption">
          Crafting modern web experiences through clean code and thoughtful
          design.
        </p>

        <div className="hero-cta-group">
          <a
            href="/assets/CV.pdf"
            className="hero-cta"
            download="Ahmed-Alam-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
            <svg
              className="hero-cta-icon"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
          <a href="#projects" className="hero-cta-secondary">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
