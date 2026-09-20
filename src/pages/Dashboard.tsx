import React from 'react';
import { mockAreas } from '../data/mockData';
import { RiskBadge } from '../components/RiskBadge';
import { MetricCard } from '../components/MetricCard';
import { AlertTriangle, Clock, MapPin, Activity } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const currentArea = mockAreas[0];

  return (
    <div>
      <h2 className="page-title">Real-Time Risk Parameters</h2>

      <div className="dashboard-grid">
        <div className="dashboard-left">
          {/* Main Risk Card */}
          <div className="card bg-risk-high" style={{ borderColor: 'var(--risk-high)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{currentArea.name}</h3>
                <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={14} /> {currentArea.district}
                </p>
              </div>
              <RiskBadge level={currentArea.riskData.level} />
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: 1 }}>{currentArea.riskData.score}</span>
              <span style={{ color: 'var(--text-muted)' }}>/ 100 Risk Score</span>
            </div>

            <div style={{ padding: '0.75rem', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Clock size={16} color="var(--primary)" />
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Expected Risk Window</div>
                <div style={{ fontWeight: 500 }}>{currentArea.riskData.forecastWindow}</div>
              </div>
            </div>
          </div>

          {/* Action Alert */}
          <div className="action-alert">
            <h4><AlertTriangle size={18} /> RECOMMENDED ACTION</h4>
            <ul>
              {currentArea.riskData.recommendedAction.map((action, idx) => (
                <li key={idx}>{action}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="dashboard-right">
          {/* Metrics */}
          <div className="card">
            <h3 className="card-title">Environmental Metrics</h3>
            <div className="metrics-grid">
              <MetricCard
                label="Rainfall"
                value={currentArea.metrics.rainfall.value}
                unit={currentArea.metrics.rainfall.unit}
                description={currentArea.metrics.rainfall.description}
              />
              <MetricCard
                label="Soil Moisture"
                value={currentArea.metrics.soilMoisture.value}
                unit={currentArea.metrics.soilMoisture.unit}
                description={currentArea.metrics.soilMoisture.description}
              />
              <MetricCard
                label="Water Level"
                value={currentArea.metrics.waterLevel.value}
                unit={currentArea.metrics.waterLevel.unit}
                description={currentArea.metrics.waterLevel.description}
              />
              <MetricCard
                label="Terrain/Slope"
                value={currentArea.metrics.slope.value}
                unit={currentArea.metrics.slope.unit}
                description={currentArea.metrics.slope.description}
              />
            </div>
          </div>

          {/* Explainability */}
          <div className="card">
            <h3 className="card-title"><Activity size={16} /> Why is the risk high?</h3>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {currentArea.riskData.explanation.map((reason, idx) => (
                <li key={idx} style={{ fontSize: '0.875rem' }}>{reason}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
