import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationLinkButton = ({ path, directory }) => {
  return (
    <Wrapper>
      <Link to={path}>
        <span className="text">{directory}</span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  height: 42px;
  a {
    padding: 8px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--gold-main);
    background-color: var(--black-main);
    font-size: 12px;
    line-height: 23px;
    font-weight: 700;
    letter-spacing: 0.15em;
    font-family: var(--quicksand);
    border: 1px solid var(--gold-main);
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
