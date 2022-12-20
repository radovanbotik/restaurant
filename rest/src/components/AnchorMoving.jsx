import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const AnchorMoving = ({ text, path }) => {
  return (
    <Wrapper href={path} target="_blank" className="button">
      <span className="text">{text}</span>
      <span className="line linetop"></span>
      <span className="line linebottom"></span>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  /* padding: 9px 39px; */
  padding: 0;
  color: white;
  background-color: transparent;
  overflow: hidden;

  z-index: 4;
  font-family: var(--opensans);
  font-size: 14px;
  font-weight: 300;
  line-height: 2em;
  letter-spacing: 0.36em;
  text-transform: uppercase;

  cursor: pointer;
  outline: none;
  text-decoration: none;

  .text {
    padding-bottom: 4px;
    line-height: 2.3em;
    font-family: var(--opensans);
  }
  .line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    width: 100%;
    background-color: transparent;
    border-top: 1px solid #c9ab81;
    border-bottom: 1px solid #c9ab81;
    transform: translateX(0);
    transition: all 400ms ease;
  }
  .linetop {
  }
  &:hover {
    .line {
      transform: translateX(100%);
    }
    &:before,
    &:after {
      transform: translateX(0);
    }
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    width: 100%;
    background-color: transparent;
    border-bottom: 1px solid #c9ab81;
    transform: translateX(-100%);
    transition: all 400ms 200ms ease-in-out;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    width: 100%;
    background-color: transparent;
    border-top: 1px solid #c9ab81;
    transform: translateX(-100%);
    transition: all 800ms 200ms ease-in-out;
  }
`;
