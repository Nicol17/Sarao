import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EventContextProvider from './providers/EventProvider'

ReactDOM.render(
<<<<<<< HEAD
  
    <App />,
=======
  <EventContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </EventContextProvider>,

>>>>>>> dbc51cf56ae26894b1fff9c693888f0a3f8b2e98
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
