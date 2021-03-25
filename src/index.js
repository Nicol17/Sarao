import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EventContextProvider from './providers/EventProvider'
import CommentContextProvider from './providers/CommentProvider'


ReactDOM.render(
  <CommentContextProvider>
    <EventContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EventContextProvider>
  </CommentContextProvider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
