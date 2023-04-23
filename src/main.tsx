import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./input.css";
import App from "./App";
import { store } from "./Store/Store";
import { SnackbarProvider } from "notistack";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);
