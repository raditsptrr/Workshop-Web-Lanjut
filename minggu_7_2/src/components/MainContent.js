import React from 'react';
import { useAdvancedTheme } from '../context/AdvancedThemeContext';
import './MainContent.css';

const MainContent = () => {
  const { mode, isDark, isLight, colors } = useAdvancedTheme();

  return (
    <main className="main-content" style={{ backgroundColor: colors?.background || '#ffffff', color: colors?.text || '#333333' }}>
      <section className="content-section">
        <h2 style={{ color: colors?.primary || '#007bff' }}>Context API Demonstration</h2>
        
        <div className="info-card" style={{ backgroundColor: colors?.surface || '#f8f9fa', borderColor: colors?.border || '#dee2e6' }}>
          <h3 style={{ color: colors?.primary || '#007bff' }}>Theme Information</h3>
          <p><strong>Current Theme:</strong> {mode}</p>
          <p><strong>Is Dark Mode:</strong> {isDark ? 'Yes' : 'No'}</p>
          <p><strong>Is Light Mode:</strong> {isLight ? 'Yes' : 'No'}</p>
          <p><strong>Primary Color:</strong> {colors?.primary}</p>
        </div>

        <div className="feature-list" style={{ backgroundColor: colors?.surface || '#f8f9fa', borderColor: colors?.border || '#dee2e6' }}>
          <h3 style={{ color: colors?.primary || '#007bff' }}>Benefits of Context API:</h3>
          <ul>
            <li>No prop drilling</li>
            <li>Global state management</li>
            <li>Clean component structure</li>
            <li>Easy to maintain</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default MainContent;