import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { mockAreas, mockHistoricalEvents } from '../data/mockData';
import { RiskBadge } from '../components/RiskBadge';

export const RiskMap: React.FC = () => {
  const getRiskColor = (level: string) => {
    switch(level) {
      case 'LOW': return '#10b981';
      case 'MODERATE': return '#f59e0b';
      case 'HIGH': return '#f97316';
      case 'CRITICAL': return '#ef4444';
      default: return '#333';
    }
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h2 className="page-title">Interactive Risk Map</h2>
      
      <div className="card" style={{ flex: 1, padding: 0, overflow: 'hidden', position: 'relative' }}>
        <MapContainer center={[27.45, 88.48]} zoom={11} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {mockAreas.map(area => (
            <CircleMarker
              key={area.id}
              center={[area.lat, area.lng]}
              radius={20}
              pathOptions={{
                color: getRiskColor(area.riskData.level),
                fillColor: getRiskColor(area.riskData.level),
                fillOpacity: 0.4
              }}
            >
              <Popup>
                <div style={{ padding: '0.5rem', minWidth: '200px' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#1e293b' }}>{area.name}</h3>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <RiskBadge level={area.riskData.level} />
                  </div>
                  <p style={{ margin: '0.25rem 0', fontSize: '0.875rem', color: '#334155' }}>
                    <strong>Risk Score:</strong> {area.riskData.score}
                  </p>
                  <p style={{ margin: '0.25rem 0', fontSize: '0.875rem', color: '#334155' }}>
                    <strong>Rainfall:</strong> {area.metrics.rainfall.value} {area.metrics.rainfall.unit}
                  </p>
                </div>
              </Popup>
            </CircleMarker>
          ))}

          {mockHistoricalEvents.map(event => (
            <CircleMarker
              key={event.id}
              center={[event.lat, event.lng]}
              radius={8}
              pathOptions={{
                color: '#3b82f6',
                fillColor: '#3b82f6',
                fillOpacity: 0.8
              }}
            >
              <Popup>
                <div style={{ padding: '0.5rem' }}>
                  <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '0.875rem', color: '#1e293b' }}>Historical: {event.type}</h3>
                  <p style={{ margin: '0.25rem 0', fontSize: '0.75rem', color: '#64748b' }}>{event.date}</p>
                  <p style={{ margin: '0.25rem 0', fontSize: '0.75rem', color: '#334155' }}>{event.description}</p>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>

        <div style={{ 
          position: 'absolute', 
          bottom: '20px', 
          right: '20px', 
          zIndex: 1000, 
          backgroundColor: 'var(--bg-card)', 
          padding: '1rem', 
          borderRadius: '0.5rem',
          border: '1px solid var(--border)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <h4 style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Risk Legend</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {['LOW', 'MODERATE', 'HIGH', 'CRITICAL'].map(level => (
              <div key={level} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: getRiskColor(level) }}></span>
                <span style={{ fontSize: '0.75rem' }}>{level}</span>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem', paddingTop: '0.25rem', borderTop: '1px solid var(--border)' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b82f6' }}></span>
              <span style={{ fontSize: '0.75rem' }}>Historical Event</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
