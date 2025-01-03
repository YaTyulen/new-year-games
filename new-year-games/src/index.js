import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts/Malahit/malahit_bold.woff'
import './fonts/Kingthings-christmas/kingthings-christmas.woff'
import './fonts/Pwjoyeuxnoel/pwjoyeuxnoel.woff'
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
