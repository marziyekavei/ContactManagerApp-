import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-toastify/dist/ReactToastify.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='ContactManagerApp-'>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

 