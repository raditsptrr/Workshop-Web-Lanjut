import React, { createContext, useReducer, useContext, useMemo, useEffect } from 'react';

const THEME_ACTIONS = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  SET_THEME: 'SET_THEME',
  SET_PRIMARY_COLOR: 'SET_PRIMARY_COLOR',
  SET_SECONDARY_COLOR: 'SET_SECONDARY_COLOR',
  RESET_THEME: 'RESET_THEME'
};

const initialState = {
  mode: 'light',
  themes: {
    light: { primary: '#007bff', secondary: '#6c757d', background: '#ffffff', surface: '#f8f9fa', text: '#333333', textSecondary: '#666666', border: '#dee2e6', success: '#28a745', warning: '#ffc107', error: '#dc3545' },
    dark: { primary: '#0d6efd', secondary: '#5a6268', background: '#1a1a1a', surface: '#2d2d2d', text: '#ffffff', textSecondary: '#cccccc', border: '#444444', success: '#218838', warning: '#e0a800', error: '#c82333' }
  },
  colors: {}
};
initialState.colors = initialState.themes[initialState.mode];

const themeReducer = (state, action) => {
  switch (action.type) {
    case THEME_ACTIONS.TOGGLE_THEME:
      const newMode = state.mode === 'light' ? 'dark' : 'light';
      return { ...state, mode: newMode, colors: state.themes[newMode] };
    case THEME_ACTIONS.SET_THEME:
      if (!state.themes[action.payload]) return state;
      return { ...state, mode: action.payload, colors: state.themes[action.payload] };
    case THEME_ACTIONS.SET_PRIMARY_COLOR:
      return { ...state, colors: { ...state.colors, primary: action.payload } };
    case THEME_ACTIONS.SET_SECONDARY_COLOR:
      return { ...state, colors: { ...state.colors, secondary: action.payload } };
    case THEME_ACTIONS.RESET_THEME:
      return { ...initialState, mode: action.payload || initialState.mode, colors: initialState.themes[action.payload] || initialState.themes[initialState.mode] };
    default:
      return state;
  }
};

const AdvancedThemeContext = createContext();

export const AdvancedThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const actions = useMemo(() => ({
    toggleTheme: () => dispatch({ type: THEME_ACTIONS.TOGGLE_THEME }),
    setTheme: (theme) => dispatch({ type: THEME_ACTIONS.SET_THEME, payload: theme }),
    setPrimaryColor: (color) => dispatch({ type: THEME_ACTIONS.SET_PRIMARY_COLOR, payload: color }),
    setSecondaryColor: (color) => dispatch({ type: THEME_ACTIONS.SET_SECONDARY_COLOR, payload: color }),
    resetTheme: (theme) => dispatch({ type: THEME_ACTIONS.RESET_THEME, payload: theme })
  }), []);

  const contextValue = useMemo(() => ({
    mode: state.mode, colors: state.colors, themes: state.themes,
    isDark: state.mode === 'dark', isLight: state.mode === 'light', isCustom: !['light', 'dark'].includes(state.mode),
    ...actions
  }), [state.mode, state.colors, state.themes, actions]);

  useEffect(() => {
    if (state.colors) document.body.style.backgroundColor = state.colors.background;
    document.body.style.color = state.colors.text;
  }, [state.mode, state.colors]);

  return (
    <AdvancedThemeContext.Provider value={contextValue}>
      <div className={`app-theme-${state.mode}`} style={{ backgroundColor: state.colors?.background || '#ffffff', color: state.colors?.text || '#333333', minHeight: '100vh', transition: 'all 0.3s ease' }}>
        {children}
      </div>
    </AdvancedThemeContext.Provider>
  );
};

export const useAdvancedTheme = () => {
  const context = useContext(AdvancedThemeContext);
  if (context === undefined) throw new Error('useAdvancedTheme must be used within an AdvancedThemeProvider');
  return context;
};

export default AdvancedThemeContext;