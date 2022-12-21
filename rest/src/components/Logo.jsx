import React from "react";
import logo from "../assets/images/Logo1.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Wrapper to="/" className="logo">
      <img src={logo} alt="" />
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  /* height: 100%; */
  max-width: 150px;
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
