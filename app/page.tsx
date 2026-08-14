import { ThemeToggle } from "./theme-toggle";

const scholarUrl =
  "https://scholar.google.com/citations?user=BdT2ZvAAAAAJ&hl=en";

const researchInterests = [
  {
    title: "LLM Robustness and Reasoning",
    detail:
      "Evaluating reasoning stability under meaning-preserving perturbations and diagnosing performance-confidence mismatches.",
  },
  {
    title: "Mechanistic Interpretability",
    detail:
      "Using activation analysis, patching, and ablation to identify internal components associated with model failures.",
  },
  {
    title: "Trustworthy and Reliable AI",
    detail:
      "Developing reproducible methods to evaluate, explain, and improve the reliability of neural language models.",
  },
  {
    title: "Agentic Retrieval and Scientific Discovery",
    detail:
      "Building multi-step retrieval systems for literature comparison, contribution analysis, and research-gap identification.",
  },
];

const publications = [
  {
    year: "2026",
    title:
      "Fragile Reasoning: A Mechanistic Analysis of LLM Sensitivity to Meaning-Preserving Perturbations",
    authors: "Shou-Tzu Han, Rodrigue Rizk, and KC Santosh",
    href: "https://arxiv.org/abs/2604.01639",
    identifier: "arXiv:2604.01639",
  },
  {
    year: "2026",
    title:
      "Novelty-Aware Agentic Retrieval: Comparing Research Contributions Through Structured Multi-Step Reasoning",
    authors: "Shou-Tzu Han",
    href: "https://arxiv.org/abs/2606.22151",
    identifier: "arXiv:2606.22151",
  },
  {
    year: "2025",
    title:
      "Narrative-Centered Emotional Reflection: An Early Prototype for AI-Supported Emotional Self-Reflection",
    authors: "Shou-Tzu Han",
    href: "https://arxiv.org/abs/2504.20342",
    identifier: "arXiv:2504.20342",
  },
];

const projects = [
  {
    title:
      "Fragile Reasoning: A Mechanistic Analysis of LLM Sensitivity to Meaning-Preserving Perturbations",
    href: "https://arxiv.org/abs/2604.01639",
    bullets: [
      "Evaluated Mistral-7B, Llama-3-8B, and Qwen2.5-7B on 677 paired GSM8K problems, revealing answer-flip rates of 28.8%-45.1% under meaning-preserving perturbations.",
      "Developed the Mechanistic Perturbation Diagnostics (MPD) framework, integrating logit-lens analysis, activation patching, component ablation, and the novel Cascading Amplification Index (CAI).",
      "Identified localized, distributed, and entangled failure modes, demonstrating substantial architectural differences in failure localization and recoverability.",
      "Evaluated steering vectors and layer fine-tuning as targeted repair methods using Python, PyTorch, Hugging Face Transformers, GPUs, and SLURM.",
    ],
  },
  {
    title:
      "Novelty-Aware Agentic Retrieval: Comparing Research Contributions Through Structured Multi-Step Reasoning",
    href: "https://arxiv.org/abs/2606.22151",
    bullets: [
      "Built an agentic retrieval system over a 100-paper corpus using six components: query analysis, iterative retrieval, ranking, contribution extraction, comparison, and answer generation.",
      "Designed structured contribution records and a three-pass comparison agent to identify paper-level overlaps, methodological differences, and research gaps.",
      "Developed a problem-method gap matrix that generates citation-grounded evidence for unexplored combinations within a research corpus.",
      "Achieved a mean Precision@5 of 0.980, nDCG@5 of 0.739, and 84.0% schema compliance across ten evaluation queries.",
      "Implemented the system using Python, GPT-4o, FAISS/Chroma, SentenceTransformers, and structured prompting.",
    ],
  },
];

const technicalSkills = [
  {
    title: "Machine Learning & LLMs",
    detail:
      "PyTorch, TensorFlow, Hugging Face Transformers, OpenAI API, prompt design, model evaluation, reasoning analysis",
  },
  {
    title: "Interpretability & Reliability",
    detail:
      "Logit lens, activation patching, component ablation, steering vectors, perturbation analysis, failure diagnosis",
  },
  {
    title: "Agentic AI & Retrieval",
    detail:
      "RAG, FAISS, Chroma, BM25, SentenceTransformers, ReAct-style agents, structured prompting",
  },
  {
    title: "Programming & Data",
    detail:
      "Python, Java, JavaScript, TypeScript, SQL, Bash, pandas, NumPy, Matplotlib",
  },
  {
    title: "Computing & Development",
    detail:
      "SLURM, HPC, CUDA/GPU computing, Linux, Git, Docker, FastAPI, Flask, React, Vercel",
  },
];

const education = [
  {
    institution: "Wayne State University",
    location: "Detroit, Michigan",
    date: "2026-Present",
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
          <a href="#profile">Research</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
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
            <p className="kicker">Trustworthy AI · LLM robustness · Agentic retrieval</p>
            <h1 id="hero-title">
              Shou-Tzu Han <span className="alternate-name">(Debra Han)</span>
            </h1>
            <p className="hero-statement">
              Computer Science Ph.D. student and Graduate Research Assistant at
              Wayne State University.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://github.com/shou-tzu-han"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button button-secondary"
                href={scholarUrl}
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="mailto:ii1898@wayne.edu">
                Email me
              </a>
            </div>
            <p className="opportunity-note">
              Seeking a research internship focused on reliable and interpretable
              AI systems.
            </p>
          </div>
          <p className="hero-affiliation">
            Wayne State University · Trustworthy AI Lab · Detroit, Michigan
          </p>
        </section>

        <section className="section-shell profile-section" id="profile">
          <div className="section-heading">
            <div>
              <p className="section-number">01</p>
              <h2>Research Profile</h2>
            </div>
          </div>
          <p className="lead-copy">
            Computer Science Ph.D. student and Graduate Research Assistant at Wayne
            State University specializing in <strong>trustworthy AI, LLM robustness,
            mechanistic interpretability,</strong> and <strong>agentic retrieval</strong>.
            Experienced in designing reproducible GPU/HPC experiments, analyzing
            internal model behavior, and building evaluation pipelines for language
            and retrieval systems. Author of three arXiv preprints seeking a research
            internship focused on reliable and interpretable AI systems.
          </p>
        </section>

        <section className="section-shell" id="interests">
          <div className="section-heading">
            <div>
              <p className="section-number">02</p>
              <h2>Research Interests</h2>
            </div>
          </div>
          <div className="interest-list">
            {researchInterests.map((interest) => (
              <article className="interest-item" key={interest.title}>
                <h3>{interest.title}</h3>
                <p>{interest.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell" id="publications">
          <div className="section-heading">
            <div>
              <p className="section-number">03</p>
              <h2>Publications</h2>
            </div>
          </div>
          <div className="publication-list">
            {publications.map((publication, index) => (
              <article className="publication" key={publication.title}>
                <div className="publication-index">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{publication.year}</span>
                </div>
                <div className="publication-body">
                  <h3>{publication.title}</h3>
                  <p className="authors">{publication.authors}</p>
                  <p className="publication-detail">Preprint · {publication.identifier}</p>
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
        </section>

        <section className="section-shell" id="experience">
          <div className="section-heading">
            <div>
              <p className="section-number">04</p>
              <h2>Research Experiences</h2>
            </div>
          </div>
          <article className="position">
            <div className="position-heading">
              <div>
                <h3>Graduate Research Assistant</h3>
                <p>Wayne State University, Trustworthy AI Lab</p>
                <p className="position-advisors">Advisors: Dongxiao Zhu and Sooin Kim</p>
              </div>
              <time>2026-Present</time>
            </div>
            <ul className="detail-list">
              <li>
                Conduct research on <strong>AI-supported mentoring systems</strong>
                designed to improve the retention and educational experiences of
                veteran engineering students.
              </li>
              <li>
                Develop <strong>LLM-based mentoring components</strong> that provide
                structured, context-aware guidance and relevant academic resources.
              </li>
              <li>
                Build data-processing and evaluation pipelines to assess the
                <strong> usefulness, reliability, safety, and consistency</strong> of
                AI-generated support.
              </li>
              <li>
                Collaborate with an interdisciplinary team on literature reviews,
                system prototyping, experimental design, data analysis, and research
                documentation.
              </li>
            </ul>
          </article>
        </section>

        <section className="section-shell" id="projects">
          <div className="section-heading">
            <div>
              <p className="section-number">05</p>
              <h2>Research Projects</h2>
            </div>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project" key={project.title}>
                <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3>
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.title} <span aria-hidden="true">↗</span>
                    </a>
                  </h3>
                  <ul className="detail-list">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell" id="skills">
          <div className="section-heading">
            <div>
              <p className="section-number">06</p>
              <h2>Technical Skills</h2>
            </div>
          </div>
          <div className="skill-list">
            {technicalSkills.map((skill) => (
              <article className="skill-item" key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="education section-shell" id="education">
          <div className="section-heading">
            <div>
              <p className="section-number">07</p>
              <h2>Education</h2>
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

        <section className="contact section-shell" aria-labelledby="contact-title">
          <p className="section-number">Contact</p>
          <div className="contact-row">
            <h2 id="contact-title">Get in touch</h2>
            <div className="contact-actions">
              <a href="mailto:ii1898@wayne.edu">
                ii1898@wayne.edu <span aria-hidden="true">↗</span>
              </a>
              <a href="https://github.com/shou-tzu-han" target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
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
