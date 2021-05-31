import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
//import reportWebVitals from './reportWebVitals';
//import axios from 'axios';

// axios.defaults.baseURL = "http://localhost:8080/api"; 
// axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//reportWebVitals();