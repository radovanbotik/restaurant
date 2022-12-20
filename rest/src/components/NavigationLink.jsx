import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationLink = ({ path, directory }) => {
  return (
    <Wrapper>
      <Link to={path}>
        <span className="text">{directory}</span>
        <span className="material-symbols-outlined icon">
          keyboard_double_arrow_right
        </span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  height: 42px;
  a {
    padding: 9px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #c9ab81;

    font-size: 14px;
    line-height: 23px;
    font-weight: 700;
    letter-spacing: 0.15em;
    font-family: var(--quicksand);
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    span {
      display: inline-block;
    }
    &:hover {
      .text:before {
        width: 100%;
        width: calc(100% + 1px);
      }
      .text:after {
        width: 100%;
        width: calc(100% + 1px);
      }
    }
    .text {
      position: relative;
      &:before,
      &:after {
        content: "";
        position: absolute;
        left: 0;
        width: 0;
        height: 1px;
        background-color: #c9ab81;
      }
      &:before {
        bottom: 0;
        transition: 400ms ease;
      }
      &:after {
        bottom: -4px;
        transition: 450ms ease-in-out;
      }
    }

    .icon {
      font-size: inherit;
    }
  }
`;
