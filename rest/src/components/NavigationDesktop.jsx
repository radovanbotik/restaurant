import React, { useEffect } from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { LogoText } from "./LogoText";
import { Link } from "react-router-dom";
import { NavigationLink } from "./NavigationLink";

export const NavigationDesktop = () => {
  //   const revealMenu = () => {
  //     dropdownRef.current.classList.toggle("active");
  //   };
  return (
    <Wrapper>
      <div className="control">
        <LogoText />
        <nav className="nav">
          <ul>
            <NavigationLink path="/" directory={"home"} type={"desktop"} />
            <NavigationLink path="/menu" directory={"menu"} type={"desktop"} />
            <NavigationLink
              path="/booking"
              directory={"booking"}
              type={"desktop"}
            />
            <NavigationLink
              path="/kitchen"
              directory={"team"}
              type={"desktop"}
            />
          </ul>
        </nav>
        <span className="material-symbols-outlined icon">drag_handle</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: transparent;
  .control {
    padding: 0px 40px;
    position: absolute;
    top: 0;
    height: 120px;
    width: 100%;
    z-index: 100;
    margin: 0 auto;
    color: #c9ab81;
    display: flex;
    align-items: center;
    .logo {
      width: 100px;
    }
    .icon {
      display: flex;
      justify-content: end;
      width: 100px;
      font-size: 3rem;
      cursor: pointer;
    }
  }
  nav {
    width: 600px;
    margin: 0 auto;
    ul {
      list-style: none;
      display: flex;
      justify-content: space-evenly;
    }
  }
`;
