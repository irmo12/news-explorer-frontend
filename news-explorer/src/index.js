import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>News Explorer</title>
  <meta
    name="description"
    content="Your news catalogue where you may search for articles and save them for furture reference."
  />
  <meta
    name="keywords"
    content="web development, JS web development, website development project, web development education"
  />
  <meta name="author" content="Omri Ben Tal at Practicum" />
  <link rel="favicon" href="./favicon.ico" />
</head>;
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
