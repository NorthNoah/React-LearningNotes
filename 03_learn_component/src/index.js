import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './01组件嵌套/APP.jsx'
// import App from './02组件通信/App'
// import App from './03组件插槽/App'
// import App from './04非父子通信-展开运算符/App'
// import App from './05Context/App'
// import App from './06EventBus/App'
// import App from './07ref获取DOM/App.jsx'
// import App from './08受控组件和非受控组件/01受控组件基本使用'
import App from './09React高阶组件/App.jsx'



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
