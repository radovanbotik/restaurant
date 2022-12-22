import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation, Footer, FAB } from "../components";
import styled from "styled-components";

export const RootLayout = () => {
  return (
    <Wrapper>
      <Navigation />
      <FAB />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
