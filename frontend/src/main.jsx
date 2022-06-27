import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-7zb25edn.us.auth0.com"
      clientId="61v5boDx7Q7KtyYuGragbqhx6Gkvd3qe"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Provider>
);
