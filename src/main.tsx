// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Force le favicon dynamiquement
const updateFavicon = () => {
  const link = document.createElement('link');
  const existingLink = document.querySelector("link[rel*='icon']") as HTMLLinkElement;

  if (existingLink) {
    document.head.removeChild(existingLink);
  }

  link.rel = 'icon';
  link.href = '/favicon-AgileFleet.svg?' + new Date().getTime();
  document.head.appendChild(link);
};

updateFavicon();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)