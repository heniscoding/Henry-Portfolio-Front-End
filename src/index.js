import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { setInitialTheme } from './theme';

setInitialTheme(); // 👈 call AFTER imports, before render

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
