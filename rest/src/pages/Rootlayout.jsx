import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation, Footer } from "../components";

export const RootLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};
