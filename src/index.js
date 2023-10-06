import './index.css'
import ReactDOM from "react-dom/client";
import React from "react";

import App from './App'
     
const root = ReactDOM.createRoot(document.getElementById("root"));
const mensagem = <strong>Olá React!!!</strong>
root.render(<App />);