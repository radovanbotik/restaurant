import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ContactContext } from "./context/ContactContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContactContext>
      <App />
    </ContactContext>
  </React.StrictMode>
);
