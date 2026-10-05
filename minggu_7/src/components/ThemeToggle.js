import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  const handleClick = () => {
    console.log('ThemeToggle clicked, current theme:', theme);
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      className={`theme-toggle ${theme}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? 'Switch to Light' : 'Switch to Dark'}
      <span className="theme-indicator">({theme})</span>
    </button>
  );
};
export default ThemeToggle;