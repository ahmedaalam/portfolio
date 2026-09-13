const tools = [
  {
    name: 'HTML5',
    category: 'Markup Language',
    percent: '95%',
    icon: '/assets/icons/html5.svg',
  },
  {
    name: 'CSS3',
    category: 'Stylesheet',
    percent: '90%',
    icon: '/assets/icons/css3.svg',
  },
  {
    name: 'JavaScript',
    category: 'Programming Language',
    percent: '80%',
    icon: '/assets/icons/javascript.svg',
  },
  {
    name: 'React',
    category: 'JavaScript Library',
    percent: '85%',
    icon: '/assets/icons/react.svg',
  },
  {
    name: 'Next.js',
    category: 'Full Stack Framework',
    percent: '85%',
    icon: '/assets/icons/nextjs.svg',
  },
  {
    name: 'Tailwind CSS',
    category: 'CSS Framework',
    percent: '95%',
    icon: '/assets/icons/tailwind.svg',
  },
  {
    name: 'Node.js',
    category: 'Runtime Environment',
    percent: '88%',
    icon: '/assets/icons/nodejs.svg',
  },
  {
    name: 'Express.js',
    category: 'Backend Framework',
    percent: '75%',
    icon: '/assets/icons/express.svg',
  },
  {
    name: 'MongoDB',
    category: 'NoSQL Database',
    percent: '82%',
    icon: '/assets/icons/mongodb.svg',
  },
  {
    name: 'Figma',
    category: 'UI/UX Design Tool',
    percent: '85%',
    icon: '/assets/icons/figma.svg',
  },
  {
    name: 'Git',
    category: 'Version Control',
    percent: '90%',
    icon: '/assets/icons/git.svg',
  },
  {
    name: 'GitHub',
    category: 'Code Repository',
    percent: '95%',
    icon: '/assets/icons/github.svg',
  },
  {
    name: 'VS Code',
    category: 'Code Editor',
    percent: '92%',
    icon: '/assets/icons/vscode.svg',
  },
  {
    name: 'Postman',
    category: 'API Platform',
    percent: '88%',
    icon: '/assets/icons/postman.svg',
  },
];

export default function TechStack() {
  return (
    <section className="stack-section" id="tools">
      <div className="stack-container">
        <div className="stack-header">
          <span className="section-label">Tools</span>
          <h2 className="stack-title">Tech Stack</h2>
          <p className="stack-subtitle">Technologies and tools I specialize in</p>
        </div>

        <div className="stack-grid">
          {tools.map((tool) => (
            <div className="tool-card" key={tool.name}>
              <div className="tool-left">
                <span className="tool-icon">
                  <img
                    src={tool.icon}
                    alt={`${tool.name} icon`}
                    className="tool-icon-img"
                    width="40"
                    height="40"
                    loading="lazy"
                  />
                </span>
                <div className="tool-text">
                  <h3 className="tool-name">{tool.name}</h3>
                  <p className="tool-category">{tool.category}</p>
                </div>
              </div>
              <div className="tool-percent">{tool.percent}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
