import './App.css'

function App() {
  return (
    <>
      {/* Background Radial Glow */}
      <div className="glow-bg" />

      <div className="app-container">
        {/* Top Header */}
        <header className="app-header">
          <div className="logo-group">
            <div className="logo-icon">P</div>
            <span className="logo-text">Pedrario</span>
          </div>
          
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>Workspace Active</span>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="badge-tag">Development Environment</div>
          <h1 className="hero-title">
            Your beautiful new canvas for <span>Pedrario</span> is ready
          </h1>
          <p className="hero-subtitle">
            Clean code base loaded. The default boilerplate has been removed. 
            Start building your interface with preconfigured premium HSL variables, fluid typography, and dark-mode support.
          </p>
        </section>

        {/* Feature Grid Canvas */}
        <section className="grid-canvas">
          {/* Card 1 */}
          <div className="glass-card">
            <div className="card-icon-box">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="9" />
                <rect x="14" y="3" width="7" height="5" />
                <rect x="14" y="12" width="7" height="9" />
                <rect x="3" y="16" width="7" height="5" />
              </svg>
            </div>
            <h3 className="card-title">Explore Dashboard</h3>
            <p className="card-desc">
              Visualize metrics, monitor system performance, and query database entries inside a fast, reactive portal.
            </p>
            <span className="card-link">
              Open Dashboard
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>

          {/* Card 2 */}
          <div className="glass-card">
            <div className="card-icon-box">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <h3 className="card-title">Workspace Settings</h3>
            <p className="card-desc">
              Manage system settings, configure secure keys, and control project environment variables.
            </p>
            <span className="card-link">
              Configure parameters
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>

          {/* Card 3 */}
          <div className="glass-card">
            <div className="card-icon-box">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5v-15z" />
              </svg>
            </div>
            <h3 className="card-title">Documentation</h3>
            <p className="card-desc">
              Browse API guides, view preconfigured typography systems, and explore reusable UI components.
            </p>
            <span className="card-link">
              View API docs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </section>

        {/* CTA Starter Block */}
        <section className="cta-banner">
          <h4 className="cta-title">Start Customizing</h4>
          <p>Get started by editing the main application component file:</p>
          <div className="cta-code">src/App.tsx</div>
        </section>

        {/* Footer */}
        <footer className="app-footer">
          <span>&copy; {new Date().getFullYear()} Pedrario. All rights reserved.</span>
          <span>Built with React + TypeScript + Vite</span>
        </footer>
      </div>
    </>
  )
}

export default App
