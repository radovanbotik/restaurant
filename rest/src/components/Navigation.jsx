import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";

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
          <span className="material-symbols-outlined icon logo">
            restaurant_menu
          </span>
          <span className="material-symbols-outlined icon" onClick={revealMenu}>
            drag_handle
          </span>
        </div>
        <div className="dropdown" ref={dropdownRef}>
          <nav className="nav">
            <ul>
              <li>
                <a href="/">
                  <span className="text">Home</span>
                  <span className="material-symbols-outlined icon">
                    keyboard_double_arrow_right
                  </span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="text">Menu</span>
                  <span className="material-symbols-outlined icon">
                    keyboard_double_arrow_right
                  </span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="text">Contact</span>
                  <span className="material-symbols-outlined icon">
                    keyboard_double_arrow_right
                  </span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="text">Coworking</span>
                  <span className="material-symbols-outlined icon">
                    keyboard_double_arrow_right
                  </span>
                </a>
              </li>
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
    .icon {
      font-size: 3rem;
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
      li {
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
            /* &:hover {
              &:before {
                width: 100%;
              }
              &:after {
                width: 100%;
              }
            } */
          }

          .icon {
            font-size: inherit;
          }
        }
      }
    }
  }
`;
