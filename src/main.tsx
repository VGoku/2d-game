import React from 'react';
import ReactDOM from 'react-dom/client'; // Use ReactDOM from React 18+
import App from './App'; // Assuming you have an App.tsx file

const root = document.getElementById('app') as HTMLElement; // Get the 'app' div
const rootElement = ReactDOM.createRoot(root); // Create the root element

rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
