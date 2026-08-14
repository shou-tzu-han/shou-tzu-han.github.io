import { ThemeToggle } from "./theme-toggle";

const publications = [
  {
    year: "2026",
    eyebrow: "Mechanistic interpretability",
    title:
      "Fragile Reasoning: A Mechanistic Analysis of LLM Sensitivity to Meaning-Preserving Perturbations",
    authors: "Shou-Tzu Han, Rodrigue Rizk, K. C. Santosh",
    detail:
      "Tests how reliably language models preserve reasoning when a problem’s meaning stays the same but its surface form changes.",
    signal: "677 paired problems · 3 open-weight LLMs",
    href: "https://arxiv.org/abs/2604.01639",
  },
  {
    year: "2026",
    eyebrow: "Agentic retrieval",
    title:
      "Novelty-Aware Agentic Retrieval: Comparing Research Contributions Through Structured Multi-Step Reasoning",
    authors: "Shou-Tzu Han",
    detail:
      "Turns literature comparison into a structured retrieval and reasoning process that surfaces contributions and research gaps.",
    signal: "6-component system · 100-paper corpus",
    href: "https://arxiv.org/abs/2606.22151",
  },
  {
    year: "2025",
    eyebrow: "Human-centered AI",
    title:
      "Narrative-Centered Emotional Reflection: Scaffolding Autonomous Emotional Literacy with AI",
    authors: "Shou-Tzu Han",
    detail:
      "Explores how emotion detection, layered prompts, and narrative generation can support structured personal reflection.",
    signal: "AI reflection prototype · 12-participant pilot",
    href: "https://arxiv.org/abs/2504.20342",
  },
];

const teachingAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "Natural Language Processing",
  "Generative AI & LLMs",
  "Trustworthy AI",
  "Python for AI",
];

const education = [
  {
    institution: "Wayne State University",
    location: "Detroit, Michigan",
    date: "2026–Present",
    degree: "Ph.D. in Computer Science",
    detail: "Graduate Research Assistant, Trustworthy AI Lab",
  },
  {
    institution: "Boston University",
    location: "Boston, Massachusetts",
    date: "August 2023",
    degree: "Master of Science in Computer Science",
    detail: "",
  },
  {
    institution: "Soochow University",
    location: "Taipei, Taiwan",
    date: "June 2020",
    degree: "Bachelor of Arts in Political Science",
    detail: "",
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Shou-Tzu Han, home">
          Shou-Tzu Han
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#education">Education</a>
          <a href="#teaching">Teaching</a>
          <a href="#about">About</a>
          <span className="nav-divider" aria-hidden="true" />
          <a
            href="https://scholar.google.com/citations?hl=en&user=BdT2ZvAAAAAJ&sortby=pubdate&view_op=list_works&gmla=AKCpqFydF800dB3sfS8khFutJSrcMxu3RtH5MbJg1q9nq5lo_CFe5LMQxjJY9RIa5WO3jCY5hLSjTNOnUz9dtold"
            target="_blank"
            rel="noreferrer"
          >
            Scholar <span aria-hidden="true">↗</span>
          </a>
          <a href="/Shou-Tzu-Han-Resume.pdf">
            Résumé <span aria-hidden="true">↓</span>
          </a>
          <a href="mailto:ii1898@wayne.edu">Email</a>
          <span className="nav-divider" aria-hidden="true" />
          <ThemeToggle />
        </nav>
      </header>

      <div id="content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="kicker">PhD researcher in trustworthy AI</p>
            <h1 id="hero-title">Shou-Tzu Han</h1>
            <p className="hero-statement">
              I study why language models fail under meaning-preserving changes—and
              build retrieval systems that make scientific comparison more rigorous.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#research">
                View selected work <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-secondary"
                href="https://scholar.google.com/citations?hl=en&user=BdT2ZvAAAAAJ&sortby=pubdate&view_op=list_works&gmla=AKCpqFydF800dB3sfS8khFutJSrcMxu3RtH5MbJg1q9nq5lo_CFe5LMQxjJY9RIa5WO3jCY5hLSjTNOnUz9dtold"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button button-secondary"
                href="mailto:ii1898@wayne.edu"
              >
                Email me
              </a>
            </div>
            <p className="opportunity-note">
              Exploring postdoctoral research beginning in 2028.
            </p>
          </div>
          <p className="hero-affiliation">
            Wayne State University · Detroit, Michigan
          </p>
        </section>

        <section className="research section-shell" id="research">
          <div className="section-heading">
            <div>
              <p className="section-number">Research</p>
              <h2>Selected publications</h2>
            </div>
            <p>
              My current work combines controlled experiments, mechanistic
              analysis, and retrieval evaluation to make AI behavior easier to
              test and interpret.
            </p>
          </div>

          <div className="publication-list">
            {publications.map((publication, index) => (
              <article className="publication" key={publication.title}>
                <div className="publication-index">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{publication.year}</span>
                </div>
                <div className="publication-body">
                  <p className="publication-eyebrow">{publication.eyebrow}</p>
                  <h3>{publication.title}</h3>
                  <p className="authors">{publication.authors}</p>
                  <p className="publication-detail">{publication.detail}</p>
                  <p className="research-signal">{publication.signal}</p>
                </div>
                <a
                  className="paper-link"
                  href={publication.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Read ${publication.title} on arXiv`}
                >
                  arXiv <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>

          <a
            className="text-link"
            href="https://scholar.google.com/citations?hl=en&user=BdT2ZvAAAAAJ&sortby=pubdate&view_op=list_works&gmla=AKCpqFydF800dB3sfS8khFutJSrcMxu3RtH5MbJg1q9nq5lo_CFe5LMQxjJY9RIa5WO3jCY5hLSjTNOnUz9dtold"
            target="_blank"
            rel="noreferrer"
          >
            View Google Scholar profile <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section className="education section-shell" id="education">
          <div className="section-heading">
            <div>
              <p className="section-number">Education</p>
              <h2>Academic background</h2>
            </div>
          </div>

          <div className="education-list">
            {education.map((item) => (
              <article className="education-item" key={item.institution}>
                <div>
                  <h3>{item.institution}</h3>
                  <p>{item.location}</p>
                </div>
                <div>
                  <p className="degree">{item.degree}</p>
                  {item.detail ? <p>{item.detail}</p> : null}
                </div>
                <time>{item.date}</time>
              </article>
            ))}
          </div>
        </section>

        <section className="teaching section-shell" id="teaching">
          <div className="section-heading section-heading-light">
            <div>
              <p className="section-number">Teaching</p>
              <h2>Teaching interests</h2>
            </div>
            <p>
              My teaching interests center on helping students connect theory to
              implementation, reproduce experiments, and evaluate AI claims
              critically.
            </p>
          </div>

          <div className="teaching-layout">
            <div className="course-grid" aria-label="Teaching areas of interest">
              {teachingAreas.map((area) => (
                <div className="course" key={area}>
                  <strong>{area}</strong>
                </div>
              ))}
            </div>
            <div className="teaching-note">
              <p className="note-label">Teaching approach</p>
              <p>
                Build the intuition. Implement the method. Test the assumptions.
                Explain what the result does—and does not—support.
              </p>
            </div>
          </div>
        </section>

        <section className="about section-shell" id="about">
          <div className="about-intro">
            <p className="section-number">About</p>
            <h2>Research profile</h2>
          </div>
          <div className="about-details">
            <p>
              I am a Computer Science PhD researcher and Graduate Research
              Assistant in the Trustworthy AI Lab at Wayne State University. My
              work spans LLM robustness, mechanistic interpretability, agentic
              retrieval, natural language processing, and human-centered AI.
            </p>
            <dl className="profile-list">
              <div>
                <dt>Current</dt>
                <dd>PhD in Computer Science, Wayne State University</dd>
              </div>
              <div>
                <dt>Methods</dt>
                <dd>
                  Python, Transformers, GPU/HPC experiments, activation patching,
                  ablation, retrieval evaluation
                </dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>Mandarin Chinese, English</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="contact section-shell" aria-labelledby="contact-title">
          <p className="section-number">Contact</p>
          <div className="contact-row">
            <h2 id="contact-title">Get in touch</h2>
            <div className="contact-actions">
              <a href="mailto:ii1898@wayne.edu">
                ii1898@wayne.edu <span aria-hidden="true">↗</span>
              </a>
              <a href="/Shou-Tzu-Han-Resume.pdf">
                Download résumé <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <span>© 2026 Shou-Tzu Han</span>
        <span>Trustworthy AI · Detroit, MI</span>
      </footer>
    </main>
  );
}
