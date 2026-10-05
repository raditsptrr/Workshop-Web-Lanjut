import React from 'react';
import { useAdvancedTheme } from '../context/AdvancedThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { mode, toggleTheme, isDark, colors } = useAdvancedTheme();
  
  const handleClick = () => {
    console.log('ThemeToggle clicked, current theme:', mode);
    toggleTheme();
  };

  return (
    <button 
      onClick={handleClick} 
      className="theme-toggle" 
      style={{ borderColor: colors?.primary || '#007bff', color: colors?.primary || '#007bff' }} 
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? 'Switch to Light' : 'Switch to Dark'}
    </button>
  );
};

// BAGIAN INI SANGAT PENTING AGAR TIDAK ERROR
export default ThemeToggle;