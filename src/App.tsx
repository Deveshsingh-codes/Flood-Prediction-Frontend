import React from 'react';
import { Navigation } from './components/Navigation';
import { Dashboard } from './pages/Dashboard';
import { RiskMap } from './pages/RiskMap';
import { Alerts } from './pages/Alerts';
import { Analytics } from './pages/Analytics';
import { System } from './pages/System';
import { Activity } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = React.useState('dashboard');

  const renderPage = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'map': return <RiskMap />;
      case 'alerts': return <Alerts />;
      case 'analytics': return <Analytics />;
      case 'system': return <System />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="main-content">
        <header className="topbar">
          <div className="location-info">
            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Monitoring Region:</span>
            <span style={{ marginLeft: '0.5rem', fontWeight: 500 }}>Uttarakhand,India</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Last updated: {new Date().toLocaleTimeString()}
            </span>
            <div className="simulation-badge">
              <Activity size={14} />
              SIMULATION MODE
            </div>
          </div>
        </header>

        <div className="page-content">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default App;
