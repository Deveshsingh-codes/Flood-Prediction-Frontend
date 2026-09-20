import React from 'react';

interface MetricCardProps {
  label: string;
  value: string | number;
  unit: string;
  description: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ label, value, unit, description }) => {
  return (
    <div className="metric-card">
      <div className="metric-label">{label}</div>
      <div className="metric-value">{value} <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>{unit}</span></div>
      <div className="metric-desc">{description}</div>
    </div>
  );
};
