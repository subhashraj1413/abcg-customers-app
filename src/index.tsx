import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import configureStore from "./core/store/configureStore";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
const store = configureStore();

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
