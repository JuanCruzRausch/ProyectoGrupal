import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import { HelmetProvider } from 'react-helmet-async';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:5050";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Auth0Provider
      domain="mercadodeenanos.us.auth0.com"
      clientId="qg9uZSprKYm0CjuhThkfdyRHkXSAde6j"
      redirectUri={window.location.origin}
      audience='auth'
    >
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Auth0Provider>
  </Provider>
);
