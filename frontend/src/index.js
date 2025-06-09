import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './ui/context/UserContext';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import axios from "axios";

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Router>
      <UserProvider>
        <App />
      </UserProvider>
      </Router>
    </React.StrictMode>
);
