import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './MainContent.css';

const MainContent = () => {
  const { theme, isDark } = useTheme();
  return (
    <main className={`main-content ${theme}`}>
      <section className="content-section">
        <h2>Context API Demonstration</h2>
        <div className="info-card">
          <h3>Theme Information</h3>
          <p><strong>Current Theme:</strong> {theme}</p>
          <p><strong>Is Dark Mode:</strong> {isDark ? 'Yes' : 'No'}</p>
          <p><strong>Is Light Mode:</strong> {!isDark ? 'Yes' : 'No'}</p>
        </div>
        <div className="feature-list">
          <h3>Benefits of Context API:</h3>
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