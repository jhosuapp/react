import React from "react";
import ReactDOM from "react-dom/client";

import App from './components/FirtsApp';
import { HelloWorld } from './components/HomeWork';
import { PropsReact } from "./components/Props";
import { CounterApp  } from "./components/CounterApp";
 
import "./scss/main.scss";

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <App />
        <HelloWorld />
        <PropsReact name="Jhosua" age={21} /> */}
        <CounterApp value={0} />
    </React.StrictMode>
);