import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = ({ text }) => {
  return (
    <Wrapper className="button">
      <span className="line lineleft"></span>
      <span className="text">{text}</span>
      <span className="line lineright"></span>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  padding: 11px 50px;
  color: white;
  background-color: transparent;
  border: 1px solid #c9ab81;
  overflow: hidden;

  z-index: 4;
  font-family: var(--opensans);
  font-size: 14px;
  line-height: 2em;
  letter-spacing: 0.36em;
  text-transform: uppercase;

  cursor: pointer;
  outline: none;
  text-decoration: none;
  display: flex;
  place-content: center;

  .line {
    width: 1px;
    height: 0%;
    display: inline-block;
    background-color: #c9ab81;
    position: absolute;
    transform: rotate(71deg);
    transform-origin: top;
    will-change: transform;
    transition: all 300ms ease-in;
  }
  .lineleft {
    left: 80px;
    top: -10px;
  }
  .lineright {
    right: 60px;
    /* top: 30px; */
    bottom: 0;
    /* transform: rotate(70deg); */
    transform-origin: bottom;
  }
  .text {
    font-weight: 300;
  }
  &:hover {
    .line {
      height: 200%;
    }
  }
`;
