import { ThemeToggle } from "./theme-toggle";

const scholarUrl =
  "https://scholar.google.com/citations?user=BdT2ZvAAAAAJ&hl=en";
const linkedInUrl =
  "https://www.linkedin.com/in/shou-tzu-debra-h-713724200/?skipRedirect=true";

const researchInterests = [
  {
    title: "LLM Agent Safety",
    detail:
      "Locating and attributing failures in LLM agent reasoning during multi-step, safety-critical tasks, and compiling verified failures into runtime checks.",
  },
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
    demoHref: "https://debrah1-novelty-aware-research-agent.hf.space/",
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
    contributions: [
      {
        label: "Evaluation",
        text: "Evaluated Mistral-7B, Llama-3-8B, and Qwen2.5-7B on 677 paired GSM8K problems, revealing answer-flip rates of 28.8%-45.1% under meaning-preserving perturbations.",
      },
      {
        label: "Framework",
        text: "Developed the Mechanistic Perturbation Diagnostics (MPD) framework, integrating logit-lens analysis, activation patching, component ablation, and the novel Cascading Amplification Index (CAI).",
      },
      {
        label: "Findings",
        text: "Identified localized, distributed, and entangled failure modes, demonstrating substantial architectural differences in failure localization and recoverability.",
      },
      {
        label: "Repair methods",
        text: "Evaluated steering vectors and layer fine-tuning as targeted repair methods using Python, PyTorch, Hugging Face Transformers, GPUs, and SLURM.",
      },
    ],
  },
  {
    title:
      "Novelty-Aware Agentic Retrieval: Comparing Research Contributions Through Structured Multi-Step Reasoning",
    href: "https://arxiv.org/abs/2606.22151",
    contributions: [
      {
        label: "System",
        text: "Built an agentic retrieval system over a 100-paper corpus using six components: query analysis, iterative retrieval, ranking, contribution extraction, comparison, and answer generation.",
      },
      {
        label: "Comparison",
        text: "Designed structured contribution records and a three-pass comparison agent to identify paper-level overlaps, methodological differences, and research gaps.",
      },
      {
        label: "Gap analysis",
        text: "Developed a problem-method gap matrix that generates citation-grounded evidence for unexplored combinations within a research corpus.",
      },
      {
        label: "Results",
        text: "Achieved a mean Precision@5 of 0.980, nDCG@5 of 0.739, and 84.0% schema compliance across ten evaluation queries.",
      },
      {
        label: "Implementation",
        text: "Implemented the system using Python, GPT-4o, FAISS/Chroma, SentenceTransformers, and structured prompting.",
      },
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
    date: "Aug 2026 – Present",
    degree: "Ph.D. in Computer Science",
    detail: "Graduate Research Assistant, Trustworthy AI Lab",
  },
  {
    institution: "Boston University",
    location: "Boston, Massachusetts",
    date: "Sep 2021 – Sep 2023",
    degree: "Master of Science in Computer Science",
    detail: "",
  },
  {
    institution: "Soochow University",
    location: "Taipei, Taiwan",
    date: "Sep 2015 – Jun 2020",
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
              <a
                className="button button-secondary"
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="mailto:ii1898@wayne.edu">
                Email me
              </a>
            </div>
          </div>
          <aside className="hero-summary" aria-label="Current position and availability">
            <dl>
              <div>
                <dt>Current role</dt>
                <dd>Ph.D. student · Graduate Research Assistant</dd>
              </div>
              <div>
                <dt>Institution</dt>
                <dd>Wayne State University</dd>
              </div>
              <div>
                <dt>Research group</dt>
                <dd>Trustworthy AI Lab</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>Detroit, Michigan</dd>
              </div>
            </dl>
            <div className="hero-opportunity">
              <p>Open to research internships</p>
              <span>Reliable and interpretable AI systems</span>
            </div>
          </aside>
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
            State University specializing in <strong>trustworthy AI, LLM agent safety,
            LLM robustness,</strong> and <strong>mechanistic interpretability</strong>.
            Experienced in designing reproducible GPU/HPC experiments, analyzing
            internal model behavior, and building evaluation pipelines for language
            and agent systems. Author of three arXiv preprints. Seeking a research
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
                <div className="publication-actions">
                  <a
                    className="paper-link"
                    href={publication.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Read ${publication.title} on arXiv`}
                  >
                    arXiv <span aria-hidden="true">↗</span>
                  </a>
                  {publication.demoHref ? (
                    <a
                      className="paper-link"
                      href={publication.demoHref}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open the live demo for ${publication.title}`}
                    >
                      Live demo <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </div>
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
              <time>2026–Present</time>
            </div>
            <div className="experience-areas">
              <section className="experience-area">
                <div className="experience-area-heading">
                  <p>Research focus 01</p>
                  <h4>LLM Agent Safety Research</h4>
                </div>
                <ol className="experience-points">
                  <li>
                    Research where and why LLM agent reasoning fails during
                    multi-step, safety-critical tasks, spanning action selection,
                    tool use, and decision-making under injected or adversarial
                    context.
                  </li>
                  <li>
                    Develop an outcome-grounded auditing method that commits
                    checkable predictions before an action, then uses the real
                    execution result to localize the failing reasoning step and
                    compile it into a runtime check.
                  </li>
                  <li>
                    Design fault-injection and component-removal experiments on
                    agent benchmarks to measure whether the method attributes
                    failures to the correct cause.
                  </li>
                </ol>
              </section>

              <section className="experience-area">
                <div className="experience-area-heading">
                  <p>Research focus 02</p>
                  <h4>AI-Supported Mentoring Systems</h4>
                </div>
                <ol className="experience-points">
                  <li>
                    Develop AI-supported mentoring systems aimed at improving
                    retention and educational experiences for veteran engineering
                    students.
                  </li>
                  <li>
                    Build LLM-based mentoring components that deliver structured,
                    context-aware guidance and relevant academic resources.
                  </li>
                  <li>
                    Contribute to system prototyping, experimental design, data
                    analysis, and evaluation of AI-generated support.
                  </li>
                </ol>
              </section>
            </div>
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
                <div className="project-header">
                  <p className="project-number">
                    Research project {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3>
                    {project.title}
                  </h3>
                  <a
                    className="project-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View preprint <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <ol className="project-points">
                  {project.contributions.map((contribution, contributionIndex) => (
                    <li key={contribution.label}>
                      <div className="project-point-heading">
                        <span>{String(contributionIndex + 1).padStart(2, "0")}</span>
                        <h4>{contribution.label}</h4>
                      </div>
                      <p>{contribution.text}</p>
                    </li>
                  ))}
                </ol>
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
                <time>{item.date}</time>
                <div>
                  <h3>{item.institution}</h3>
                  <p>{item.location}</p>
                </div>
                <div>
                  <p className="degree">{item.degree}</p>
                  {item.detail ? <p>{item.detail}</p> : null}
                </div>
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
              <a href={linkedInUrl} target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
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
