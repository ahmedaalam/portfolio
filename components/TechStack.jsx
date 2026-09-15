const tools = [
  { name: "React.js", icon: "/assets/icons/react.svg" },
  { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
  { name: "TypeScript", icon: "/assets/icons/typescript.svg" },
  { name: "Next.js", icon: "/assets/icons/nextjs.svg" },
  { name: "Node.js", icon: "/assets/icons/nodejs.svg" },
  { name: "Tailwind CSS", icon: "/assets/icons/tailwind.svg" },
  { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
  { name: "Express.js", icon: "/assets/icons/express.svg" },
  { name: "HTML5", icon: "/assets/icons/html5.svg" },
  { name: "CSS3", icon: "/assets/icons/css3.svg" },
  { name: "Python", icon: "/assets/icons/python.svg" },
  { name: "Git", icon: "/assets/icons/git.svg" },
  { name: "GitHub", icon: "/assets/icons/github.svg" },
  { name: "Figma", icon: "/assets/icons/figma.svg" },
  { name: "VS Code", icon: "/assets/icons/vscode.svg" },
  { name: "Postman", icon: "/assets/icons/postman.svg" },
];

export default function TechStack() {
  return (
    <section className="stack-section" id="tools">
      <div className="stack-container">
        <div className="stack-header">
          <span className="section-label">Tools</span>
          <h2 className="stack-title">Tech Stack</h2>
          <p className="stack-subtitle">
            Technologies and tools I specialize in
          </p>
        </div>

        <div className="skill-grid">
          {tools.map((tool) => (
            <div className="skill-card" key={tool.name}>
              <div className="skill-icon-wrap">
                <img
                  src={tool.icon}
                  alt={`${tool.name} icon`}
                  className="skill-icon-img"
                  width="52"
                  height="52"
                  loading="lazy"
                />
              </div>
              <span className="skill-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
