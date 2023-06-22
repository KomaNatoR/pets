import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { ThemeProviderContext } from './utils/ThemeContext/ThemeProviderContext';
import { store } from 'store/REDUX_TOOLKIT/store';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/pets">
      <Provider store={store}>
        <ThemeProviderContext>
          <App />
        </ThemeProviderContext>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
