import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// importing BrowserRouter for React-Router to work on app, renamed it Router for shorthand
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
// Wrap Router around App
<Router >
    <App />
</Router>
, document.getElementById('root'));

