// YOU NEED TO WATCH 13. ADVANCED JAVASCRIPT.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './containers/App'

// Inside the <React.StrictMode> element you can actually fit multiple divs. 

// Outside of the 'render' function is enabled the JS language and inside the 'render' it's enabled JSX language.

// In the 'index.js' there is no need for 'return' in the 'render' function.

// In the Components the 'return' is mandatory, and the rule of one element to be returned.

// Here you don't need to use 'export default name', because here is 
// the place where you've inported the components you have exported.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
