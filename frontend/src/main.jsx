import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-dzo-bi6q.us.auth0.com"
      clientId="WdVad5B4d483KNuDKngTtCfBnH2ErkIR"
      redirectUri={window.location.origin}
    >
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Auth0Provider>
  </Provider>
);
