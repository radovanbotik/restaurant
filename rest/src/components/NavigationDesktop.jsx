import React, { useEffect } from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { LogoText } from "./LogoText";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { NavigationLink } from "./NavigationLink";
import { Address } from "./Address";
import { Socials } from "./Socials";

const socialsData = [
  {
    platform: "Instagram",
    path: "https://www.instagram.com/",
  },
  {
    platform: "Trip Advisor",
    path: "https://www.tripadvisor.com/",
  },
];

export const NavigationDesktop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const getScrollY = () => {
    window.addEventListener("scroll", e => {
      setScrollY(window.scrollY);
    });
  };
  const [scrollY, setScrollY] = useState(getScrollY());

  const revealCard = () => {
    setIsVisible(false);
  };
  const foldCard = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    if (scrollY > 100) foldCard();
  }, [scrollY]);
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
        <span className="material-symbols-outlined icon" onClick={revealCard}>
          drag_handle
        </span>
        <div className={isVisible ? "card active" : "card"}>
          <span className="material-symbols-outlined icon" onClick={foldCard}>
            close
          </span>
          <div className="card-control">
            <Logo />
            <Address />
            <Socials socials={socialsData} />
          </div>
        </div>
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
      font-size: 2rem;
      cursor: pointer;
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
    .card {
      position: fixed;
      right: 0;
      top: 0;
      width: 400px;
      height: 100vh;
      background-color: var(--blue-main);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      transition: all 650ms ease-in-out;
      &.active {
        width: 0;
        clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
        .card-control {
          clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
        }
      }
      .icon {
        align-self: end;
        position: absolute;
        top: 45px;
        right: 40px;
        z-index: 10;
      }
      .card-control {
        width: 100%;
        height: 100%;
        padding: 200px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--vspace-0);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        transition: all 250ms ease-in-out;
      }
    }
  }
`;
