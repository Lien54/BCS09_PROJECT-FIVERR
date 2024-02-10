import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// react-router-dom
import { BrowserRouter } from "react-router-dom";
// redux
import { store } from "./redux/configStore";
import { Provider } from "react-redux";

// @material-tailwind/react
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
