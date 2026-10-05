import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './Footer.css';

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-content">
        <p>&copy; 2024 My Awesome App. Built with React Context API.</p>
        <p>Current theme: <strong>{theme}</strong></p>
      </div>
    </footer>
  );
};
export default Footer;