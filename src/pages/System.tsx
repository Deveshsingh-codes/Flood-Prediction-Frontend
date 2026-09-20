import React from 'react';
import { mockSensors } from '../data/mockData';
import { Database, Server, Cpu, AlertTriangle, ArrowRight } from 'lucide-react';

export const System: React.FC = () => {
  return (
    <div>
      <h2 className="page-title">System & Sensor Status</h2>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 className="card-title">How It Works (Data Flow)</h3>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem 1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          
          <div style={{ textAlign: 'center', flex: 1, minWidth: '150px' }}>
            <div style={{ background: 'var(--bg-dark)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--border)', marginBottom: '0.5rem' }}>
              <Database size={24} style={{ marginBottom: '0.5rem', color: 'var(--primary)' }} />
              <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Multi-Source Data</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Rainfall, Moisture, IoT</div>
            </div>
          </div>

          <ArrowRight color="var(--text-muted)" />

          <div style={{ textAlign: 'center', flex: 1, minWidth: '150px' }}>
            <div style={{ background: 'var(--bg-dark)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--border)', marginBottom: '0.5rem' }}>
              <Server size={24} style={{ marginBottom: '0.5rem', color: 'var(--risk-moderate)' }} />
              <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Data Processing</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Cleaning & Alignment</div>
            </div>
          </div>

          <ArrowRight color="var(--text-muted)" />

          <div style={{ textAlign: 'center', flex: 1, minWidth: '150px' }}>
            <div style={{ background: 'var(--bg-dark)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--border)', marginBottom: '0.5rem' }}>
              <Cpu size={24} style={{ marginBottom: '0.5rem', color: 'var(--risk-high)' }} />
              <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Risk Assessment</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Hyperlocal Prediction</div>
            </div>
          </div>

          <ArrowRight color="var(--text-muted)" />

          <div style={{ textAlign: 'center', flex: 1, minWidth: '150px' }}>
            <div style={{ background: 'var(--bg-dark)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--border)', marginBottom: '0.5rem' }}>
              <AlertTriangle size={24} style={{ marginBottom: '0.5rem', color: 'var(--risk-critical)' }} />
              <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Early Warning</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Actionable Alerts</div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="card">
        <h3 className="card-title">IoT Sensor Network Status</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Sensor ID</th>
              <th>Type</th>
              <th>Current Reading</th>
              <th>Last Update</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mockSensors.map(sensor => (
              <tr key={sensor.id}>
                <td style={{ fontWeight: 500 }}>{sensor.name}</td>
                <td>{sensor.type}</td>
                <td>{sensor.reading}</td>
                <td>{sensor.lastUpdate}</td>
                <td>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className={`status-dot status-${sensor.status.toLowerCase()}`}></span>
                    {sensor.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
