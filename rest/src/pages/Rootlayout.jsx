import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation, Footer, FAB } from "../components";

export const RootLayout = () => {
  return (
    <div>
      <Navigation />
      <FAB />
      <Outlet />
      <Footer />
    </div>
  );
};
