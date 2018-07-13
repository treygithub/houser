import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './component/Header/Header.css';


import { HashRouter } from 'react-router-dom'

ReactDOM.render(

        <HashRouter>
        <App />
        </HashRouter>

, document.getElementById('root'));
