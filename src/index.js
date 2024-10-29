import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppAlt from './AppAlt';
// import store from './app/store';
import store from './app/store2';
import store3 from './app/store3';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import reportWebVitals from './reportWebVitals';

function Choice1Old(){
  return(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
function Choice1New(){
  return(
    <Provider store={store3}>
      <App />
    </Provider>
  )
}
function Choice2(){
  return(  
  <Provider store={store}>
    <AppAlt />
  </Provider>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Choice1New/>
  // <Choice2/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
