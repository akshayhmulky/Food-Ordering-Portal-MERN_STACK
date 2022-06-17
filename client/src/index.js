import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CountProvider} from './context/CountContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>   //component renders twice intentionally in development because of strictmode
    <CountProvider>
    <App />
    </CountProvider>
  // </React.StrictMode>
);

