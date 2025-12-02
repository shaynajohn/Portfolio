const { useState } = React;

function ProjectCard({ title, description, highlights, tags, image }) {
  return (
    <div className="project-card">
      {image && <div className="project-image" style={{ background: image }} />}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
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

function ExperienceItem({ company, role, period, description, achievements }) {
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
            Turning complex data into elegant, interactive stories
          </p>
        </div>
      </header>

      <section className="section">
        <h2 className="section-title">Visualization Work</h2>
        <div className="projects-grid">
          <ProjectCard
            title="Moodify"
            description="NLP-driven mood-based music recommender powered by GPT and sentiment analysis"
            highlights={[
              "Analyzed 10K+ song lyrics with sentiment modeling",
              "Interactive UI integrating Spotify API for playlist generation",
              "Deployed on Streamlit with real-time recommendations"
            ]}
            tags={["NLP", "GPT", "Sentiment Analysis", "Streamlit", "Spotify API"]}
            image="linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)"
          />
          
          <ProjectCard
            title="Beautify"
            description="Web-based interactive recommender using NLP sentiment modeling on 15K+ reviews"
            highlights={[
              "Delivered 1,000+ real-time product recommendations",
              "Dynamic visualizations of ratings and sentiment trends",
              "Transparent recommendation rationales for user trust"
            ]}
            tags={["Python", "Streamlit", "NLP", "Recommender Systems"]}
            image="linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)"
          />

          <ProjectCard
            title="Nerts"
            description="Real-time multiplayer game with low-latency interactive UI"
            highlights={[
              "Built with React, Node.js, Socket.io, and Firebase",
              "Designed game state visualization for 20+ concurrent users",
              "Focused on intuitive UX and smooth player experience"
            ]}
            tags={["React", "Node.js", "Socket.io", "Firebase", "Real-time"]}
            image="linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)"
          />

          <ProjectCard
            title="Garmin Cloud Cost Analytics"
            description="Interactive Qlik dashboard tracking pipeline latency and cloud migration KPIs"
            highlights={[
              "Engineered ETL pipelines processing 50K+ daily server cost records",
              "Adopted by engineering teams and leadership for operational visibility",
              "Refactored legacy Airflow DAGs with Docker for scalability"
            ]}
            tags={["Qlik", "Apache Airflow", "Azure", "AWS", "ETL", "Docker"]}
            image="linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)"
          />

          <ProjectCard
            title="Werner Operations Dashboards"
            description="Interactive Tableau dashboards enabling data-driven operational decisions"
            highlights={[
              "Built and maintained dashboards adopted by 50+ stakeholders",
              "Wrote SQL queries on Snowflake for ETL validation and analytics",
              "Visualized key KPIs for leadership presentations"
            ]}
            tags={["Tableau", "Snowflake", "SQL", "Data Visualization"]}
            image="linear-gradient(135deg, #ddd6fe 0%, #c4b5fd 100%)"
          />

          <ProjectCard
            title="Economics Research Visualizations"
            description="Data visualizations for time-series and regression analyses"
            highlights={[
              "Automated Python ETL pipelines ingesting 10K+ financial records weekly",
              "Created visualizations translating complex economic data into insights",
              "Supported research at Nebraska College of Business"
            ]}
            tags={["Python", "ETL", "Time-Series", "Regression Analysis", "Research"]}
            image="linear-gradient(135deg, #fce7f3 0%, #f9a8d4 100%)"
          />
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          <ExperienceItem
            company="Hudl"
            role="Software Engineer"
            period="Aug 2025 - Present"
            description="Building interactive AI assistant dashboard using React & Node.js"
            achievements={[
              "Visualizing context-aware coaching insights from play data",
              "Improving coaching workflow efficiency by 30%",
              "Designing retrieval pipeline with vector embeddings & OpenAI API"
            ]}
          />
          
          <ExperienceItem
            company="Nebraska College of Business"
            role="Economics Research Assistant"
            period="Jan 2025 - Present"
            description="Automated ETL pipelines and data visualizations for economic research"
          />

          <ExperienceItem
            company="Garmin"
            role="Data Engineer Intern"
            period="May 2025 - Aug 2025"
            description="Engineered ETL pipelines and interactive dashboards for cloud cost analytics"
          />

          <ExperienceItem
            company="Nelnet"
            role="Software Engineer"
            period="Oct 2024 - Dec 2024"
            description="Developed AI-powered analytics dashboard using Python & React"
            achievements={[
              "Implemented data preprocessing & embedding pipelines",
              "Reduced query latency by 40%"
            ]}
          />

          <ExperienceItem
            company="Werner Enterprises"
            role="Business Analytics Intern"
            period="May 2024 - May 2025"
            description="Built interactive Tableau dashboards and SQL analytics"
          />
        </div>
      </section>

      <section className="section skills-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="skill-category-title">Frontend</h3>
            <p className="skill-items">React · JavaScript · Node.js · HTML · CSS</p>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Data & ML</h3>
            <p className="skill-items">Python · Pandas · NumPy · scikit-learn · TensorFlow · PyTorch · SQL</p>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Visualization</h3>
            <p className="skill-items">Tableau · Qlik · Streamlit · Matplotlib · Seaborn</p>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Tools</h3>
            <p className="skill-items">Apache Airflow · Snowflake · SSMS · SSRS · GitHub</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>University of Nebraska-Lincoln · Data Science · Raikes School</p>
      </footer>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
