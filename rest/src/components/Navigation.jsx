import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { LogoText } from "./LogoText";
import { Link } from "react-router-dom";
import { NavigationLink } from "./NavigationLink";

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef(null);

  const revealMenu = () => {
    dropdownRef.current.classList.toggle("active");
  };

  return (
    <Wrapper>
      <div className="mobile-menu">
        <div className="control">
          <LogoText />
          <span className="material-symbols-outlined icon" onClick={revealMenu}>
            drag_handle
          </span>
        </div>
        <div className="dropdown" ref={dropdownRef}>
          <nav className="nav">
            <ul>
              <NavigationLink path="/" directory={"home"} />
              <NavigationLink path="/menu" directory={"menu"} />
              <NavigationLink path="/booking" directory={"booking"} />
              <NavigationLink path="/kitchen" directory={"team"} />
            </ul>
          </nav>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 19px;
  font-weight: 300;
  font-family: var(--josefinsans);
  line-height: 29px;
  .mobile-menu {
    width: 100%;
    background-color: #0b1315;
  }
  .control {
    /* height: 100%; */
    height: 70px;
    width: 420px;
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
    height: 0px;
    background-color: #0f1d22;
    border-bottom: 1px solid #715b3e;
    transition: height 400ms ease;
  }
  .dropdown.active {
    height: 200px;
  }
  nav {
    width: 420px;
    padding: 20px 0;
    margin: 0 auto;
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      /* gap: 1rem; */
    }
  }
`;
