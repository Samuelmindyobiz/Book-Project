import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BookContextProvider } from './context/BookContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BookContextProvider>
    <App />
  </BookContextProvider>
);
