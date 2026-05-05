"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const featuredProjects = [
  {
    title: "NA Meetings in the Cloud",
    status: "Live product",
    description:
      "A practical meeting-search platform with clean-time calculations, multilingual support, and user/admin portal flows.",
    href: "https://nameetings.cloud/",
    code: null,
    stack: ["Next.js", "JavaScript", "CSS"],
    impact: [
      "Built around real user workflows instead of a demo-only concept.",
      "Connects search, personal recovery milestones, and administration in one product surface.",
    ],
    image: "/portfolio/nameetings-cloud.png",
  },
  {
    title: "Jingle Bingle",
    status: "Live hackathon project",
    description:
      "A holiday card generator created during a student hackathon, where our team won first place. I keep it here as a snapshot of my early learning, collaborative delivery, and the moment I started recognizing UX as one of my strengths.",
    href: "https://vasi012.github.io/DynastyOne/",
    code: "https://github.com/hypergeek-dev/DynastyOne",
    stack: ["HTML", "CSS", "JavaScript", "UX"],
    image: "/portfolio/jingle_bingle.webp",
  },
];

const archivedProjects = [
  {
    title: "Mindful Zensations",
    code: "https://github.com/hypergeek-dev/Mindful-Zensations",
  },
  {
    title: "Speakers Timer",
    code: "https://github.com/hypergeek-dev/Speakers-timer",
  },
  {
    title: "Cipher Forge",
    code: "https://github.com/hypergeek-dev/cipher-forge",
  },
  {
    title: "My Cakery Shop",
    code: "https://github.com/hypergeek-dev/cakery-webshop",
  },
  {
    title: "Quickfire Bulletin",
    code: "https://github.com/hypergeek-dev/Quickfire_bulletin",
  },
  {
    title: "Mosaic Minds",
    code: "https://github.com/hypergeek-dev/mosaic_minds",
  },
  {
    title: "The Leafblowers",
    code: "https://github.com/hypergeek-dev/The-Woke-Implementation-Association",
  },
  {
    title: "Dara Planner",
    code: "https://github.com/ibuttimer/in-for-a-penny",
  },
];

const skills = [
  { title: "HTML", icon: "/icons/icons8-html-100.png" },
  { title: "CSS", icon: "/icons/icons8-css-100.png" },
  { title: "JavaScript", icon: "/icons/icons8-javascript-100.png" },
  { title: "React", icon: "/icons/icons8-react-100.png" },
  { title: "Next.js", iconText: "N" },
  { title: "Bootstrap", icon: "/icons/icons8-bootstrap-100.png" },
  { title: "C#", icon: "/icons/icons8-c-sharp-64.png" },
  { title: ".NET", icon: "/icons/icons8-.net-framework-100.png" },
  { title: "ASP.NET", icon: "/icons/icons8-asp-100.png" },
  { title: "Python", icon: "/icons/icons8-python-100.png" },
  { title: "Django", icon: "/icons/icons8-django-100.png" },
  { title: "SQL", icon: "/icons/icons8-sql-100.png" },
];

export default function Home() {
  const form = useRef(null);
  const [formState, setFormState] = useState("idle");

  const sendEmail = async (event) => {
    event.preventDefault();
    setFormState("sending");

    const formData = new FormData(form.current);
    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      await emailjs.send(
        "service_6erq9js",
        "template_b96h8du",
        templateParams,
        "3Yvs7CV-qUSayuQjb"
      );
      form.current.reset();
      setFormState("sent");
    } catch {
      setFormState("error");
    }
  };

  return (
    <main>
      <Header />

      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Full-stack developer</p>
              <h1>Dennis Jensen</h1>
              <p className="lead">
                I build practical web tools with React, Next.js, .NET, Python,
                and cloud services, with a strong eye for usability and real
                workflows.
              </p>
              <div className="hero-actions">
                <a className="primary-action" href="#work">
                  View work
                </a>
                <div className="cv-download-group" aria-label="Download CV">
                  <span className="secondary-action cv-download-label">
                    Download CV
                  </span>
                  <a href="/CV.pdf" download>
                    English
                  </a>
                  <a href="/CV_SWE.pdf" download>
                    Swedish
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-panel" aria-label="Profile summary">
              <Image
                src="/portfolio/profil.webp"
                alt="Dennis Jensen"
                width={220}
                height={220}
                priority
              />
              <div>
                <p className="panel-kicker">Current focus</p>
                <p>
                  Shipping useful applications, improving product clarity, and
                  keeping older learning projects honest instead of pretending
                  every link is still production-ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section-block">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Current, live projects first.</h2>
          </div>

          <div className="project-list">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <ProjectVisual project={project} />
                <div className="project-content">
                  <p className="project-status">{project.status}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.impact && (
                    <ul className="impact-list">
                      {project.impact.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <div className="tag-list">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a href={project.href} target="_blank" rel="noreferrer">
                      Live site
                    </a>
                    {project.code && (
                      <a href={project.code} target="_blank" rel="noreferrer">
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="archive-note">
            <h3>Archived learning projects</h3>
            <p>
              Earlier projects from my learning path. Some live deployments are
              no longer maintained, so these are presented as code references.
            </p>
            <div className="archive-list">
              {archivedProjects.map((project) => (
                <a key={project.title} href={project.code} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-block muted-section">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">About</p>
            <h2>Technical work shaped by pedagogy and product thinking.</h2>
          </div>
          <div className="about-copy">
            <p>
              My background in pedagogics gives me a useful lens for software:
              understand people first, reduce friction, and explain complexity
              clearly. I like building features that are technically solid and
              understandable to the people using them.
            </p>
            <p>
              The portfolio now reflects the current picture: a developer with
              stronger full-stack capability, real hosted work, and a cleaner
              presentation of earlier projects.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section-block">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools I use to build and ship.</h2>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <span className="skill-card" key={skill.title}>
                {skill.icon ? (
                  <Image src={skill.icon} alt="" width={42} height={42} />
                ) : (
                  <span className="skill-letter" aria-hidden="true">
                    {skill.iconText}
                  </span>
                )}
                <span>{skill.title}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-block contact-section">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let's talk about the next useful thing.</h2>
            <div className="contact-links">
              <a href="mailto:dennis.mariegaard.jensen@gmail.com">
                dennis.mariegaard.jensen@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/dennis-mariegaard-jensen-a974a8287/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/hypergeek-dev/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" rows="5" placeholder="Message" required />
            <button type="submit" disabled={formState === "sending"}>
              {formState === "sending" ? "Sending..." : "Send message"}
            </button>
            {formState === "sent" && <p className="form-note">Message sent.</p>}
            {formState === "error" && (
              <p className="form-note error">Message failed. Email me directly.</p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Dennis Jensen home">
        <span>D</span>
        <strong>Dennis Jensen</strong>
      </a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function ProjectVisual({ project }) {
  return (
    <Image
      className="project-image"
      src={project.image}
      alt={`${project.title} preview`}
      width={680}
      height={420}
    />
  );
}
