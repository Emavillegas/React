import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloWorldApp} from './HelloWorldApp'
import {FirstApp} from './FirstApp'
import "./style.css";
import { CounterApp } from './CounterApp';



// se inicia con  componentes basados en funciones





ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>

        
        {/* <FirstApp  subTitle="soy un subtitulo"/>   */}
        <CounterApp value={10} ></CounterApp>

    </React.StrictMode>

);