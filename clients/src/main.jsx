import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./apps/store";
import "react-toastify/dist/ReactToastify.css";

import "./assets/forntend/css/bootstrap.min.css";
import "./assets/forntend/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/forntend/plugins/fontawesome/css/all.min.css";
import "./assets/forntend/css/feather.css";
import "./assets/forntend/plugins/select2/css/select2.min.css";
import "./assets/forntend/css/custom.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
