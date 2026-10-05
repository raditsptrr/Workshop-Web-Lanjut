import React from 'react';
import { useAdvancedTheme } from '../context/AdvancedThemeContext';
import './ThemedCard.css';

const ThemedCard = ({ title, content, children, variant = 'default' }) => {
  const { colors } = useAdvancedTheme();

  const getCardStyle = () => {
    const baseStyle = {
      background: colors?.surface || '#f8f9fa',
      color: colors?.text || '#333333',
      border: `1px solid ${colors?.border || '#dee2e6'}`,
      borderRadius: '8px',
      padding: '1.5rem',
      margin: '1rem 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    };

    switch (variant) {
      case 'primary':
        return { ...baseStyle, background: colors?.primary || '#007bff', color: '#fff', border: `1px solid ${colors?.primary || '#007bff'}` };
      case 'success':
        return { ...baseStyle, background: colors?.success || '#28a745', color: '#fff', border: `1px solid ${colors?.success || '#28a745'}` };
      case 'warning':
        return { ...baseStyle, background: colors?.warning || '#ffc107', color: '#333', border: `1px solid ${colors?.warning || '#ffc107'}` };
      case 'error':
        return { ...baseStyle, background: colors?.error || '#dc3545', color: '#fff', border: `1px solid ${colors?.error || '#dc3545'}` };
      default:
        return baseStyle;
    }
  };

  return (
    <div className="themed-card" style={getCardStyle()}>
      {title && (
        <h3 style={{ color: variant === 'default' ? (colors?.primary || '#007bff') : 'inherit', marginBottom: '1rem' }}>
          {title}
        </h3>
      )}
      {content && <p>{content}</p>}
      {children}
    </div>
  );
};

export default ThemedCard;