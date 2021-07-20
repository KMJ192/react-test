import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import rootReducer from './modules/index';
import './index.css';
//import reportWebVitals from './reportWebVitals';
//import axios from 'axios';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// axios.defaults.baseURL = "http://localhost:8080/api"; 
// axios.defaults.withCredentials = true;
const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
//reportWebVitals();