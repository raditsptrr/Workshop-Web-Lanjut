import React from 'react';
import EnhancedRegistrationForm from './components/EnhancedRegistrationForm'; 
import LoginForm from './components/LoginForm';
// RegistrationForm (versi biasa) tidak perlu dipanggil di App.js, cukup ada di folder components saja sebagai bukti Anda mengerjakan Prosedur 2.

function App() {
  return (
    <div style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', padding: '2rem 0' }}>
      
      {/* Bukti Pengerjaan Prosedur Kerja Acara 11 */}
      <EnhancedRegistrationForm />

      <hr style={{ maxWidth: '500px', margin: '3rem auto', borderTop: '2px solid #e0e0e0' }} />

      {/* Bukti Pengerjaan Tugas Hasil dan Pembahasan Acara 11 */}
      <LoginForm />
      
    </div>
  );
}

export default App;