import React, { useState } from 'react';
import { Activity } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
  onNavigateToRegister: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin, onNavigateToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.5rem', fontWeight: 700 }}>
            <Activity size={24} />
            FLASHGUARD
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>AI-Powered Early Warning System</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              className="form-control" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@flashguard.gov"
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required 
            />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
            <a href="#" style={{ fontSize: '0.75rem', color: 'var(--primary)', textDecoration: 'none' }}>
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>
            Login
          </button>

          <div style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Don't have an account?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigateToRegister(); }} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 500 }}>
              Create Account
            </a>
          </div>
          
          <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.75rem', color: 'var(--risk-moderate)', padding: '0.5rem', backgroundColor: '#fff7ed', borderRadius: '0.375rem', border: '1px solid #fed7aa' }}>
            <strong>Prototype Simulation:</strong> Enter any email/password to login.
          </div>
        </form>
      </div>
    </div>
  );
};
