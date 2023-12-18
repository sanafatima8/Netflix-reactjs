import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
 
// Simple co nsole.log test
console.log('Testing console output');

root.render(
  <Router>
     
    
  
    <App />
  </Router>
);