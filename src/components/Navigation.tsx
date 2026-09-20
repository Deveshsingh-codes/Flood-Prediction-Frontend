import React from 'react';
import { ShieldAlert, Map as MapIcon, Bell, BarChart3, Info, LayoutDashboard } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { id: 'map', label: 'Risk Map', icon: <MapIcon size={18} /> },
    { id: 'alerts', label: 'Alerts', icon: <Bell size={18} /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={18} /> },
    { id: 'system', label: 'System', icon: <Info size={18} /> },
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <h1><ShieldAlert size={24} /> JALRAKSHAK</h1>
        <p> Flooding Prediction System</p>
      </div>
      <nav className="nav-links">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};
