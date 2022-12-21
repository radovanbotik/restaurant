import React, { useEffect } from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { LogoText } from "./LogoText";
import { Link } from "react-router-dom";
import { NavigationLink } from "./NavigationLink";

export const NavigationMobile = () => {
  const dropdownRef = useRef(null);
  const revealMenu = () => {
    dropdownRef.current.classList.toggle("active");
  };
  return (
    <Wrapper>
      <div className="control">
        <LogoText />
        <span className="material-symbols-outlined icon" onClick={revealMenu}>
          drag_handle
        </span>
      </div>
      <div className="dropdown" ref={dropdownRef}>
        <nav className="nav">
          <ul>
            <NavigationLink path="/" directory={"home"} type={"mobile"} />
            <NavigationLink path="/menu" directory={"menu"} type={"mobile"} />
            <NavigationLink
              path="/booking"
              directory={"booking"}
              type={"mobile"}
            />
            <NavigationLink
              path="/kitchen"
              directory={"team"}
              type={"mobile"}
            />
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: #0b1315;

  .control {
    padding: 0px 40px;
    /* height: 100%; */
    height: 70px;
    max-width: 999px;
    max-width: 1600px;

    margin: 0 auto;
    color: #c9ab81;

    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      height: 50%;
    }
    .icon {
      font-size: 2rem;
      cursor: pointer;
    }
  }
  .dropdown {
    padding: 0px 40px;
    height: 0px;
    background-color: #0f1d22;
    border-bottom: 1px solid var(--gold-dark);
    transition: height 400ms ease;
    nav {
      /* width: 420px; */
      max-width: 999px;

      padding: 20px 0;
      margin: 0 auto;
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        /* gap: 1rem; */
      }
    }
  }
  .dropdown.active {
    height: 200px;
  }

  /* @media (min-width: 1000px) {
    top: 0;
    width: 100%;
    position: absolute;
    z-index: 100;
    flex-direction: row;
    .mobile-menu {
      background-color: transparent;
    }
    .control {
      .icon {
        display: none;
      }
    }
    .dropdown {
      display: none;
    }
  } */
`;
