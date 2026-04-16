import { useState } from 'react'

export default function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="dashboard-layout">
      {/* Sidebar Component */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          Central ERP
        </div>
        <nav className="sidebar-nav">
          <div 
            className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Dashboard Home
          </div>
          <div 
            className={`nav-item ${activeTab === 'academics' ? 'active' : ''}`}
            onClick={() => setActiveTab('academics')}
          >
            Academic Records
          </div>
          <div 
            className={`nav-item ${activeTab === 'financials' ? 'active' : ''}`}
            onClick={() => setActiveTab('financials')}
          >
            Financial Aid
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="top-navbar">
          <div className="breadcrumb">
            Student / <strong>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</strong>
          </div>
          <div className="user-controls">
            <span>Student (104859)</span>
            <button className="btn-outline" onClick={onLogout}>Log Out</button>
          </div>
        </header>

        <section className="page-content">
          <div className="page-header">
            <h1>Academic Overview</h1>
          </div>

          <div className="metric-cards">
            <div className="metric-card">
              <div className="metric-title">Cumulative GPA</div>
              <div className="metric-value">3.84</div>
            </div>
            <div className="metric-card">
              <div className="metric-title">Credits Completed</div>
              <div className="metric-value">92</div>
            </div>
            <div className="metric-card">
              <div className="metric-title">Holds</div>
              <div className="metric-value" style={{color: 'var(--success)'}}>None</div>
            </div>
          </div>

          <div className="data-table-container">
            <div className="data-table-header">
              Current Enrollment Schedule (Fall 2026)
            </div>
            <table>
              <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Description</th>
                  <th>Instructor</th>
                  <th>Credits</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CSC 301</td>
                  <td>Advanced Algorithms</td>
                  <td>Dr. A. Turing</td>
                  <td>4.0</td>
                  <td><span className="status-badge status-enrolled">Enrolled</span></td>
                </tr>
                <tr>
                  <td>DAT 420</td>
                  <td>Machine Learning Architecture</td>
                  <td>Prof. K. Clark</td>
                  <td>3.0</td>
                  <td><span className="status-badge status-enrolled">Enrolled</span></td>
                </tr>
                <tr>
                  <td>PHY 202</td>
                  <td>Quantum Mechanics Intro</td>
                  <td>Dr. R. Feynman</td>
                  <td>3.0</td>
                  <td><span className="status-badge status-waitlist">Waitlist (2)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}
