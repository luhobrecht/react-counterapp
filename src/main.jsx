import React from 'react';
import ReactDOM from 'react-dom/client';

// import HelloWorldApp from './components/HelloWorldApp';
//import {FirstApp} from './components/FirstApp';
import "./css/styles.css"
import {CounterApp} from './components/CounterApp'


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/*<FirstApp title="Hola, soy Lucía" />*/}
        <CounterApp value= { 0 } />
    </React.StrictMode>
)