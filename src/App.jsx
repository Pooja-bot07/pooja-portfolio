
import { useEffect, useState } from "react";
import "./App.css";

import { Mail } from "lucide-react";
import { FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";

const projects = [
  {
    number: "01",
    name: "Crazy Event",
    category: "Events · Business Website",
    description:
      "A website for an event decoration business, presenting its services, event gallery and enquiry options in one place.",
    role: "Website design & development",
    features: ["Service presentation", "Event gallery", "Contact section"],
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://crazy-event.in/",
    
image: `${import.meta.env.BASE_URL}images/crazy-event.png`,

    theme: "event",
    monogram: "CE",
    previewLabel: "EVENTS & CELEBRATIONS",
    status: "Live Website",
  },
  {
    number: "02",
    name: "Jadhav Food Court",
    category: "Food · Multi-section Website",
    description:
      "A digital presence for a food court, designed to organise its food offerings and help visitors explore the available options.",
    role: "Website development",
    features: ["Food-court sections", "Menu presentation", "Mobile-friendly layout"],
    stack: ["HTML", "CSS", "JavaScript"],
    image: `${import.meta.env.BASE_URL}images/jadhav-foodcourt.png`,
    theme: "food",
    monogram: "JF",
    previewLabel: "GOOD FOOD, GOOD MOOD",
    status: "In Progress",
  },
  {
    number: "03",
    name: "Saraswati Classes",
    category: "Education · Coaching Website",
    description:
      "A website for Saraswati Abacus & Vedic Classes, presenting learning programs, academic classes, faculty, gallery and enquiry options.",
    role: "Website design & development",
    features: ["Program information", "Faculty & gallery", "Enquiry section"],
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://pooja-bot07.github.io/coaching-website/",
    image: `${import.meta.env.BASE_URL}images/saraswati-classes.png`,
    theme: "education",
    monogram: "SC",
    previewLabel: "LEARN · GROW · EXCEL",
    status: "Live Website",
  },
];


const services = [
  {
    icon: "monitor",
    title: "Custom Website Development",
    description:
      "Custom-built websites tailored to your brand, goals and audience.",
  },
  {
    icon: "pen",
    title: "UI/UX Design",
    description:
      "Clean, intuitive and user-friendly digital experiences.",
  },
  {
    icon: "store",
    title: "Small Business Websites",
    description:
      "Professional websites for local businesses, services and startups.",
  },
  {
    icon: "bag",
    title: "E-commerce Stores",
    description:
      "Online storefronts with product catalogues and shopping functionality.",
  },
  {
    icon: "search",
    title: "On-Page SEO & Website Optimisation",
    description:
      "Page titles, meta descriptions, headings and image optimisation.",
  },
  {
    icon: "grid",
    title: "Admin Panel Development",
    description:
      "Custom dashboards to manage website content and business information.",
  },
  {
    icon: "pin",
    title: "Google Business Profile Setup",
    description:
      "Profile setup to help local customers discover your business online.",
  },
  {
    icon: "wrench",
    title: "Website Maintenance",
    description:
      "Website updates, bug fixes and ongoing support based on your plan.",
  },
];

function ServiceIcon({ name }) {
  const common = {
    width: 27,
    height: 27,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const icons = {
    monitor: <><rect x="3" y="4" width="18" height="13" rx="1.5" /><path d="M8 21h8M12 17v4" /></>,
    pen: <><path d="m12 19 7-7-7-7-7-2 2 7 7 7Z" /><path d="m5 3 7 7" /><circle cx="14" cy="10" r="1.5" /></>,
    store: <><path d="M3 10h18l-2-6H5l-2 6Z" /><path d="M4 10v10h16V10M9 20v-6h6v6" /><path d="M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" /></>,
    bag: <><rect x="4" y="7" width="16" height="14" rx="2" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
    search: <><circle cx="10.5" cy="10.5" r="7" /><path d="m16 16 5 5" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    wrench: <><path d="M14 6a6 6 0 0 0-8 8l-3 3a2 2 0 0 0 3 3l3-3a6 6 0 0 0 8-8l-4 4-3-3 4-4Z" /></>,
  };

  return <svg {...common}>{icons[name]}</svg>;
}



function Services() {
const serviceImages = [
  `${import.meta.env.BASE_URL}images/services/website.jpg`,
  `${import.meta.env.BASE_URL}images/services/design.jpg`,
  `${import.meta.env.BASE_URL}images/services/business.jpg`,
  `${import.meta.env.BASE_URL}images/services/ecommerce.jpg`,
  `${import.meta.env.BASE_URL}images/services/seo.jpg`,
  `${import.meta.env.BASE_URL}images/services/admin.jpg`,
  `${import.meta.env.BASE_URL}images/services/google-profile.jpg`,
  `${import.meta.env.BASE_URL}images/services/maintenance.jpg`,
];

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <div className="services-topline">
          <p className="services-eyebrow">03 / OUR SERVICES</p>
          <span>DIGITAL SOLUTIONS</span>
        </div>

        <div className="services-heading-row">
          <h2>What we offer.</h2>
          <p>Thoughtful digital solutions for growing businesses.</p>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <div className="service-image">
              <img
                src={serviceImages[index]}
                alt={service.title}
                loading="lazy"
              />
              
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
          </article>
        ))}
      </div>

     
<div className="services-cta">
  <div className="services-cta-content">
    <p className="services-cta-eyebrow">
      LET'S BUILD SOMETHING
    </p>

    <h3>
      Have a project in mind<span>?</span>
    </h3>

    <p className="services-cta-description">
      Let's turn your idea into something meaningful.
    </p>
  </div>

  <a href="#contact" className="services-cta-link">
    Let's talk
    <span aria-hidden="true">↗</span>
  </a>
</div>

    </section>
  );
}



const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We discuss your business, audience, goals and the features your website needs.",
  },
  {
    number: "02",
    title: "Plan & design",
    description:
      "I organise the pages, content and visual direction before building the website.",
  },
  {
    number: "03",
    title: "Build & refine",
    description:
      "I develop the website, check responsive layouts and refine the details.",
  },
  {
    number: "04",
    title: "Test & launch",
    description:
      "I test the main links and interactions, then help prepare the website for launch.",
  },
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function Navbar() {
  return (
    <header className="navbar">
      
<a className="brand" href="#home" aria-label="Pooja Malusare home">
  POOJA MALUSARE<span className="brand-dot">.</span>
</a>


      <nav className="nav-links" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#services">Process</a>
        <a className="nav-contact" href="#contact">
          Let's talk <Arrow diagonal />
        </a>
      </nav>
    </header>
  );
}

function ProjectPreview({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const isLive = project.status === "Live Website";

  const preview = (
    <>
      {!imageFailed ? (
        <img
          className="project-screenshot"
          src={project.image}
          alt={`Screenshot of ${project.name} website`}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className={`preview-fallback preview-${project.theme}`}>
          <div className="preview-topline">
            <span>{project.monogram}.</span>
            <span>WEBSITE PROJECT</span>
          </div>

          <div className="preview-main">
            <span className="preview-eyebrow">{project.previewLabel}</span>
            <span className="preview-monogram">{project.monogram}</span>
            <span className="preview-name">{project.name}</span>
            <span className="preview-line" />
          </div>

          <div className="preview-bottom">
            <span>PROJECT {project.number}</span>
            <span>{isLive ? "LIVE WEBSITE" : "IN DEVELOPMENT"}</span>
          </div>
        </div>
      )}

      {isLive && (
        <span className="preview-open">
          Visit website <Arrow diagonal />
        </span>
      )}
    </>
  );

  if (isLive) {
    return (
      <a
        className="project-visual"
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${project.name} website`}
      >
        {preview}
      </a>
    );
  }

  return (
    <div className="project-visual project-visual-static">
      {preview}
    </div>
  );
}

function ProjectCard({ project }) {
  const isLive = project.status === "Live Website";

  return (
    <article className="project-card">
      <ProjectPreview project={project} />

      <div className="project-heading">
        <div>
          <p className="eyebrow">
            <span>{project.number}</span> / {project.category}
          </p>

          <span
            className={`project-status ${
              isLive ? "status-live" : "status-progress"
            }`}
          >
            <span className="status-dot" />
            {project.status}
          </span>

          <h3>{project.name}</h3>
        </div>

        {isLive ? (
          <a
            className="round-arrow"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${project.name}`}
          >
            <Arrow diagonal />
          </a>
        ) : (
          <span className="round-arrow" aria-hidden="true">
            →
          </span>
        )}
      </div>

      <p className="project-description">{project.description}</p>

      
    </article>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow hero-label">
          <span className="status-dot" />
          FREELANCE WEB DEVELOPER
        </p>

        <h1>
          Thoughtful websites.
          <br />
          <span>Real-world</span>
          <br />
          <span className="hero-last-line">
            <span className="hero-outline">business</span> impact.
          </span>
        </h1>

        <p className="hero-description">
          I'm Pooja Malusare, a web developer building considered digital
          experiences for businesses, local brands and growing ideas.
        </p>

        <div className="hero-actions">
          <a className="button button-dark" href="#work">
            Explore my work <Arrow />
          </a>
          <a className="text-link" href="#contact">
            Have a project in mind? <Arrow diagonal />
          </a>
        </div>
      </div>

      <div className="hero-art" aria-label="Portfolio introduction">
        <div className="hero-art-top">
          <span>INDEPENDENT DEVELOPER</span>
          <span>INDIA · AVAILABLE FOR PROJECTS</span>
        </div>

        <div className="hero-art-shape">
          <span className="shape-small">DESIGN</span>
          <span className="shape-big">
            MAKE
            <br />
            IT
            <br />
            MATTER.
          </span>
          <span className="shape-star">✳</span>
        </div>

        <div className="hero-art-bottom">
          <span>CREATIVE THINKING</span>
          <span>↘</span>
          <span>FUNCTIONAL BUILDING</span>
        </div>
      </div>

      <a className="scroll-cue" href="#work">
        <span className="scroll-line" />
        SCROLL TO EXPLORE
      </a>
    </section>
  );
}

function Work() {
  return (
    <section
      className="work-section section-wrap section-space"
      id="work"
    >
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2>
            Made with purpose.
            <br />
            <span>Built for people.</span>
          </h2>
        </div>

        <p className="section-intro">
          A selection of websites built for businesses, each with its own
          audience, needs and story.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="section-heading">
        <p className="eyebrow">KIND WORDS</p>
        <h2>What clients say.</h2>
        <p className="section-description">
          Building websites and meaningful working relationships.
        </p>
      </div>

      <div className="testimonials-grid">
        <article className="testimonial-card">
          <span className="quote-mark">“</span>
          <p className="testimonial-text">
            Working with Pooja on our website was a good experience. She
            helped us present our event decoration services and showcase our
            work through an attractive online presence. The website gives
            our business a more professional look and makes it easier for
            potential customers to explore our services.
          </p>
          <div className="testimonial-author">
            <img
  className="testimonial-avatar"
  src={`${import.meta.env.BASE_URL}images/testimonials/crazy-event-client.jpg`}
  alt="Sarthak Supekar, Crazy Event"
  loading="lazy"
/>
            <div>
              <h3>Sarthak Supekar</h3>
              <p>Crazy Event · Website project</p>
            </div>
          </div>
        </article>

        <article className="testimonial-card">
          <span className="quote-mark">“</span>
          <p className="testimonial-text">
            Pooja helped us create a website to present our Abacus and Vedic
            Maths classes online. The website provides a clear overview of
            our educational services and gives parents an easy way to learn
            more about our classes. We appreciate her effort in bringing
            our online presence together.
          </p>
          <div className="testimonial-author">
           <img
  className="testimonial-avatar"
  src={`${import.meta.env.BASE_URL}images/testimonials/saraswati-classes-client.jpg`}
  alt="Reshma Malusare, Saraswati Abacus and Vedic Classes"
  loading="lazy"
/>
            <div>
              <h3>Reshma Malusare</h3>
              <p>Saraswati Abacus &amp; Vedic Classes · Website project</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section section-space" id="about">
      <div className="section-wrap about-grid">
        <div className="about-side reveal">
          <p className="eyebrow">02 / A LITTLE ABOUT ME</p>

          <div className="about-stamp">
            <span>DESIGNED WITH</span>
            <span className="stamp-star">✳</span>
            <span>INTENTION</span>
          </div>

          <p className="about-role">Design-minded developer</p>

          <p className="about-disciplines">
            WEB <span>·</span> DESIGN <span>·</span> DEVELOPMENT
          </p>
        </div>

        <div className="about-copy reveal">
          <h2>
            I turn ideas into{" "}
            <span className="about-highlight">useful</span> digital
            experiences.
          </h2>

          <p className="about-intro">
            I'm Pooja, a postgraduate in Computer Science who builds
            thoughtful websites for businesses and individuals.
          </p>

          <p>
            I focus on clean design, responsive layouts and practical
            functionality, creating experiences that look good and work
            well across devices.
          </p>

          <div className="about-focus-list">
            <div className="about-focus-item">
              <span className="focus-number">01</span>
              <span>Responsive web experiences</span>
            </div>

            <div className="about-focus-item">
              <span className="focus-number">02</span>
              <span>Business-focused solutions</span>
            </div>

            <div className="about-focus-item">
              <span className="focus-number">03</span>
              <span>From concept to deployment</span>
            </div>
          </div>

          <a className="text-link" href="#work">
            Explore my work <Arrow diagonal />
          </a>

          <div className="about-details">
            <div className="about-detail">
              <span>MY APPROACH</span>
              <p>Thoughtful &amp; practical</p>
            </div>

            <div className="about-detail">
              <span>MY FOCUS</span>
              <p>Websites for real businesses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Process() {
  const steps = [
    {
      number: "01",
      icon: "◎",
      title: "Discovery",
      description:
        "We discuss your goals, audience, requirements and the purpose of your website.",
    },
    {
      number: "02",
      icon: "✳",
      title: "Design",
      description:
        "We plan the layout, structure and visual style to suit your brand.",
    },
    {
      number: "03",
      icon: "⌘",
      title: "Development",
      description:
        "Your website is built with responsive layouts and tested across devices.",
    },
    {
      number: "04",
      icon: "↗",
      title: "Launch",
      description:
        "We deploy your website and check that everything works as expected.",
    },
    {
      number: "05",
      icon: "↻",
      title: "Post-launch Support",
      description:
        "We help with agreed updates, fixes and ongoing website maintenance.",
    },
  ];

  return (
    <section className="process-section section-space" id="process">
      <div className="section-wrap">
        
<div className="process-heading reveal">
  <div>
    <p className="eyebrow">04 / THE PROCESS</p>
    <h2>
      From idea to launch.
      <br />
      <span>And beyond.</span>
    </h2>
  </div>

  <p className="process-intro">
    A clear, collaborative journey from our first conversation
    to ongoing support.
  </p>
</div>


        <div className="process-timeline">
          {steps.map((step, index) => (
            <article
              className={`process-step ${index % 2 === 0 ? "step-up" : "step-down"}`}
              key={step.number}
            >
              <div className="process-marker">
                <span className="process-icon" aria-hidden="true">
                  {step.icon}
                </span>
                <span className="process-number">{step.number}</span>
              </div>

              <div className="process-copy">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


function Contact() {
  return (
    <section
      className="contact-section section-wrap section-space"
      id="contact"
    >
      <div className="contact-panel reveal">
        <div className="contact-topline">
          <span className="eyebrow">05 / HAVE AN IDEA?</span>
          <span className="contact-spark">✳</span>
        </div>

        <h2>
          Let's make
          <br />
          something <span>meaningful.</span>
        </h2>

        <p>
          Need a website for your business, service or next big idea? Tell me
          what you're working on and let's discuss how I can help.
        </p>


<div className="contact-actions">
  <a
    className="button button-light"
    href="https://wa.me/917559131140?text=Hi%20Pooja%2C%20I%27m%20interested%20in%20discussing%20a%20website%20project."
    target="_blank"
    rel="noopener noreferrer"
  >
    Start a conversation <Arrow diagonal />
  </a>

<div className="contact-social-icons">
  <a
    href="https://wa.me/917559131140"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    title="WhatsApp"
  >
    <FaWhatsapp />
  </a>

  <a
    href="mailto:poojamalusare22@gmail.com"
    aria-label="Email"
    title="Email"
  >
    <Mail />
  </a>

  <a
    href="https://github.com/Pooja-bot07"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    title="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.instagram.com/_.malusarepooja._07/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    title="Instagram"
  >
    <FaInstagram />
  </a>
</div>

</div>


        <div className="contact-bottom">
          <span>WEB DESIGN &amp; DEVELOPMENT</span>
          <span>LET'S CREATE SOMETHING USEFUL.</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer section-wrap">
      <a className="brand" href="#home">
        PM<span className="brand-dot">.</span>
      </a>

      <p>Designed with intention. Built with care.</p>

      <div className="footer-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#about">Services</a>
        <a href="#contact">Contact</a>
        <a href="#home">Back to top ↑</a>
      </div>

      <span className="copyright">
        © {new Date().getFullYear()} Pooja Malusare
      </span>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Testimonials />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
