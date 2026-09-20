import React from 'react';
import { RiskLevel } from '../data/mockData';

export const RiskBadge: React.FC<{ level: RiskLevel }> = ({ level }) => {
  const getColors = () => {
    switch (level) {
      case 'LOW': return { bg: 'rgba(16, 185, 129, 0.2)', color: 'var(--risk-low)', border: 'var(--risk-low)' };
      case 'MODERATE': return { bg: 'rgba(245, 158, 11, 0.2)', color: 'var(--risk-moderate)', border: 'var(--risk-moderate)' };
      case 'HIGH': return { bg: 'rgba(249, 115, 22, 0.2)', color: 'var(--risk-high)', border: 'var(--risk-high)' };
      case 'CRITICAL': return { bg: 'rgba(239, 68, 68, 0.2)', color: 'var(--risk-critical)', border: 'var(--risk-critical)' };
      default: return { bg: '#333', color: '#fff', border: '#555' };
    }
  };

  const colors = getColors();

  return (
    <span className="badge" style={{ backgroundColor: colors.bg, color: colors.color, border: `1px solid ${colors.border}` }}>
      {level} RISK
    </span>
  );
};
