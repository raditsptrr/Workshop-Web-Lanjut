import React from 'react';
import { AdvancedThemeProvider } from './context/AdvancedThemeContext';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import AdvancedThemeControls from './components/AdvancedThemeControls';
import ThemedCard from './components/ThemedCard';
import './App.css';

class AppErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  componentDidCatch(error, errorInfo) { console.error('App Error:', error); console.error('Error Info:', errorInfo); }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', backgroundColor: '#fff3cd', color: '#856404', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
          <h1>Something went wrong</h1>
          <p><strong>Error:</strong> {this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false, error: null })} style={{ padding: '0.5rem 1rem', backgroundColor: '#856404', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '1rem' }}>Try Again</button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <AppErrorBoundary>
      <AdvancedThemeProvider>
        <div className="app-container">
          <Header />
          <MainContent />
          <ThemedCard title="Advanced Theme System" variant="primary">
            <p>This demonstrates advanced Context API patterns with useReducer and optimized performance.</p>
            <AdvancedThemeControls />
          </ThemedCard>
          <ThemedCard title="Theme Variants Demo">
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <ThemedCard title="Default" content="Default variant card" />
              <ThemedCard title="Primary" variant="primary" content="Primary variant card" />
              <ThemedCard title="Success" variant="success" content="Success variant card" />
              <ThemedCard title="Warning" variant="warning" content="Warning variant card" />
              <ThemedCard title="Error" variant="error" content="Error variant card" />
            </div>
          </ThemedCard>
          <Footer />
        </div>
      </AdvancedThemeProvider>
    </AppErrorBoundary>
  );
}
export default App;