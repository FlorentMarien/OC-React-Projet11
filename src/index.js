import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Router from './routes/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <navbar>
      <ul>
        <li><a href="/">Index</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/logement">Logements</a></li>
        <li><a href="/notavalidadress">notavalidadress</a></li>
      </ul>
      </navbar>
    </header>

    <Router />

    <footer>
      <p>use of term</p>
    </footer>

  </React.StrictMode>
);

export default App;
