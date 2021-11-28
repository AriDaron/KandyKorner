import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { KandyKorner } from './Components/KandyKorner';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';




//import then wrap <BrowserRouter> Around KandyKorner Module so we can enable routing for the enitre application

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <KandyKorner />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
