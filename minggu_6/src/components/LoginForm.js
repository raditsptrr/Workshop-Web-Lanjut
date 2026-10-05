// src/components/LoginForm.js
import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '', rememberMe: false });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'email':
        if (!value.trim()) return 'Email or Username is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length < 3) return 'Enter a valid email or username (min 3 chars)';
        return '';
      case 'password':
        if (!value) return 'Password is required';
        if (value.length < 8) return 'Password must be at least 8 characters';
        return '';
      default:
        return '';
    }
  };

  const getPasswordStrength = (password) => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setLoginData(prev => ({ ...prev, [name]: inputValue }));
    if (touched[name]) setErrors(prev => ({ ...prev, [name]: validateField(name, inputValue) }));
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, type === 'checkbox' ? checked : value) }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = {
      email: validateField('email', loginData.email),
      password: validateField('password', loginData.password)
    };
    
    setTouched({ email: true, password: true });
    
    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);
    
    // Simulate rate limiting / brute force protection / API Call
    setTimeout(() => {
      setIsLoading(false);
      // Simulate success response
      if (loginData.email === 'user@example.com' && loginData.password === 'ValidPass123!') {
        setSubmitStatus({ type: 'success', message: 'Login successful! Redirecting...' });
      } else {
        setSubmitStatus({ type: 'error', message: 'Invalid credentials or account locked due to multiple failed attempts.' });
      }
    }, 1500);
  };

  const strength = getPasswordStrength(loginData.password);
  const strengthColors = ['#ecf0f1', '#e74c3c', '#f1c40f', '#3498db', '#2ecc71'];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Secure Login</h1>
      
      {submitStatus && (
        <div style={{ padding: '1rem', marginBottom: '1rem', borderRadius: '8px', textAlign: 'center', backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da', color: submitStatus.type === 'success' ? '#155724' : '#721c24' }}>
          {submitStatus.message}
        </div>
      )}

      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email or Username *</label>
          <input type="text" name="email" className={`${styles.input} ${errors.email ? styles.error : ''}`} value={loginData.email} onChange={handleInputChange} onBlur={handleBlur} disabled={isLoading} />
          {errors.email && <span style={{ color: '#e74c3c', fontSize: '0.8rem' }}>{errors.email}</span>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Password *</label>
          <input type="password" name="password" className={`${styles.input} ${errors.password ? styles.error : ''}`} value={loginData.password} onChange={handleInputChange} onBlur={handleBlur} disabled={isLoading} />
          
          {/* Password Strength Indicator */}
          {loginData.password && (
            <div style={{ marginTop: '0.5rem', display: 'flex', gap: '2px' }}>
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{ flex: 1, height: '4px', borderRadius: '2px', backgroundColor: i <= strength ? strengthColors[strength] : '#ecf0f1' }} />
              ))}
            </div>
          )}
          {errors.password && <span style={{ color: '#e74c3c', fontSize: '0.8rem' }}>{errors.password}</span>}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label className={styles.checkboxGroup}>
            <input type="checkbox" name="rememberMe" className={styles.checkbox} checked={loginData.rememberMe} onChange={handleInputChange} disabled={isLoading} />
            <span className={styles.checkboxLabel}>Remember me</span>
          </label>
          <a href="#" style={{ fontSize: '0.9rem', color: '#3498db', textDecoration: 'none' }}>Forgot Password?</a>
        </div>

        <button type="submit" className={styles.submitButton} disabled={isLoading} style={{ opacity: isLoading ? 0.7 : 1 }}>
          {isLoading ? 'Authenticating...' : 'Secure Login'}
        </button>

        {/* Opsional: Social Login Buttons */}
        <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem', color: '#7f8c8d' }}>
          <p>Or login with</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '0.5rem' }}>
            <button type="button" style={{ padding: '0.5rem 1rem', border: '1px solid #dee2e6', borderRadius: '4px', cursor: 'pointer', backgroundColor: 'white' }}>Google</button>
            <button type="button" style={{ padding: '0.5rem 1rem', border: '1px solid #dee2e6', borderRadius: '4px', cursor: 'pointer', backgroundColor: 'white' }}>GitHub</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;