import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './component/Header/Header.css';
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import store from './component/ducks/store';


ReactDOM.render(
        <Provider store={store}>
                <HashRouter>
                        <App />
                </HashRouter>
        </Provider>

, document.getElementById('root'));
