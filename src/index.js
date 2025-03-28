import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import store from "./app/store"
import App from './App';
// import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration.ts"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <provider store={store}> */}
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    {/* </provider> */}
  </React.StrictMode>
);
// serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
