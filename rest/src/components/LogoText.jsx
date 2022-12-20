import React from "react";
import logo from "../assets/images/LogoText.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoText = () => {
  return (
    <Wrapper to="/" className="logo">
      <img src={logo} alt="" />
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  height: 100%;
  max-width: 150px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
