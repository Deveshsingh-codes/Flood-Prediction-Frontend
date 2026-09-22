import React, { useState } from 'react';
import {
  ShieldAlert,
  Map as MapIcon,
  Bell,
  BarChart3,
  Info,
  LayoutDashboard,
  Menu,
  X,
} from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={18} />,
    },
    {
      id: 'map',
      label: 'Risk Map',
      icon: <MapIcon size={18} />,
    },
    {
      id: 'alerts',
      label: 'Alerts',
      icon: <Bell size={18} />,
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: <BarChart3 size={18} />,
    },
    {
      id: 'system',
      label: 'System',
      icon: <Info size={18} />,
    },
  ];

  const handleNavigation = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="mobile-header">
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open navigation"
        >
          <Menu size={24} />
        </button>

        <div className="mobile-brand">
          <ShieldAlert size={22} />
          <span>DHARARAKSHAK</span>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`sidebar ${isMobileMenuOpen ? 'sidebar-mobile-open' : ''
          }`}
      >
        <div className="brand">
          <div className="brand-title">
            <ShieldAlert size={24} />
            <h1>DHARARAKSHAK</h1>

            <button
              className="mobile-close-button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation"
            >
              <X size={22} />
            </button>
          </div>

          <p>Flood Prediction System</p>
        </div>

        <nav className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''
                }`}
              onClick={() => handleNavigation(item.id)}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};