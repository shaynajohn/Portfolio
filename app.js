const { useState } = React;

function MetricBadge({ value, label, trend }) {
  return (
    <div className="metric-badge">
      <div className="metric-value">{value}</div>
      <div className="metric-label">{label}</div>
      {trend && <div className="metric-trend">{trend}</div>}
    </div>
  );
}

function ProjectCard({ title, description, highlights, tags, image, impact }) {
  return (
    <div className="project-card">
      {image && <div className="project-image" style={{ background: image }} />}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        {impact && (
          <div className="project-impact">
            <strong>Impact:</strong> {impact}
          </div>
        )}
        <ul className="project-highlights">
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceItem({ company, role, period, description, achievements, metrics }) {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <div>
          <h3 className="experience-company">{company}</h3>
          <p className="experience-role">{role}</p>
        </div>
        <span className="experience-period">{period}</span>
      </div>
      <p className="experience-description">{description}</p>
      {metrics && (
        <div className="experience-metrics">
          {metrics.map((m, i) => (
            <MetricBadge key={i} value={m.value} label={m.label} trend={m.trend} />
          ))}
        </div>
      )}
      {achievements && (
        <ul className="experience-achievements">
          {achievements.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function App() {
  return (
    <main className="page">
      <header className="header">
        <div className="header-content">
          <h1 className="name">Shayna John</h1>
          <p className="tagline">Data Visualization Engineer</p>
          <p className="intro">
            Building interactive visualizations that drive member engagement and data-driven decisions at scale
          </p>
          <div className="header-highlights">
            <span className="highlight-pill">Experimentation & A/B Testing</span>
            <span className="highlight-pill">Member-Centric Design</span>
            <span className="highlight-pill">Real-Time Analytics</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="section-intro">
          <h2 className="section-title">Data Visualization Projects</h2>
          <p className="section-subtitle">
            Interactive dashboards and visualizations that translate complex data into actionable insights, 
            driving engagement and supporting experimentation workflows.
          </p>
        </div>
        <div className="projects-grid">
          <ProjectCard
            title="Hudl AI Coaching Dashboard"
            description="Interactive React dashboard visualizing context-aware coaching insights from play data, 
            enabling coaches to discover patterns and make data-driven decisions in real-time."
            impact="30% improvement in coaching workflow efficiency"
            highlights={[
              "Built retrieval pipeline with vector embeddings for fast access to historical play patterns",
              "Designed intuitive UI for exploring similar plays and contextual recommendations",
              "Visualized model confidence scores alongside recommendations for transparency",
              "Supported interactive analytics with sub-second query latency"
            ]}
            tags={["React", "Node.js", "Vector Embeddings", "OpenAI API", "Real-Time"]}
            image="linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)"
          />
          
          <ProjectCard
            title="Beautify Recommender System"
            description="Web-based interactive recommender with transparent explanations, using NLP sentiment 
            analysis to surface personalized product recommendations with clear rationale."
            impact="1,000+ real-time recommendations delivered"
            highlights={[
              "NLP sentiment modeling on 15K+ product reviews to understand satisfaction drivers",
              "Dynamic visualizations of ratings trends, sentiment distribution, and recommendation confidence",
              "Transparent explanation UI showing why products match user preferences",
              "A/B tested explanation formats to optimize engagement and trust"
            ]}
            tags={["Python", "Streamlit", "NLP", "Recommender Systems", "A/B Testing"]}
            image="linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)"
          />

          <ProjectCard
            title="Moodify Music Discovery"
            description="NLP-driven mood-based music recommender that maps song lyrics into mood space, 
            enabling users to explore and discover music through interactive visualizations."
            impact="10K+ song lyrics analyzed for sentiment patterns"
            highlights={[
              "Sentiment analysis pipeline processing 10K+ song lyrics for mood classification",
              "GPT-powered theme extraction to understand lyrical content beyond sentiment",
              "Interactive mood space visualization for exploration vs. passive recommendation",
              "Spotify API integration for on-demand playlist generation"
            ]}
            tags={["NLP", "GPT", "Sentiment Analysis", "Streamlit", "Spotify API"]}
            image="linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)"
          />

          <ProjectCard
            title="Garmin Cloud Cost Analytics Dashboard"
            description="Interactive Qlik dashboard tracking pipeline latency and cloud migration KPIs, 
            adopted by engineering teams and leadership for operational visibility and cost optimization."
            impact="50K+ daily records processed, adopted by 50+ stakeholders"
            highlights={[
              "Engineered ETL pipelines in Apache Airflow processing 50K+ daily server cost records",
              "Visualized pipeline latency trends, cost breakdowns, and migration progress",
              "Designed executive-level KPIs alongside detailed engineering metrics",
              "Refactored legacy DAGs with Docker for improved scalability and reliability"
            ]}
            tags={["Qlik", "Apache Airflow", "Azure", "AWS", "ETL", "Docker"]}
            image="linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)"
          />

          <ProjectCard
            title="Werner Operations Dashboards"
            description="Interactive Tableau dashboards enabling data-driven operational decisions, 
            visualizing key KPIs and supporting ad-hoc analytics for 50+ stakeholders."
            impact="50+ stakeholders using dashboards for daily decision-making"
            highlights={[
              "Built and maintained operational dashboards tracking KPIs across business units",
              "Wrote complex SQL queries on Snowflake for ETL validation and ad-hoc analytics",
              "Designed visualization hierarchy: executive summaries → detailed drill-downs",
              "Created time-series visualizations for trend analysis and forecasting"
            ]}
            tags={["Tableau", "Snowflake", "SQL", "Data Visualization", "Time-Series"]}
            image="linear-gradient(135deg, #ddd6fe 0%, #c4b5fd 100%)"
          />

          <ProjectCard
            title="Economics Research Visualizations"
            description="Data visualizations for time-series and regression analyses, translating 
            complex economic data into clear insights for research publications and presentations."
            impact="10K+ financial records processed weekly"
            highlights={[
              "Automated Python ETL pipelines ingesting 10K+ financial records weekly from multiple sources",
              "Created publication-quality visualizations for time-series and regression analyses",
              "Designed visualizations that communicate statistical significance and effect sizes",
              "Supported research presentations with clear, data-driven narratives"
            ]}
            tags={["Python", "ETL", "Time-Series", "Regression Analysis", "Research"]}
            image="linear-gradient(135deg, #fce7f3 0%, #f9a8d4 100%)"
          />

          <ProjectCard
            title="Nerts Real-Time Game Dashboard"
            description="Real-time multiplayer game with low-latency interactive UI, featuring 
            game state visualization and smooth player experience for 20+ concurrent users."
            impact="20+ concurrent users, sub-100ms latency"
            highlights={[
              "Built real-time game state visualization using React, Node.js, Socket.io, and Firebase",
              "Designed intuitive UI for game state tracking and player interactions",
              "Optimized for low-latency updates ensuring smooth multiplayer experience",
              "Focused on UX patterns that reduce cognitive load during fast-paced gameplay"
            ]}
            tags={["React", "Node.js", "Socket.io", "Firebase", "Real-Time"]}
            image="linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)"
          />
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Building data visualization tools and dashboards that drive business impact across 
            sports tech, cloud infrastructure, and education sectors.
          </p>
        </div>
        <div className="experience-list">
          <ExperienceItem
            company="Hudl"
            role="Software Engineer"
            period="Aug 2025 - Present"
            description="Building interactive AI assistant dashboard using React & Node.js, visualizing 
            context-aware coaching insights from play data to improve coaching workflow efficiency."
            metrics={[
              { value: "30%", label: "Workflow Efficiency", trend: "↑ improvement" },
              { value: "Real-time", label: "Query Latency", trend: "Sub-second" }
            ]}
            achievements={[
              "Designed retrieval pipeline with vector embeddings & OpenAI API for fast access to historical play patterns",
              "Built interactive analytics supporting exploration of similar plays and contextual recommendations",
              "Visualized model confidence scores alongside recommendations for transparency and trust"
            ]}
          />
          
          <ExperienceItem
            company="Nebraska College of Business"
            role="Economics Research Assistant"
            period="Jan 2025 - Present"
            description="Automated Python ETL pipelines and created data visualizations for time-series 
            and regression analyses, translating complex economic data into actionable insights."
            metrics={[
              { value: "10K+", label: "Records/Week", trend: "Automated" }
            ]}
          />

          <ExperienceItem
            company="Garmin"
            role="Data Engineer Intern"
            period="May 2025 - Aug 2025"
            description="Engineered ETL pipelines in Apache Airflow and designed interactive Qlik dashboards 
            tracking pipeline latency and cloud migration KPIs, adopted by engineering teams and leadership."
            metrics={[
              { value: "50K+", label: "Daily Records", trend: "Processed" },
              { value: "50+", label: "Stakeholders", trend: "Adopted" }
            ]}
            achievements={[
              "Ingested 50K+ daily server cost records from Azure & AWS into Unified Data Management system",
              "Developed interactive Qlik dashboard tracking pipeline latency & cloud migration KPIs",
              "Refactored & containerized legacy Airflow DAGs with Docker, improving scalability"
            ]}
          />

          <ExperienceItem
            company="Nelnet"
            role="Software Engineer"
            period="Oct 2024 - Dec 2024"
            description="Developed AI-powered analytics dashboard using Python & React to surface insights 
            from academic performance data, implementing data preprocessing & embedding pipelines."
            metrics={[
              { value: "40%", label: "Query Latency", trend: "↓ reduction" }
            ]}
            achievements={[
              "Implemented data preprocessing & embedding pipelines that reduced query latency by 40%",
              "Built visualization layer for model insights with context for user validation"
            ]}
          />

          <ExperienceItem
            company="Werner Enterprises"
            role="Business Analytics Intern"
            period="May 2024 - May 2025"
            description="Built and maintained interactive Tableau dashboards adopted by 50+ stakeholders, 
            enabling data-driven operational decisions through SQL analytics on Snowflake."
            metrics={[
              { value: "50+", label: "Stakeholders", trend: "Daily users" }
            ]}
            achievements={[
              "Built & maintained interactive Tableau dashboards adopted by 50+ stakeholders",
              "Wrote SQL queries on Snowflake for ETL validation & ad hoc analytics",
              "Conducted analyses supporting strategic initiatives & visualized key KPIs for leadership"
            ]}
          />
        </div>
      </section>

      <section className="section why-netflix-section">
        <div className="section-intro">
          <h2 className="section-title">Why Data Visualization at Netflix</h2>
          <p className="section-subtitle">
            I'm drawn to Netflix's culture of experimentation and data-driven decision making. 
            The opportunity to build visualizations that help teams understand member behavior, 
            evaluate A/B test results, and drive product decisions at Netflix's scale is exactly 
            the kind of impact I want to make.
          </p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <h3 className="why-title">Experimentation at Scale</h3>
            <p className="why-text">
              I've built dashboards that support A/B testing workflows and translate experiment 
              results into actionable insights. At Netflix, I'd help teams understand what's 
              working and why through clear, compelling visualizations.
            </p>
          </div>
          <div className="why-card">
            <h3 className="why-title">Member-Centric Design</h3>
            <p className="why-text">
              My work on recommendation systems (Beautify, Moodify) taught me to think about 
              how visualizations can build trust and help users understand why content is 
              recommended—critical for Netflix's personalization efforts.
            </p>
          </div>
          <div className="why-card">
            <h3 className="why-title">Technical Depth</h3>
            <p className="why-text">
              From real-time React dashboards to ETL pipelines processing millions of records, 
              I have the full-stack skills to build visualization tools that are both beautiful 
              and performant at Netflix's scale.
            </p>
          </div>
        </div>
      </section>

      <section className="section skills-section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="skill-category-title">Frontend & Visualization</h3>
            <p className="skill-items">React · JavaScript · Node.js · D3.js · HTML · CSS</p>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Data & ML</h3>
            <p className="skill-items">Python · Pandas · NumPy · scikit-learn · TensorFlow · PyTorch · SQL</p>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">BI & Analytics</h3>
            <p className="skill-items">Tableau · Qlik · Streamlit · Matplotlib · Seaborn</p>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Data Engineering</h3>
            <p className="skill-items">Apache Airflow · Snowflake · SSMS · SSRS · ETL Pipelines</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>University of Nebraska-Lincoln · Data Science · Jeffrey S. Raikes School</p>
        <p className="footer-subtitle">Raikes School: Integrating business concepts with computer science, emphasizing real-world experience & collaboration</p>
      </footer>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
