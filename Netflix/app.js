const { useState, useMemo } = React;

function LineChart({ data, color, accent }) {
  const width = 320;
  const height = 140;
  const padding = 24;

  const points = useMemo(() => {
    if (!data.length) return [];
    const xs = data.map((d) => d.x);
    const ys = data.map((d) => d.y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const rangeX = maxX - minX || 1;
    const rangeY = maxY - minY || 1;

    return data.map((d) => ({
      x:
        padding +
        ((d.x - minX) / rangeX) * (width - padding * 1.5),
      y:
        height -
        padding -
        ((d.y - minY) / rangeY) * (height - padding * 2),
      label: d.label,
      value: d.y,
    }));
  }, [data]);

  if (!points.length) return null;

  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  const areaD =
    `M ${points[0].x} ${height - padding} ` +
    points.map((p) => `L ${p.x} ${p.y}`).join(" ") +
    ` L ${points[points.length - 1].x} ${height - padding} Z`;

  return (
    <svg
      className="chart-svg"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Metric trend over time"
    >
      <defs>
        <linearGradient id={`grad-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.6" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={areaD}
        className="chart-area"
        fill={`url(#grad-${color})`}
      />
      <path d={pathD} className="chart-line" stroke={color} />
      {points.map((p, idx) => (
        <g key={idx}>
          <circle
            className="chart-dot"
            cx={p.x}
            cy={p.y}
            r="3.2"
            fill="#020617"
            stroke={color}
          />
          <text
            className="chart-axis-label"
            x={p.x}
            y={height - 8}
            textAnchor="middle"
          >
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function StackedBarChart({ data }) {
  const width = 320;
  const height = 140;
  const padding = 26;

  const segments = ["Completion", "Explainer", "ColdStart"];
  const colors = {
    Completion: "#22c55e",
    Explainer: "#eab308",
    ColdStart: "#38bdf8",
  };

  const maxTotal = Math.max(
    ...data.map((d) => d.Completion + d.Explainer + d.ColdStart),
    1
  );

  const barWidth =
    (width - padding * 2) / Math.max(data.length, 1) - 8;

  return (
    <svg
      className="chart-svg"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Breakdown of explanation impact on engagement"
    >
      {data.map((d, i) => {
        const x = padding + i * (barWidth + 8);
        let yBase = height - padding;

        return (
          <g key={d.label}>
            {segments.map((seg) => {
              const value = d[seg];
              const segHeight =
                (value / maxTotal) * (height - padding * 2);
              yBase -= segHeight;
              return (
                <rect
                  key={seg}
                  x={x}
                  y={yBase}
                  width={barWidth}
                  height={segHeight}
                  fill={colors[seg]}
                  rx="3"
                />
              );
            })}
            <text
              className="chart-axis-label"
              x={x + barWidth / 2}
              y={height - 6}
              textAnchor="middle"
            >
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function HeroMetricsPanel() {
  const upliftData = [
    { label: "T-4", x: 0, y: 0.0 },
    { label: "T-3", x: 1, y: 0.06 },
    { label: "T-2", x: 2, y: 0.12 },
    { label: "T-1", x: 3, y: 0.20 },
    { label: "Launch", x: 4, y: 0.32 },
  ];

  return (
    <div className="hero-metrics-card">
      <div className="hero-metrics-header">
        <div>
          <div className="hero-metrics-title">
            Test Hub · A/B Cell: Shayna-Explanations
          </div>
          <div
            style={{
              fontSize: 11,
              color: "#9ca3af",
              marginTop: 2,
            }}
          >
            Personal sandbox · Synthetic but realistic metrics
          </div>
        </div>
        <span className="hero-metrics-pill">Data Story</span>
      </div>

      <div className="metric-row">
        <div className="metric-label">Time watched / member</div>
        <div className="metric-value">
          +18.4%
          <span
            style={{
              fontSize: 11,
              color: "#6ee7b7",
              marginLeft: 6,
            }}
          >
            vs. control
          </span>
        </div>
      </div>
      <div className="metric-row">
        <div className="metric-label">Explained rec. click-through</div>
        <div className="metric-value">
          31.2%
          <span className="metric-tag">experiment win</span>
        </div>
      </div>

      <div className="chart-container">
        <LineChart
          data={upliftData}
          color="#e50914"
          accent="#f97316"
        />
      </div>
    </div>
  );
}

function ProjectCard({ title, role, description, bullets, badges }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">{title}</div>
        <div className="card-meta">{role}</div>
      </div>
      <div className="card-body">{description}</div>
      <ul style={{ paddingLeft: 18, margin: "4px 0 0", fontSize: 12 }}>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="badge-row">
        {badges.map((b) => (
          <span key={b} className="badge">
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

function WorkStreamTimeline() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Recent work streams</div>
        <div className="card-meta">2024 – 2025</div>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-title">
            Hudl · Software Engineer · AI coaching assistant
          </div>
          <div className="timeline-meta">
            React, Node.js, OpenAI · +30% workflow efficiency
          </div>
          <div className="timeline-body">
            Built an interactive dashboard that turns play data into
            context-aware coaching insights, backed by an embedding
            retrieval pipeline for real-time analytics.
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-title">
            Garmin · Data Engineer Intern
          </div>
          <div className="timeline-meta">
            Airflow, Azure, AWS, Qlik · 50K+ daily cost records
          </div>
          <div className="timeline-body">
            Engineered ETL into a unified data platform and designed
            latency & migration dashboards adopted across engineering
            teams and leadership.
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-title">
            Werner · Business Analytics Intern
          </div>
          <div className="timeline-meta">
            Tableau, Snowflake · 50+ stakeholders
          </div>
          <div className="timeline-body">
            Built and maintained operational dashboards and ran
            ad‑hoc SQL analyses to support data‑driven decisions.
          </div>
        </div>
      </div>
    </div>
  );
}

function ExplainerImpactPanel() {
  const [focus, setFocus] = useState("Completion");

  const data = [
    {
      label: "Row 1",
      Completion: 40,
      Explainer: 28,
      ColdStart: 12,
    },
    { label: "Row 2", Completion: 52, Explainer: 33, ColdStart: 15 },
    { label: "Row 3", Completion: 61, Explainer: 40, ColdStart: 18 },
  ];

  const explanations = {
    Completion:
      "Explained recommendations increase completion by making intent obvious: members know why a title is a fit, so they commit.",
    Explainer:
      "Short, human explanations drive trust and curiosity — especially for long‑tail titles that don't have strong brand recognition.",
    ColdStart:
      "Cold‑start members benefit the most: explanations substitute for missing behavior, bootstrapping personalization in week one.",
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          How explanations change member behavior
        </div>
        <div className="card-meta">Synthetic Netflix-style data</div>
      </div>
      <div className="card-body">
        An interactive sketch of how explanation UX could move key
        streaming metrics across rows of the homepage.
      </div>
      <div
        style={{
          display: "flex",
          gap: 8,
          marginBottom: 8,
          flexWrap: "wrap",
        }}
      >
        {["Completion", "Explainer", "ColdStart"].map((k) => (
          <button
            key={k}
            className="ghost-btn"
            style={{
              padding: "4px 10px",
              fontSize: 11,
              borderColor:
                focus === k ? "#e50914" : "#4b5563",
              color: focus === k ? "#e5e7eb" : "#9ca3af",
              background:
                focus === k ? "#111827" : "transparent",
            }}
            onClick={() => setFocus(k)}
          >
            {k === "Completion"
              ? "Viewing completion"
              : k === "Explainer"
              ? "Explanation CTR"
              : "Cold‑start uplift"}
          </button>
        ))}
      </div>
      <StackedBarChart data={data} />
      <div
        style={{
          marginTop: 8,
          fontSize: 12,
          color: "#9ca3af",
        }}
      >
        {explanations[focus]}
      </div>
    </div>
  );
}

function SkillsSection() {
  const skills = [
    {
      group: "Visualization & Storytelling",
      items: [
        "React dashboards",
        "Interactive charts",
        "Experiment readouts",
        "Time‑series & regression visuals",
      ],
    },
    {
      group: "Data & ML",
      items: [
        "Python · Pandas · NumPy · scikit‑learn",
        "TensorFlow · Keras · PyTorch",
        "SQL · Snowflake · ETL",
        "Airflow pipelines",
      ],
    },
    {
      group: "Product & Collaboration",
      items: [
        "Raikes School: CS + business",
        "Stakeholder‑facing dashboards",
        "Cross‑functional experimentation",
      ],
    },
  ];

  return (
    <div className="section">
      <div className="section-header">
        <div className="section-title">What I bring</div>
        <div className="section-subtitle">
          A hybrid background across data engineering, ML, and
          front‑end visualization — tuned for decision‑making.
        </div>
      </div>
      <div className="grid">
        {skills.map((s) => (
          <div key={s.group} className="card">
            <div className="card-title">{s.group}</div>
            <ul
              style={{
                paddingLeft: 18,
                margin: "8px 0 0",
                fontSize: 12.5,
                color: "#9ca3af",
              }}
            >
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="page">
      <section className="hero">
        <div>
          <div className="tagline">
            <span className="tagline-dot" />
            Data Visualization & ML for Story‑Driven Products
          </div>
          <h1 className="hero-title">
            Hi, I&apos;m <span>Shayna</span>. I turn noisy data into
            streaming‑ready stories.
          </h1>
          <p className="hero-subtitle">
            Data Science @ University of Nebraska–Lincoln · Raikes
            School. I build interfaces where metrics, models, and
            members meet — from AI analytics dashboards to
            experimentation readouts.
          </p>
          <div className="pill-row">
            <span className="pill">React · JavaScript · Node.js</span>
            <span className="pill">Python · ML · Embeddings</span>
            <span className="pill">Tableau · Qlik · Streamlit</span>
            <span className="pill">
              Experiment‑driven product thinking
            </span>
          </div>
          <div className="hero-links">
            <a
              className="primary-btn"
              href="#visualizations"
            >
              View visualization stories
              <span aria-hidden>↗</span>
            </a>
            <a
              className="ghost-btn"
              href="#experience"
            >
              Resume snapshot
            </a>
          </div>
        </div>
        <HeroMetricsPanel />
      </section>

      <section id="visualizations" className="section">
        <div className="section-header">
          <div className="section-title">
            Visualization stories I love to tell
          </div>
          <div className="section-subtitle">
            A curated set of projects that show how I design
            front‑end experiences around metrics and models.
          </div>
        </div>
        <div className="grid">
          <ProjectCard
            title="Beautify · Real‑time product recommender"
            role="Builder · 2025"
            description="A web‑based recommender that surfaces beauty products with transparent, sentiment‑aware explanations."
            bullets={[
              "Used NLP on 15K+ reviews to model sentiment and drivers of satisfaction.",
              "Built dynamic visualizations of ratings, sentiment trends, and rationale attribution.",
              "Focused the UI on trust: why this product, right now, for you.",
            ]}
            badges={[
              "Python",
              "Streamlit",
              "NLP",
              "Recommenders",
            ]}
          />
          <ProjectCard
            title="Moodify · Mood‑based music explorer"
            role="Builder · 2025"
            description="An interactive experience that maps song lyrics into mood space and generates playlists powered by GPT."
            bullets={[
              "Combined sentiment analysis with GPT to understand lyrical themes.",
              "Visualized mood clusters so users can explore the space, not just a list.",
              "Integrated Spotify for on‑demand playlist generation.",
            ]}
            badges={[
              "NLP",
              "GPT",
              "Spotify API",
              "Interactive UI",
            ]}
          />
          <ProjectCard
            title="AI analytics dashboards"
            role="Hudl & Nelnet"
            description="Dashboards that embed ML outputs directly into the workflows of coaches and educators."
            bullets={[
              "Visualized model insights alongside raw context so users can challenge the model when needed.",
              "Built retrieval‑backed UIs to explore similar plays or students in real‑time.",
            ]}
            badges={[
              "React",
              "Node.js",
              "Python",
              "Embeddings",
            ]}
          />
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-header">
          <div className="section-title">Experience snapshot</div>
          <div className="section-subtitle">
            From cost analytics and operations to AI‑assisted
            coaching — always with a visual layer on top.
          </div>
        </div>
        <div className="grid">
          <WorkStreamTimeline />
          <ExplainerImpactPanel />
        </div>
      </section>

      <SkillsSection />

      <footer className="footer">
        <span>
          University of Nebraska–Lincoln · Data Science · Jeffrey S.
          Raikes School
        </span>
        <span>
          Gallup strengths: Responsibility · Relator · Restorative ·
          Discipline · Harmony
        </span>
      </footer>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


