import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { ThemeProviderContext } from './utils/ThemeContext/ThemeProviderContext';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/pets">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProviderContext>
            <App />
          </ThemeProviderContext>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
