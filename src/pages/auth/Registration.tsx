import React, { useState } from 'react';
import { Activity } from 'lucide-react';

interface RegistrationProps {
  onRegister: () => void;
  onNavigateToLogin: () => void;
}

export const Registration: React.FC<RegistrationProps> = ({ onRegister, onNavigateToLogin }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    organization: '',
    role: 'Researcher'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      onRegister();
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card" style={{ maxWidth: '500px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.5rem', fontWeight: 700 }}>
            <Activity size={24} />
            DHARARAKSHAK
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Create your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="metrics-grid" style={{ gap: '1rem', marginBottom: '0' }}>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input type="password" className="form-control" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Organization / Institution</label>
            <input type="text" className="form-control" name="organization" value={formData.organization} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label className="form-label">Role</label>
            <select className="form-control" name="role" value={formData.role} onChange={handleChange} required>
              <option value="Admin">Admin</option>
              <option value="Researcher">Researcher</option>
              <option value="Disaster Management Authority">Disaster Management Authority</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem', marginTop: '1rem' }}>
            Register Account
          </button>

          <div style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Already have an account?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigateToLogin(); }} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 500 }}>
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
