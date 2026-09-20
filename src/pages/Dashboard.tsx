import React, { useState, useEffect } from 'react';
import { RiskBadge } from '../components/RiskBadge';
import { 
  AlertTriangle, 
  Clock, 
  MapPin, 
  Activity, 
  Droplets, 
  CloudRain, 
  Waves, 
  Mountain,
  ChevronRight,
  ChevronLeft,
  ShieldAlert,
  Radio,
  Package,
  TrendingDown
} from 'lucide-react';

interface SelectedLocation {
  lat: number;
  lng: number;
}

interface DashboardProps {
  selectedLocation: SelectedLocation;
}

export const Dashboard: React.FC<DashboardProps> = ({ selectedLocation }) => {
  // Deterministic baselines based on coordinates
  const baseLat = Math.abs(selectedLocation.lat);
  const baseLng = Math.abs(selectedLocation.lng);
  
  const baseRainfall = 60 + ((baseLat * 100) % 20);
  const baseSoilMoisture = 85 + ((baseLng * 100) % 10);
  const baseWaterLevel = 3.2 + ((baseLat * baseLng) % 0.8);
  const baseRiskScore = Math.floor(75 + (((baseLat + baseLng) * 100) % 15));

  const [metrics, setMetrics] = useState({
    rainfall: baseRainfall,
    soilMoisture: baseSoilMoisture,
    waterLevel: baseWaterLevel,
    riskScore: baseRiskScore,
  });

  const [howItWorksStep, setHowItWorksStep] = useState(0);

  // Simulation Interval
  useEffect(() => {
    // Reset base metrics when location changes
    setMetrics({
      rainfall: baseRainfall,
      soilMoisture: baseSoilMoisture,
      waterLevel: baseWaterLevel,
      riskScore: baseRiskScore,
    });

    const interval = setInterval(() => {
      setMetrics((prev) => ({
        rainfall: Math.max(0, prev.rainfall + (Math.random() * 2 - 1)),
        soilMoisture: Math.min(100, Math.max(0, prev.soilMoisture + (Math.random() * 1 - 0.5))),
        waterLevel: Math.max(0, prev.waterLevel + (Math.random() * 0.1 - 0.05)),
        riskScore: Math.min(100, Math.max(0, prev.riskScore + Math.floor(Math.random() * 3 - 1))),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, [baseRainfall, baseSoilMoisture, baseWaterLevel, baseRiskScore]);

  const riskLevel = metrics.riskScore > 85 ? 'CRITICAL' : metrics.riskScore > 70 ? 'HIGH' : metrics.riskScore > 40 ? 'MODERATE' : 'LOW';

  const howItWorksSteps = [
    { title: "Multi-Source Data Collection", desc: "Rainfall, weather, terrain, soil moisture, water level, historical data and sensor observations." },
    { title: "Data Processing", desc: "Cleaning, validation and feature preparation." },
    { title: "AI/ML Risk Analysis", desc: "Model analyses environmental and terrain factors." },
    { title: "Hyperlocal Risk Prediction", desc: "Generates location-specific risk assessment." },
    { title: "Warning & Explanation", desc: "Explains why risk is elevated and provides a forecast window." },
    { title: "Community Action", desc: "Converts risk information into practical safety guidance." }
  ];

  return (
    <div>
      <h2 className="page-title">Real-Time Risk Parameters</h2>

      <div className="dashboard-grid">
        <div className="dashboard-left">
          {/* Main Risk Card */}
          <div className="card glass-card risk-card-main">
            <div className="simulation-mode-label"><Activity size={14} /> SIMULATION MODE</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Kedarnath Valley</h3>
                <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={14} /> Rudraprayag District, Uttarakhand
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                  Lat: {selectedLocation.lat.toFixed(4)}, Lng: {selectedLocation.lng.toFixed(4)}
                </p>
              </div>
              <RiskBadge level={riskLevel} />
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: 1 }}>{metrics.riskScore.toFixed(0)}</span>
              <span style={{ color: 'var(--text-muted)' }}>/ 100 Risk Score</span>
            </div>

            <div style={{ padding: '0.75rem', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Clock size={16} color="var(--primary)" />
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Expected Risk Window</div>
                <div style={{ fontWeight: 500 }}>Next 2–4 Hours</div>
              </div>
            </div>
          </div>

          {/* Action Alert */}
          <div className="card glass-card action-alert-new">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--risk-high)', marginBottom: '1rem' }}>
              <AlertTriangle size={18} /> RECOMMENDED ACTIONS
            </h4>
            <ul className="action-list">
              <li>
                <div className="action-icon"><ShieldAlert size={20} /></div>
                <div className="action-content">
                  <strong>Prepare for possible evacuation</strong>
                  <p>Move toward safer/higher ground when instructed.</p>
                </div>
              </li>
              <li>
                <div className="action-icon"><Radio size={20} /></div>
                <div className="action-content">
                  <strong>Monitor official local instructions</strong>
                  <p>Follow district administration and emergency-management updates.</p>
                </div>
              </li>
              <li>
                <div className="action-icon"><Package size={20} /></div>
                <div className="action-content">
                  <strong>Keep emergency supplies ready</strong>
                  <p>Water, food, medicines, torch, power bank, first-aid supplies.</p>
                </div>
              </li>
              <li>
                <div className="action-icon"><TrendingDown size={20} /></div>
                <div className="action-content">
                  <strong>Avoid low-lying channels and unstable slopes</strong>
                  <p>Flash floods and landslides can occur rapidly in hilly terrain.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="dashboard-right">
          {/* Metrics */}
          <div className="card glass-card">
            <h3 className="card-title">Environmental Metrics <span className="demo-badge">Demo Data</span></h3>
            <div className="metrics-grid">
              <div className="metric-card-new">
                <div className="metric-header">
                  <CloudRain size={18} color="var(--primary)" />
                  <span className="metric-trend trend-up">↑ 22%</span>
                </div>
                <div className="metric-value-container">
                  <span className="metric-value">{metrics.rainfall.toFixed(1)}</span>
                  <span className="metric-unit">mm/hr</span>
                </div>
                <div className="metric-label">Rainfall</div>
                <div className="metric-status">Very High Intensity</div>
              </div>

              <div className="metric-card-new">
                <div className="metric-header">
                  <Droplets size={18} color="var(--primary)" />
                  <span className="metric-trend trend-up">↑ 8%</span>
                </div>
                <div className="metric-value-container">
                  <span className="metric-value">{metrics.soilMoisture.toFixed(1)}</span>
                  <span className="metric-unit">%</span>
                </div>
                <div className="metric-label">Soil Moisture</div>
                <div className="metric-status">Saturated</div>
              </div>

              <div className="metric-card-new">
                <div className="metric-header">
                  <Waves size={18} color="var(--primary)" />
                  <span className="metric-trend trend-up">↑ 15%</span>
                </div>
                <div className="metric-value-container">
                  <span className="metric-value">{metrics.waterLevel.toFixed(2)}</span>
                  <span className="metric-unit">m</span>
                </div>
                <div className="metric-label">Water Level</div>
                <div className="metric-status">Rising</div>
              </div>

              <div className="metric-card-new">
                <div className="metric-header">
                  <Mountain size={18} color="var(--primary)" />
                  <span className="metric-trend trend-up">↑ 6%</span>
                </div>
                <div className="metric-value-container">
                  <span className="metric-value">38</span>
                  <span className="metric-unit">°</span>
                </div>
                <div className="metric-label">Terrain/Slope</div>
                <div className="metric-status">High Terrain Risk</div>
              </div>
            </div>
          </div>

          {/* Explainability */}
          <div className="card glass-card">
            <h3 className="card-title"><Activity size={16} /> Why is the risk high? <span className="demo-badge">Demo Analysis</span></h3>
            <div className="explanation-panel">
              <div className="explanation-item">
                <CloudRain size={16} color="var(--risk-critical)" />
                <div>
                  <strong>Heavy rainfall intensity</strong>
                  <p>Current rainfall is significantly above normal levels for this region.</p>
                </div>
              </div>
              <div className="explanation-item">
                <Droplets size={16} color="var(--risk-high)" />
                <div>
                  <strong>High soil saturation</strong>
                  <p>Ground is unable to absorb more water, increasing runoff.</p>
                </div>
              </div>
              <div className="explanation-item">
                <Waves size={16} color="var(--risk-high)" />
                <div>
                  <strong>Rising water level</strong>
                  <p>River channels are nearing danger marks rapidly.</p>
                </div>
              </div>
              <div className="explanation-item">
                <Mountain size={16} color="var(--risk-moderate)" />
                <div>
                  <strong>Steep terrain/slope</strong>
                  <p>Local topography accelerates water flow and landslide risk.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="card glass-card" style={{ marginTop: '1.5rem' }}>
        <h3 className="card-title">How It Works</h3>
        <div className="how-it-works-container">
          <button 
            className="btn btn-secondary" 
            onClick={() => setHowItWorksStep(prev => Math.max(0, prev - 1))}
            disabled={howItWorksStep === 0}
          >
            <ChevronLeft size={16} /> Prev
          </button>
          
          <div className="how-it-works-content">
            <div className="step-indicator">Step {howItWorksStep + 1} of {howItWorksSteps.length}</div>
            <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>{howItWorksSteps[howItWorksStep].title}</h4>
            <p style={{ color: 'var(--text-muted)' }}>{howItWorksSteps[howItWorksStep].desc}</p>
          </div>

          <button 
            className="btn btn-primary" 
            onClick={() => setHowItWorksStep(prev => Math.min(howItWorksSteps.length - 1, prev + 1))}
            disabled={howItWorksStep === howItWorksSteps.length - 1}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
