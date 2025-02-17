import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserNameContextProvider from './ui/context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
    <React.StrictMode>
      <UserNameContextProvider>
        <App />
      </UserNameContextProvider>
    </React.StrictMode>
=======
  <React.StrictMode>
    <UserNameContextProvider>
      <App />
    </UserNameContextProvider>
  </React.StrictMode>
>>>>>>> cf7c5b7772b714ac41aaee5fac8f2e26838b7b5f
);
