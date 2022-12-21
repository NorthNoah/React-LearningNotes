import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './01组件嵌套/APP.jsx'
// import App from './02组件通信/App'
import App from './03组件插槽/App'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
