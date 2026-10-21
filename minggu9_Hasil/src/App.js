import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Product Store</h1>
        <p>Data dari Backend Node.js menggunakan useEffect</p>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;