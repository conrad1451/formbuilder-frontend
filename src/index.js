import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppAlt from './AppAlt';
// import store from './app/store';
import store from './app/store2';
import store3 from './app/store3';
import store4 from './app/store4';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import reportWebVitals from './reportWebVitals';

// import env from 'dotenv';

// env.config();

function Choice1Old(){
  return(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
function ChoiceInsertDelete(){
  return(
    <Provider store={store4}>
      <App />
    </Provider>
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
  <ChoiceInsertDelete/>
  // <Choice1New/>
  // <Choice2/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
