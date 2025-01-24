import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserNameContextProvider from './ui/context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserNameContextProvider>
      <App />
    </UserNameContextProvider>
  </React.StrictMode>
);
