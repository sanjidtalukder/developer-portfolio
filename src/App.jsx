import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(
    () => localStorage.getItem("theme") === "light",
  );

  useEffect(() => {
    document.body.classList.toggle("light-theme", isLightTheme);
    localStorage.setItem("theme", isLightTheme ? "light" : "dark");
  }, [isLightTheme]);

  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar-container">
          <a href="#" className="navbar-logo">
            &lt;YourName /&gt;
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>

          <div className={`navbar-menu ${mobileMenuOpen ? "open" : ""}`}>
            <span
              className="navbar-link"
              onClick={() => scrollToSection("about")}
            >
              About
            </span>
            <span
              className="navbar-link"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </span>
            <span
              className="navbar-link"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </span>
            <span
              className="navbar-link"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </span>

            {/* Resources Dropdown */}
            <div className={`dropdown ${dropdownOpen ? "open" : ""}`}>
              <button
                className="dropdown-toggle"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Resources
                <svg
                  className="dropdown-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">
                  <span className="dropdown-icon">📄</span>
                  <div className="dropdown-content">
                    <h4>Resume</h4>
                    <p>Download my CV</p>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <span className="dropdown-icon">📝</span>
                  <div className="dropdown-content">
                    <h4>Blog</h4>
                    <p>Articles & tutorials</p>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <span className="dropdown-icon">📚</span>
                  <div className="dropdown-content">
                    <h4>Documentation</h4>
                    <p>Project docs</p>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <span className="dropdown-icon">🎨</span>
                  <div className="dropdown-content">
                    <h4>Design Assets</h4>
                    <p>UI kits & templates</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              className={`theme-toggle ${isLightTheme ? "sun" : ""}`}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <span className="theme-toggle-icon">
                {isLightTheme ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-greeting">Hi, my name is</p>
            <h1 className="hero-title">
              Your Name.
              <br />
              <span>I build things for the web.</span>
            </h1>
            <p className="hero-description">
              I'm a software developer specializing in building exceptional
              digital experiences. Currently, I'm focused on building
              accessible, human-centered products.
            </p>
            <div className="hero-cta">
              <div className="btn-group">
                <a href="#projects" className="btn btn-primary">
                  Check out my work
                </a>
                <a href="#contact" className="btn btn-outline">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="hero-social">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="mailto:your.email@example.com" className="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hello! I'm a passionate software developer based in [Your
                Location]. I enjoy creating things that live on the internet,
                whether that be websites, applications, or anything in between.
              </p>
              <p>
                My goal is to always build products that provide pixel-perfect,
                performant experiences. I have been fortunate to work on various
                projects that have allowed me to hone my skills in both frontend
                and backend development.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or enjoying [your
                hobbies].
              </p>
              <div className="about-stats">
                <div className="stat-card">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Technologies</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="about-image-wrapper">
                <div className="about-image-placeholder">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">My technical toolbox</p>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-category-header">
                <span className="skill-category-icon">🎨</span>
                <h3 className="skill-category-title">Frontend Development</h3>
              </div>
              <div className="skill-list">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Vue.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML5/CSS3</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">Next.js</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-category-header">
                <span className="skill-category-icon">⚙️</span>
                <h3 className="skill-category-title">Backend Development</h3>
              </div>
              <div className="skill-list">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">GraphQL</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-category-header">
                <span className="skill-category-icon">🛠️</span>
                <h3 className="skill-category-title">Tools & DevOps</h3>
              </div>
              <div className="skill-list">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Vercel</span>
                <span className="skill-tag">Netlify</span>
                <span className="skill-tag">Figma</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-category-header">
                <span className="skill-category-icon">📱</span>
                <h3 className="skill-category-title">Other Skills</h3>
              </div>
              <div className="skill-list">
                <span className="skill-tag">React Native</span>
                <span className="skill-tag">Testing</span>
                <span className="skill-tag">Agile</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">WebSockets</span>
                <span className="skill-tag">Web Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some things I've built</p>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">🛒</div>
              <div className="project-content">
                <h3 className="project-title">E-Commerce Platform</h3>
                <p className="project-description">
                  A full-featured e-commerce platform with cart functionality,
                  payment integration, and admin dashboard for managing
                  products.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Stripe</span>
                  <span>MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    Code
                  </a>
                  <a href="#" className="project-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">📊</div>
              <div className="project-content">
                <h3 className="project-title">Analytics Dashboard</h3>
                <p className="project-description">
                  Real-time analytics dashboard with interactive charts, data
                  visualization, and customizable widgets.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>D3.js</span>
                  <span>WebSocket</span>
                  <span>PostgreSQL</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    Code
                  </a>
                  <a href="#" className="project-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">💬</div>
              <div className="project-content">
                <h3 className="project-title">Chat Application</h3>
                <p className="project-description">
                  Real-time messaging app with rooms, direct messages, file
                  sharing, and message reactions.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Socket.io</span>
                  <span>Express</span>
                  <span>Redis</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    Code
                  </a>
                  <a href="#" className="project-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together</p>
          <div className="contact-content">
            <p className="contact-text">
              I'm currently looking for new opportunities. Whether you have a
              question, a project proposal, or just want to say hi, I'll try my
              best to get back to you!
            </p>
            <a href="mailto:your.email@example.com" className="btn btn-primary">
              Say Hello
            </a>
            <div className="contact-links">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </div>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            Designed & Built by Your Name © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
