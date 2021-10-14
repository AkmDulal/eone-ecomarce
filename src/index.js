import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Route } from "react-router-dom";

// import swDev from "./swDev"

ReactDOM.render(
  <React.StrictMode>
    <Route>
      <App />
    </Route>
  </React.StrictMode>,
  document.getElementById('root')
);

// swDev();

