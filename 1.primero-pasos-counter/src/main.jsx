import React from "react";
import ReactDOM from "react-dom/client";

import App from './components/FirtsApp';
import { HelloWorld } from './components/HomeWork';
import { PropsReact } from "./components/Props";
import { CounterApp  } from "./components/CounterApp";
//EVENTOS 
import { EventClick } from "./components/Events";
 
import "./scss/main.scss";

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <App />
        <HelloWorld />
        <PropsReact name="Jhosua" age={21} /> */}
        <CounterApp value={0} />
        <EventClick initialState={10} />
    </React.StrictMode>
);