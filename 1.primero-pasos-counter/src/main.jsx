import React from "react";
import ReactDOM from "react-dom/client";

import App from './components/FirtsApp';
import {HelloWorld} from './components/HomeWork';


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <App />
        <HelloWorld />
    </React.StrictMode>
);