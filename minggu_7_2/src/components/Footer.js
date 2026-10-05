import React from 'react';
import { useAdvancedTheme } from '../context/AdvancedThemeContext';
import './Footer.css';

const Footer = () => {
  const { mode, colors } = useAdvancedTheme();

  return (
    <footer className="footer" style={{ backgroundColor: colors?.surface || '#f8f9fa', color: colors?.text || '#333333', borderColor: colors?.border || '#dee2e6' }}>
      <div className="footer-content">
        <p>&copy; 2024 My Awesome App. Built with React Context API.</p>
        <p>Current theme: <strong>{mode}</strong></p>
      </div>
    </footer>
  );
};

export default Footer;