"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";


const featuredProjects = [
  {
    title: "NA Meetings in the Cloud",
    status: "Live product",
    description:
      "A practical meeting-search platform with clean-time calculations, multilingual support, and user/admin portal flows.",
    href: "https://nameetings.cloud/",
    code: null,
    readme: "https://github.com/hypergeek-dev/nameetingsdotcloud/blob/main/README.md",
    stack: ["Next.js", "JavaScript", "CSS"],
    impact: [
      "Built around real user workflows instead of a demo-only concept.",
      "Connects search, personal recovery milestones, and administration in one product surface.",
    ],
    image: "/portfolio/nameetings-cloud.png",
  },
  {
    title: "Quickfire Cyber Bulletin",
    status: "Live product",
    description:
      "A daily cybersecurity briefing that aggregates and ranks threats from CISA KEV, NVD, EPSS, GitHub Security Advisories, and curated news feeds — prioritised for small organisations and solo sysadmins.",
    href: "https://qcb.dmjnow.cloud/",
    code: "https://github.com/hypergeek-dev/Quickfire_bulletin",
    readme: null,
    stack: ["Python", "Django", "PostgreSQL"],
    impact: [
      "Turns raw vulnerability data from multiple authoritative sources into a single ranked daily briefing.",
      "Designed for practitioners who need actionable signal, not noise.",
    ],
    image: "/portfolio/qcb.jpg",
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

const languages = [
  { code: "en", label: "English", flag: "/icons/flags/gb.svg" },
  { code: "sv", label: "Svenska", flag: "/icons/flags/se.svg" },
  { code: "da", label: "Dansk", flag: "/icons/flags/dk.svg" },
];

const translations = {
  en: {
    nav: {
      work: "Work",
      about: "About",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Full-stack developer",
      lead:
        "I build practical web tools with React, Next.js, .NET, Python, and cloud services, with a strong eye for usability and real workflows.",
      viewWork: "View work",
      downloadCv: "Download CV",
      cvLangEn: "EN",
      cvLangSv: "SV",
      cvPdf: "PDF",
      cvTxt: "TXT",
    },
    profile: {
      label: "Profile summary",
      kicker: "Current focus",
      text:
        "Building data-driven systems that collect, structure, and make information usable, from raw input to working solutions.",
    },
    work: {
      eyebrow: "Selected work",
      heading: "Current, live projects.",
      liveSite: "Live site",
      code: "Code",
      readme: "README",
      projectPreview: "preview",
      projects: [
        {
          status: "Live product",
          description:
            "A practical meeting-search platform with clean-time calculations, multilingual support, and user/admin portal flows.",
          impact: [
            "Built around real user workflows instead of a demo-only concept.",
            "Connects search, personal recovery milestones, and administration in one product surface.",
          ],
        },
        {
          status: "Live product",
          description:
            "A daily cybersecurity briefing that aggregates and ranks threats from CISA KEV, NVD, EPSS, GitHub Security Advisories, and curated news feeds — prioritised for small organisations and solo sysadmins.",
          impact: [
            "Turns raw vulnerability data from multiple authoritative sources into a single ranked daily briefing.",
            "Designed for practitioners who need actionable signal, not noise.",
          ],
        },
        {
          status: "Live hackathon project",
          description:
            "A holiday card generator created during a student hackathon, where our team won first place. I keep it here as a snapshot of my early learning, collaborative delivery, and the moment I started recognizing UX as one of my strengths.",
        },
      ],
      archiveHeading: "Archived learning projects",
      archiveText:
        "Earlier projects from my learning path. Some live deployments are no longer maintained, so these are presented as code references.",
    },
    about: {
      eyebrow: "About",
      heading: "Technical work shaped by pedagogy and product thinking.",
      paragraphs: [
        "My background in pedagogics gives me a useful lens for software: understand people first, reduce friction, and explain complexity clearly. I like building features that are technically solid and understandable to the people using them.",
        "The portfolio now reflects the current picture: a developer with stronger full-stack capability, real hosted work, and a cleaner presentation of earlier projects.",
      ],
    },
    skills: {
      eyebrow: "Skills",
      heading: "Tools I use to build and ship.",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let's talk about the next useful thing.",
      name: "Name",
      email: "Email",
      message: "Message",
      sending: "Sending...",
      send: "Send message",
      sent: "Message sent.",
      error: "Message failed. Email me directly.",
    },
  },
  sv: {
    nav: {
      work: "Projekt",
      about: "Om",
      skills: "Kompetenser",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "Fullstackutvecklare",
      lead:
        "Jag bygger praktiska webbverktyg med React, Next.js, .NET, Python och molntjänster, med stark känsla för användbarhet och verkliga arbetsflöden.",
      viewWork: "Visa projekt",
      downloadCv: "Ladda ner CV",
      cvLangEn: "EN",
      cvLangSv: "SV",
      cvPdf: "PDF",
      cvTxt: "TXT",
    },
    profile: {
      label: "Profilsammanfattning",
      kicker: "Aktuellt fokus",
      text:
        "Att bygga datadrivna system som samlar in, strukturerar och gör information användbar, från rå input till fungerande lösningar.",
    },
    work: {
      eyebrow: "Utvalda projekt",
      heading: "Aktuella liveprojekt.",
      liveSite: "Livesida",
      code: "Kod",
      readme: "README",
      projectPreview: "förhandsvisning",
      projects: [
        {
          status: "Liveprodukt",
          description:
            "En praktisk plattform för mötessökning med beräkning av clean time, flerspråkigt stöd och flöden för användar- och adminportal.",
          impact: [
            "Byggd kring verkliga användarflöden i stället för ett rent demokoncept.",
            "Kopplar samman sökning, personliga milstolpar i tillfrisknande och administration i samma produkt.",
          ],
        },
        {
          status: "Liveprodukt",
          description:
            "Ett dagligt cybersäkerhetsbrev som aggregerar och rangordnar hot från CISA KEV, NVD, EPSS, GitHub Security Advisories och utvalda nyhetsflöden – prioriterat för små organisationer och ensamma sysadmins.",
          impact: [
            "Omvandlar råa sårbarhetsdata från flera auktoritativa källor till ett enda rangordnat dagligt brev.",
            "Utformat för praktiker som behöver användbar signal, inte brus.",
          ],
        },
        {
          status: "Live hackathonprojekt",
          description:
            "En generator för julkort skapad under ett studenthackathon där vårt team vann första pris. Jag behåller den här som en bild av min tidiga inlärning, samarbetet i leveransen och ögonblicket då jag började se UX som en av mina styrkor.",
        },
      ],
      archiveHeading: "Arkiverade lärprojekt",
      archiveText:
        "Tidigare projekt från min lärresa. Vissa livedeployments underhålls inte längre, så de presenteras här som kodreferenser.",
    },
    about: {
      eyebrow: "Om",
      heading: "Tekniskt arbete format av pedagogik och produkttänkande.",
      paragraphs: [
        "Min bakgrund inom pedagogik ger mig ett användbart perspektiv på mjukvara: förstå människor först, minska friktion och förklara komplexitet tydligt. Jag gillar att bygga funktioner som är tekniskt stabila och begripliga för dem som använder dem.",
        "Portfolion speglar nu nuläget: en utvecklare med starkare fullstackkompetens, verkligt hostade projekt och en renare presentation av tidigare projekt.",
      ],
    },
    skills: {
      eyebrow: "Kompetenser",
      heading: "Verktyg jag använder för att bygga och leverera.",
    },
    contact: {
      eyebrow: "Kontakt",
      heading: "Låt oss prata om nästa användbara sak.",
      name: "Namn",
      email: "E-post",
      message: "Meddelande",
      sending: "Skickar...",
      send: "Skicka meddelande",
      sent: "Meddelandet skickades.",
      error: "Meddelandet misslyckades. Mejla mig direkt.",
    },
  },
  da: {
    nav: {
      work: "Projekter",
      about: "Om",
      skills: "Kompetencer",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "Fullstackudvikler",
      lead:
        "Jeg bygger praktiske webværktøjer med React, Next.js, .NET, Python og cloud-tjenester, med et skarpt blik for brugervenlighed og reelle arbejdsgange.",
      viewWork: "Se projekter",
      downloadCv: "Hent CV",
      cvLangEn: "EN",
      cvLangSv: "SV",
      cvPdf: "PDF",
      cvTxt: "TXT",
    },
    profile: {
      label: "Profiloversigt",
      kicker: "Aktuelt fokus",
      text:
        "At bygge datadrevne systemer, der indsamler, strukturerer og gør information brugbar, fra rå input til fungerende løsninger.",
    },
    work: {
      eyebrow: "Udvalgt arbejde",
      heading: "Aktuelle liveprojekter.",
      liveSite: "Live site",
      code: "Kode",
      readme: "README",
      projectPreview: "forhåndsvisning",
      projects: [
        {
          status: "Liveprodukt",
          description:
            "En praktisk platform til mødesøgning med clean-time-beregninger, flersproget understøttelse og flows til bruger- og adminportal.",
          impact: [
            "Bygget omkring reelle brugerflows i stedet for et rent demokoncept.",
            "Forbinder søgning, personlige milepæle i recovery og administration i én samlet produktflade.",
          ],
        },
        {
          status: "Liveprodukt",
          description:
            "Et dagligt cybersikkerhedsbrev, der aggregerer og rangordner trusler fra CISA KEV, NVD, EPSS, GitHub Security Advisories og udvalgte nyhedsfeeds – prioriteret til små organisationer og solo-sysadmins.",
          impact: [
            "Omdanner rå sårbarhedsdata fra flere autoritative kilder til én samlet rangordnet daglig briefing.",
            "Designet til praktikere, der har brug for brugbart signal, ikke støj.",
          ],
        },
        {
          status: "Live hackathonprojekt",
          description:
            "En generator til julekort skabt under et studenthackathon, hvor vores team vandt førstepladsen. Jeg beholder den her som et billede af min tidlige læring, samarbejdet i leverancen og øjeblikket hvor jeg begyndte at se UX som en af mine styrker.",
        },
      ],
      archiveHeading: "Arkiverede læringsprojekter",
      archiveText:
        "Tidligere projekter fra min læringsrejse. Nogle live-deployments bliver ikke længere vedligeholdt, så de præsenteres her som kodereferencer.",
    },
    about: {
      eyebrow: "Om",
      heading: "Teknisk arbejde formet af pædagogik og produkttænkning.",
      paragraphs: [
        "Min baggrund i pædagogik giver mig en nyttig vinkel på software: forstå mennesker først, reducere friktion og forklare kompleksitet klart. Jeg kan lide at bygge funktioner, der både er teknisk solide og forståelige for dem, der bruger dem.",
        "Portfolien afspejler nu det aktuelle billede: en udvikler med stærkere fullstackkompetencer, rigtige hostede projekter og en renere præsentation af tidligere projekter.",
      ],
    },
    skills: {
      eyebrow: "Kompetencer",
      heading: "Værktøjer jeg bruger til at bygge og levere.",
    },
    contact: {
      eyebrow: "Kontakt",
      heading: "Lad os tale om den næste nyttige ting.",
      name: "Navn",
      email: "E-mail",
      message: "Besked",
      sending: "Sender...",
      send: "Send besked",
      sent: "Beskeden er sendt.",
      error: "Beskeden mislykkedes. Send mig en mail direkte.",
    },
  },
};

function getPreferredLanguage() {
  if (typeof navigator === "undefined") {
    return "en";
  }

  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  const matchingLanguage = browserLanguages.find((item) => {
    const languageCode = item.toLowerCase();
    return languageCode.startsWith("sv") || languageCode.startsWith("da");
  });

  if (!matchingLanguage) {
    return "en";
  }

  return matchingLanguage.toLowerCase().startsWith("sv") ? "sv" : "da";
}

export default function Home() {
  const languageWasChosen = useRef(false);
  const [formState, setFormState] = useState("idle");
  const [language, setLanguage] = useState("en");
  const text = translations[language];

  useEffect(() => {
    const updateLanguageFromBrowser = () => {
      if (!languageWasChosen.current) {
        setLanguage(getPreferredLanguage());
      }
    };

    updateLanguageFromBrowser();
    window.addEventListener("languagechange", updateLanguageFromBrowser);

    return () => {
      window.removeEventListener("languagechange", updateLanguageFromBrowser);
    };
  }, []);

  const chooseLanguage = (nextLanguage) => {
    languageWasChosen.current = true;
    setLanguage(nextLanguage);
  };

  const sendEmail = async (event) => {
    event.preventDefault();
    setFormState("sending");

    const formData = new FormData(event.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Send failed");

      event.currentTarget.reset();
      setFormState("sent");
    } catch {
      setFormState("error");
    }
  };

  return (
    <main>
      <Header language={language} setLanguage={chooseLanguage} text={text} />

      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{text.hero.eyebrow}</p>
              <h1>Dennis Jensen</h1>
              <p className="lead">{text.hero.lead}</p>
              <div className="hero-actions">
                <a className="primary-action" href="#work">
                  {text.hero.viewWork}
                </a>
                <div className="cv-download-group" aria-label={text.hero.downloadCv}>
                  <span className="secondary-action cv-download-label">
                    {text.hero.downloadCv}
                  </span>
                  <div className="cv-lang-group">
                    <span className="cv-lang-tag">{text.hero.cvLangEn}</span>
                    <a href="/CV.pdf" download title="English CV – PDF">{text.hero.cvPdf}</a>
                    <a href="/CV_plain_EN.txt" download title="English CV – plain text">{text.hero.cvTxt}</a>
                  </div>
                  <div className="cv-lang-group">
                    <span className="cv-lang-tag">{text.hero.cvLangSv}</span>
                    <a href="/CV_SWE.pdf" download title="Swedish CV – PDF">{text.hero.cvPdf}</a>
                    <a href="/CV_plain_SV.txt" download title="Swedish CV – plain text">{text.hero.cvTxt}</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-panel" aria-label={text.profile.label}>
              <Image
                src="/portfolio/profil.webp"
                alt="Dennis Jensen"
                width={220}
                height={220}
                priority
              />
              <div>
                <p className="panel-kicker">{text.profile.kicker}</p>
                <p>{text.profile.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section-block">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{text.work.eyebrow}</p>
            <h2>{text.work.heading}</h2>
          </div>

          <div className="project-list">
            {featuredProjects.map((project, index) => {
              const projectText = text.work.projects[index];

              return (
              <article className="project-card" key={project.title}>
                <ProjectVisual project={project} previewLabel={text.work.projectPreview} />
                <div className="project-content">
                  <p className="project-status">{projectText.status}</p>
                  <h3>{project.title}</h3>
                  <p>{projectText.description}</p>
                  {projectText.impact && (
                    <ul className="impact-list">
                      {projectText.impact.map((item) => (
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
                      {text.work.liveSite}
                    </a>
                    {project.code && (
                      <a href={project.code} target="_blank" rel="noreferrer">
                        {text.work.code}
                      </a>
                    )}
                    {project.readme && (
                      <a href={project.readme} target="_blank" rel="noreferrer" className="readme-link">
                        {text.work.readme}
                      </a>
                    )}
                  </div>
                </div>
              </article>
              );
            })}
          </div>

          <div className="archive-note">
            <h3>{text.work.archiveHeading}</h3>
            <p>{text.work.archiveText}</p>
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
            <p className="eyebrow">{text.about.eyebrow}</p>
            <h2>{text.about.heading}</h2>
          </div>
          <div className="about-copy">
            {text.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-block">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{text.skills.eyebrow}</p>
            <h2>{text.skills.heading}</h2>
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
            <p className="eyebrow">{text.contact.eyebrow}</p>
            <h2>{text.contact.heading}</h2>
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

          <form className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="name" placeholder={text.contact.name} required />
            <input type="email" name="email" placeholder={text.contact.email} required />
            <textarea name="message" rows="5" placeholder={text.contact.message} required />
            <button type="submit" disabled={formState === "sending"}>
              {formState === "sending" ? text.contact.sending : text.contact.send}
            </button>
            {formState === "sent" && <p className="form-note">{text.contact.sent}</p>}
            {formState === "error" && (
              <p className="form-note error">{text.contact.error}</p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

function Header({ language, setLanguage, text }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Dennis Jensen home">
        <span>D</span>
        <strong>Dennis Jensen</strong>
      </a>
      <div className="header-actions">
        <nav aria-label="Main navigation">
          <a href="#work">{text.nav.work}</a>
          <a href="#about">{text.nav.about}</a>
          <a href="#skills">{text.nav.skills}</a>
          <a href="#contact">{text.nav.contact}</a>
        </nav>
        <div className="language-selector" aria-label="Choose language">
          {languages.map((item) => (
            <button
              type="button"
              key={item.code}
              className={item.code === language ? "active" : ""}
              onClick={() => setLanguage(item.code)}
              aria-label={item.label}
              aria-pressed={item.code === language}
              title={item.label}
            >
              <Image
                src={item.flag}
                alt=""
                width={24}
                height={16}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

function ProjectVisual({ project, previewLabel }) {
  return (
    <Image
      className="project-image"
      src={project.image}
      alt={`${project.title} ${previewLabel}`}
      width={680}
      height={420}
    />
  );
}
