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

  // Shared selected location between Risk Map and Dashboard
  const [selectedLocation, setSelectedLocation] = React.useState({
    lat: 30.7352,
    lng: 79.0669,
  });

  const [authPage, setAuthPage] = React.useState<
    'login' | 'register' | null
  >(null);

  const renderPage = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard selectedLocation={selectedLocation} />;

      case 'map':
        return (
          <RiskMap
            selectedLocation={selectedLocation}
            onLocationSelect={setSelectedLocation}
          />
        );

      case 'alerts':
        return <Alerts />;

      case 'analytics':
        return <Analytics />;

      case 'system':
        return <System />;

      default:
        return <Dashboard selectedLocation={selectedLocation} />;
    }
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert('Login successful!');
    setAuthPage(null);
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert('Registration successful!');
    setAuthPage(null);
  };

  return (
    <div className="app-container">

      {/* LEFT NAVIGATION */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* TOP HEADER */}
        <header className="topbar">

          <div className="location-info">
            <span
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.875rem',
              }}
            >
              Monitoring Region:
            </span>

            <span
              style={{
                marginLeft: '0.5rem',
                fontWeight: 600,
              }}
            >
              Uttarakhand, India
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
            }}
          >

            {/* LOGIN BUTTON */}
            <button
              onClick={() => setAuthPage('login')}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid #0f766e',
                background: '#ffffff',
                color: '#0f766e',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Login
            </button>

            {/* REGISTER BUTTON */}
            <button
              onClick={() => setAuthPage('register')}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                background: '#0f766e',
                color: '#ffffff',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Register
            </button>

            {/* LAST UPDATED */}
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
              }}
            >
              Last updated: {new Date().toLocaleTimeString()}
            </span>

            {/* SIMULATION MODE */}
            <div className="simulation-badge">
              <Activity size={14} />
              SIMULATION MODE
            </div>

          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="page-content">
          {renderPage()}
        </div>

      </main>

      {/* LOGIN / REGISTRATION MODAL */}
      {authPage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.55)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            zIndex: 9999,
          }}
        >

          <div
            style={{
              width: '380px',
              maxWidth: '100%',
              background: '#ffffff',
              borderRadius: '16px',
              padding: '28px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
              position: 'relative',
            }}
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setAuthPage(null)}
              style={{
                position: 'absolute',
                right: '15px',
                top: '12px',
                border: 'none',
                background: 'transparent',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#555',
              }}
              aria-label="Close"
            >
              ×
            </button>

            {/* LOGIN */}
            {authPage === 'login' && (
              <>
                <h2
                  style={{
                    marginBottom: '8px',
                    color: '#0f766e',
                  }}
                >
                  Welcome Back 👋
                </h2>

                <p
                  style={{
                    color: '#666',
                    marginBottom: '22px',
                  }}
                >
                  Login to JALRAKSHAK
                </p>

                <form onSubmit={handleLogin}>

                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      marginBottom: '14px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      boxSizing: 'border-box',
                    }}
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      marginBottom: '18px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      boxSizing: 'border-box',
                    }}
                  />

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: 'none',
                      borderRadius: '8px',
                      background: '#0f766e',
                      color: 'white',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    Login
                  </button>

                </form>

                <p
                  style={{
                    textAlign: 'center',
                    marginTop: '18px',
                    color: '#666',
                  }}
                >
                  Don't have an account?{' '}

                  <span
                    onClick={() => setAuthPage('register')}
                    style={{
                      color: '#0f766e',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    Register
                  </span>
                </p>
              </>
            )}

            {/* REGISTRATION */}
            {authPage === 'register' && (
              <>
                <h2
                  style={{
                    marginBottom: '8px',
                    color: '#0f766e',
                  }}
                >
                  Create Account 🚀
                </h2>

                <p
                  style={{
                    color: '#666',
                    marginBottom: '22px',
                  }}
                >
                  Register for JALRAKSHAK
                </p>

                <form onSubmit={handleRegister}>

                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      marginBottom: '14px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      boxSizing: 'border-box',
                    }}
                  />

                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      marginBottom: '14px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      boxSizing: 'border-box',
                    }}
                  />

                  <input
                    type="password"
                    placeholder="Create password"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      marginBottom: '18px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      boxSizing: 'border-box',
                    }}
                  />

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: 'none',
                      borderRadius: '8px',
                      background: '#0f766e',
                      color: 'white',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    Create Account
                  </button>

                </form>

                <p
                  style={{
                    textAlign: 'center',
                    marginTop: '18px',
                    color: '#666',
                  }}
                >
                  Already have an account?{' '}

                  <span
                    onClick={() => setAuthPage('login')}
                    style={{
                      color: '#0f766e',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    Login
                  </span>
                </p>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

export default App;