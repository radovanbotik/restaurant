import React from "react";
import logo from "../assets/images/Logo1.png";
import styled from "styled-components";

export const Logo = () => {
  return (
    <Wrapper className="logo">
      <img src={logo} alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  max-width: 150px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
