import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ContactContext } from "./context/ContactContext";
import { BookingContext } from "./context/BookingContext";
import { MenuAndStaffContext } from "./context/MenuAndStaffContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContactContext>
      <BookingContext>
        <MenuAndStaffContext>
          <App />
        </MenuAndStaffContext>
      </BookingContext>
    </ContactContext>
  </React.StrictMode>
);
