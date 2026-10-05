import React from 'react';
import { useAdvancedTheme } from '../context/AdvancedThemeContext';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = () => {
  const { mode, isDark, colors } = useAdvancedTheme();
  
  return (
    <header className="header" style={{ backgroundColor: colors?.surface || '#f8f9fa', color: colors?.text || '#333333' }}>
      <div className="header-content">
        <h1 style={{ color: colors?.primary || '#007bff' }}>
          My Awesome App
        </h1>
        <div className="header-info">
          <span>Current: {isDark ? 'Dark' : 'Light'} Theme ({mode})</span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;