import React from 'react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = () => {
  const { theme, isDark } = useTheme();
  return (
    <header className={`header ${theme}`}>
      <div className="header-content">
        <h1>My Awesome App</h1>
        <div className="header-info">
          <span>Current: {isDark ? 'Dark' : 'Light'} Theme</span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
export default Header;