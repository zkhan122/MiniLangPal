import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './ui/context/UserContext';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import axios from "axios";
import { LanguageProvider } from './ui/context/LanguageContext';

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Router>
      <UserProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </UserProvider>
      </Router>
    </React.StrictMode>
);
