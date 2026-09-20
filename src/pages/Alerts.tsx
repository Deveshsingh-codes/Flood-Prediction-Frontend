import React from 'react';
import { mockAlerts } from '../data/mockData';
import { RiskBadge } from '../components/RiskBadge';
import { Clock, MapPin, AlertCircle } from 'lucide-react';

export const Alerts: React.FC = () => {
  return (
    <div>
      <h2 className="page-title">System Alerts</h2>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <button style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', background: 'var(--primary)', color: 'white', border: 'none' }}>All Alerts</button>
        <button style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', background: 'var(--bg-card)', color: 'var(--text-main)', border: '1px solid var(--border)' }}>Critical</button>
        <button style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', background: 'var(--bg-card)', color: 'var(--text-main)', border: '1px solid var(--border)' }}>High</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {mockAlerts.map(alert => (
          <div key={alert.id} className="card" style={{ borderLeft: `4px solid var(--risk-${alert.severity.toLowerCase()})` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <RiskBadge level={alert.severity} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={14} /> {new Date(alert.timestamp).toLocaleString()}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <AlertCircle size={18} color={`var(--risk-${alert.severity.toLowerCase()})`} />
                  {alert.reason}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={14} /> {alert.location}
                </p>
              </div>
              
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{alert.riskScore}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Risk Score</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
