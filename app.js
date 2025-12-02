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
            Building interactive dashboards and data visualizations that transform complex datasets 
            into clear, actionable insights—from real-time analytics to experiment readouts.
          </p>
          <div className="header-highlights">
            <span className="highlight-pill">Interactive Dashboards</span>
            <span className="highlight-pill">Data Storytelling</span>
            <span className="highlight-pill">Real-Time Visualization</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="section-intro">
          <h2 className="section-title">Data Visualization Projects</h2>
          <p className="section-subtitle">
            Interactive dashboards, real-time visualizations, and data storytelling tools that transform 
            complex datasets into clear narratives. Each project demonstrates visualization design principles, 
            user-centered thinking, and technical execution at scale.
          </p>
        </div>
        <div className="projects-grid">
          <ProjectCard
            title="Hudl AI Coaching Dashboard"
            description="Interactive React dashboard visualizing context-aware coaching insights from play data, 
            enabling coaches to discover patterns and make data-driven decisions in real-time."
            impact="30% improvement in coaching workflow efficiency"
            highlights={[
              "Built interactive React dashboard with real-time data visualization of coaching insights",
              "Designed custom visualization components for exploring similar plays and pattern discovery",
              "Created visualization layer showing model confidence scores, recommendation rationale, and contextual data",
              "Implemented drill-down visualizations enabling coaches to explore from high-level metrics to detailed play analysis"
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
              "Built interactive Streamlit dashboard with dynamic visualizations of ratings trends and sentiment analysis",
              "Created custom chart components: time-series sentiment trends, distribution histograms, confidence score visualizations",
              "Designed transparent explanation UI with visual rationale showing product match reasoning",
              "Implemented A/B testing framework with visualization readouts comparing explanation format performance"
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
              "Created interactive mood space visualization mapping 10K+ songs into explorable 2D/3D mood clusters",
              "Built dynamic visualization dashboard showing sentiment trends, mood transitions, and lyrical themes",
              "Designed custom visualization components for mood exploration with filtering and drill-down capabilities",
              "Integrated real-time visualization updates as users explore and generate playlists"
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
              "Built comprehensive Qlik dashboard with time-series visualizations tracking 50K+ daily cost records",
              "Created multi-level visualization hierarchy: executive KPI cards → detailed cost breakdown charts → drill-down tables",
              "Designed custom visualizations: pipeline latency trends, cost distribution histograms, migration progress indicators",
              "Implemented interactive filtering and cross-chart highlighting for exploratory data analysis"
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
              "Designed and built interactive Tableau dashboards with 50+ visualizations tracking operational KPIs",
              "Created comprehensive visualization suite: executive summary dashboards, operational drill-downs, trend analysis",
              "Built custom time-series visualizations, heatmaps, and comparative charts for cross-unit analysis",
              "Implemented dynamic filtering, parameter controls, and action filters enabling self-service analytics"
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
              "Created publication-quality data visualizations for time-series and regression analyses",
              "Designed custom visualization components showing statistical significance, confidence intervals, and effect sizes",
              "Built interactive Python visualizations (Matplotlib/Seaborn) enabling researchers to explore data relationships",
              "Developed visualization templates for consistent, clear presentation of economic research findings"
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
              "Built real-time visualization dashboard tracking game state, player actions, and live metrics",
              "Created custom React visualization components for game state representation with sub-100ms update latency",
              "Designed visualization patterns optimized for fast comprehension during high-speed gameplay",
              "Implemented real-time data streaming visualization ensuring smooth, lag-free user experience"
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
              "Built interactive React dashboard visualizing context-aware coaching insights with real-time updates",
              "Designed custom visualization components for exploring similar plays, pattern discovery, and recommendation rationale",
              "Created visualization layer showing model confidence scores, contextual data, and interactive drill-downs"
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
              "Built comprehensive Qlik dashboard with time-series visualizations, cost breakdowns, and migration progress tracking",
              "Designed multi-level visualization hierarchy: executive KPIs → detailed engineering metrics → drill-down analysis",
              "Created interactive visualizations enabling self-service exploration of 50K+ daily cost records"
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
              "Built interactive Python & React dashboard visualizing AI model insights and academic performance trends",
              "Designed visualization components showing model predictions, confidence intervals, and contextual explanations",
              "Created data visualization layer enabling educators to explore and validate model insights"
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
              "Designed and built 50+ interactive Tableau visualizations across operational dashboards",
              "Created comprehensive visualization suite: executive summaries, operational drill-downs, trend analysis charts",
              "Built custom visualizations including time-series, heatmaps, and comparative charts for strategic decision-making"
            ]}
          />
        </div>
      </section>

      <section className="section skills-section">
        <div className="section-intro">
          <h2 className="section-title">Technical Skills</h2>
        </div>
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
