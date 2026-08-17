<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Parth | Student Developer</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --bg: #08090b;
      --card: #111318;
      --text: #f5f5f5;
      --muted: #999da7;
      --green: #b8ff5c;
      --border: rgba(255,255,255,0.1);
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    /* NAVBAR */
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 70px;
      padding: 0 7%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(8,9,11,0.9);
      backdrop-filter: blur(15px);
      border-bottom: 1px solid var(--border);
      z-index: 100;
    }

    .logo {
      font-size: 30px;
      font-weight: 800;
    }

    .logo span {
      color: var(--green);
    }

    nav {
      display: flex;
      gap: 30px;
    }

    nav a {
      color: var(--muted);
      font-size: 14px;
      transition: 0.3s;
    }

    nav a:hover {
      color: var(--green);
    }

    /* HERO */
    .hero {
      min-height: 100vh;
      padding: 140px 7% 80px;
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 60px;
      align-items: center;
    }

    .tag {
      color: var(--green);
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 2px;
      margin-bottom: 20px;
    }

    .hero h1 {
      font-size: clamp(45px, 6vw, 75px);
      line-height: 1.05;
      letter-spacing: -3px;
      margin-bottom: 25px;
    }

    .hero h1 span {
      display: block;
      color: var(--green);
    }

    .intro {
      max-width: 600px;
      color: var(--muted);
      font-size: 18px;
      line-height: 1.8;
    }

    .buttons {
      display: flex;
      gap: 15px;
      margin-top: 32px;
    }

    .btn,
    .contact-btn {
      display: inline-block;
      padding: 13px 22px;
      border-radius: 8px;
      background: var(--green);
      color: #08090b;
      font-weight: bold;
      transition: 0.3s;
    }

    .btn:hover,
    .contact-btn:hover {
      transform: translateY(-3px);
    }

    .btn.secondary {
      background: transparent;
      color: white;
      border: 1px solid var(--border);
    }

    /* CODE CARD */
    .code-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 30px 80px rgba(0,0,0,0.4);
    }

    .dots {
      padding: 15px;
      border-bottom: 1px solid var(--border);
    }

    .dots span {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: #555;
      border-radius: 50%;
      margin-right: 6px;
    }

    pre {
      padding: 25px;
      overflow-x: auto;
    }

    code {
      color: #d8d8d8;
      font-size: 14px;
      line-height: 2;
    }

    /* SECTIONS */
    .section {
      padding: 120px 7%;
      border-top: 1px solid var(--border);
    }

    .section h2,
    .contact h2 {
      font-size: clamp(38px, 5vw, 60px);
      line-height: 1.1;
      letter-spacing: -2px;
      margin-bottom: 45px;
    }

    .section h2 span,
    .contact h2 span {
      color: var(--green);
    }

    /* ABOUT */
    .about-box {
      max-width: 750px;
    }

    .about-box p {
      color: var(--muted);
      font-size: 17px;
      margin-bottom: 20px;
    }

    /* SKILLS */
    .skills {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
    }

    .skill {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 28px;
      transition: 0.3s;
    }

    .skill:hover {
      transform: translateY(-6px);
      border-color: var(--green);
    }

    .skill h3 {
      margin-bottom: 12px;
    }

    .skill p {
      color: var(--muted);
      font-size: 14px;
    }

    /* PROJECTS */
    .projects {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    }

    .project {
      min-height: 330px;
      padding: 28px;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      transition: 0.3s;
    }

    .project:hover {
      transform: translateY(-6px);
      border-color: var(--green);
    }

    .project > span {
      color: var(--green);
      font-size: 11px;
      letter-spacing: 1px;
      margin-bottom: 50px;
    }

    .project h3 {
      font-size: 23px;
      margin-bottom: 12px;
    }

    .project p {
      color: var(--muted);
      font-size: 14px;
    }

    .tech {
      color: var(--muted);
      font-size: 12px;
      margin-top: 20px;
    }

    .project a {
      color: var(--green);
      font-size: 13px;
      font-weight: bold;
      margin-top: auto;
      padding-top: 25px;
    }

    /* CONTACT */
    .contact {
      padding: 150px 7%;
      text-align: center;
      border-top: 1px solid var(--border);
      background: radial-gradient(circle, #17200f, var(--bg) 60%);
    }

    .contact h2 {
      margin-bottom: 20px;
    }

    .contact > p:not(.tag) {
      color: var(--muted);
      margin-bottom: 30px;
    }

    .socials {
      margin-top: 25px;
    }

    .socials a {
      color: var(--muted);
    }

    .socials a:hover {
      color: var(--green);
    }

    /* FOOTER */
    footer {
      padding: 25px 7%;
      border-top: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      color: var(--muted);
      font-size: 12px;
    }

    /* MOBILE */
    @media (max-width: 850px) {

      .navbar {
        padding: 0 5%;
      }

      nav {
        gap: 15px;
      }

      .hero {
        grid-template-columns: 1fr;
        padding-left: 5%;
        padding-right: 5%;
      }

      .code-card {
        display: none;
      }

      .section,
      .contact {
        padding-left: 5%;
        padding-right: 5%;
      }

      .skills {
        grid-template-columns: repeat(2, 1fr);
      }

      .projects {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 550px) {

      nav {
        display: none;
      }

      .hero h1 {
        font-size: 48px;
      }

      .buttons {
        flex-direction: column;
      }

      .btn {
        text-align: center;
      }

      .skills {
        grid-template-columns: 1fr;
      }

      footer {
        flex-direction: column;
        gap: 8px;
        padding-left: 5%;
        padding-right: 5%;
      }
    }
  </style>
</head>

<body>

  <!-- NAVIGATION -->
  <header class="navbar">

    <div class="logo">
      P<span>.</span>
    </div>

    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>

  </header>


  <!-- HERO -->
  <section class="hero" id="home">

    <div class="hero-content">

      <p class="tag">👋 HELLO, I'M PARTH</p>

      <h1>
        Student Developer
        <span>Building Ideas With Code.</span>
      </h1>

      <p class="intro">
        I am a student developer learning web development,
        AI-assisted coding and vibe coding. I enjoy turning
        ideas into real projects.
      </p>

      <div class="buttons">
        <a href="#projects" class="btn">
          View Projects →
        </a>

        <a href="#contact" class="btn secondary">
          Contact Me
        </a>
      </div>

    </div>


    <div class="code-card">

      <div class="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <pre><code>const developer = {
  name: "Parth",
  role: "Student Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "AI",
    "Vibe Coding"
  ],
  mindset: "Build. Learn. Improve."
};</code></pre>

    </div>

  </section>


  <!-- ABOUT -->
  <section class="section" id="about">

    <p class="tag">01 — ABOUT</p>

    <h2>
      About <span>Me</span>
    </h2>

    <div class="about-box">

      <p>
        Hi, I'm Parth. I am a student who enjoys technology,
        coding and building new things.
      </p>

      <p>
        I am currently learning web development, AI tools
        and vibe coding. I learn by creating projects,
        experimenting with ideas and solving problems.
      </p>

      <p>
        My goal is to keep improving my skills and build
        useful projects that can solve real-world problems.
      </p>

    </div>

  </section>


  <!-- SKILLS -->
  <section class="section" id="skills">

    <p class="tag">02 — SKILLS</p>

    <h2>
      My <span>Skills</span>
    </h2>

    <div class="skills">

      <div class="skill">
        <h3>🌐 Web Development</h3>
        <p>HTML, CSS and JavaScript</p>
      </div>

      <div class="skill">
        <h3>🤖 AI Coding</h3>
        <p>AI-assisted development and experimentation</p>
      </div>

      <div class="skill">
        <h3>⚡ Vibe Coding</h3>
        <p>Turning ideas into working prototypes</p>
      </div>

      <div class="skill">
        <h3>🎨 UI Design</h3>
        <p>Clean and modern user interfaces</p>
      </div>

    </div>

  </section>


  <!-- PROJECTS -->
  <section class="section" id="projects">

    <p class="tag">03 — PROJECTS</p>

    <h2>
      Things I've <span>Built</span>
    </h2>

    <div class="projects">

      <div class="project">

        <span>PROJECT 01</span>

        <h3>My First Website</h3>

        <p>
          A responsive website created while learning
          frontend development.
        </p>

        <div class="tech">
          HTML • CSS • JavaScript
        </div>

        <a href="#">
          Project →
        </a>

      </div>


      <div class="project">

        <span>PROJECT 02</span>

        <h3>AI Experiment</h3>

        <p>
          An experimental project created using
          AI-assisted coding.
        </p>

        <div class="tech">
          AI • Web • Vibe Coding
        </div>

        <a href="#">
          Project →
        </a>

      </div>


      <div class="project">

        <span>PROJECT 03</span>

        <h3>More Coming Soon</h3>

        <p>
          I am currently building more projects
          and learning new technologies.
        </p>

        <div class="tech">
          Learning • Building
        </div>

      </div>

    </div>

  </section>


  <!-- CONTACT -->
  <section class="contact" id="contact">

    <p class="tag">04 — CONTACT</p>

    <h2>
      Let's Build Something
      <span>Great.</span>
    </h2>

    <p>
      Interested in my work? Feel free to connect with me.
    </p>

    <a
      class="contact-btn"
      href="mailto:YOUR_EMAIL@example.com">
      Contact Me →
    </a>

    <div class="socials">

      <a
        href="https://github.com/YOUR_USERNAME"
        target="_blank">
        GitHub ↗
      </a>

    </div>

  </section>


  <!-- FOOTER -->
  <footer>

    <p>© 2026 Parth. Built with code.</p>

    <p>Student Developer • India</p>

  </footer>


  <!-- JAVASCRIPT -->
  <script>

    document.querySelectorAll('a[href^="#"]').forEach(link => {

      link.addEventListener("click", function(event) {

        const target = document.querySelector(
          this.getAttribute("href")
        );

        if (target) {
          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth"
          });
        }

      });

    });


    const elements = document.querySelectorAll(
      ".skill, .project, .about-box"
    );


    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
              "translateY(0)";

          }

        });

      },
      {
        threshold: 0.15
      }
    );


    elements.forEach(element => {

      element.style.opacity = "0";

      element.style.transform =
        "translateY(25px)";

      element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

      observer.observe(element);

    });

  </script>

</body>
</html>
