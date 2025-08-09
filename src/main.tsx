import React from 'react';
import ReactDOM from 'react-dom/client'; // Use ReactDOM from React 18+
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Assuming you have an App.tsx file
import './index.css'; // Import Tailwind CSS

const root = document.getElementById('app');
if (!root) {
  throw new Error('Failed to find the root element');
}

const rootElement = ReactDOM.createRoot(root); // Create the root element

rootElement.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
