import React from "react";
import styled from "styled-components";
import { ButtonMoving } from "./ButtonMoving";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <Wrapper>
      <div className="control">
        <div className="logo">
          <Logo />
        </div>
        <div className="address">
          <div>The Gourmand Lounge, 71 Madison Ave</div>
          <div>10013 New York, 914-309-7030,</div>
          <div>Open: 09:00am - 01:00pm</div>
          <div>reservations@gourmandlounge.com</div>
        </div>
        <div className="socials">
          <ButtonMoving text={"Instagram"} />
          <ButtonMoving text={"Trip Advisor"} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: #0b1315;
  .control {
    padding: 80px 0;
    width: 420px;
    margin: 0 auto;
    padding-top: 130px;
    .logo {
      display: grid;
      place-content: center;
      margin-bottom: 50px;
    }
    .address {
      text-align: center;
      text-decoration: none;
      text-transform: none;
      text-emphasis: none;
      div {
        line-height: 14px;
        margin: 0 0 25px;
      }
    }
    .socials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 40px;
    }
  }
`;
