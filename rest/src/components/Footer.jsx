import React from "react";
import styled from "styled-components";
import { AnchorMoving } from "./AnchorMoving";
import { Logo } from "./Logo";
import { scrollToTop } from "../utility/scrollToTop";

export const Footer = () => {
  return (
    <Wrapper onClick={scrollToTop}>
      <div className="control">
        <div className="logo">
          <Logo />
        </div>
        <div className="address">
          <div>The Gourmand Lounge</div>
          <div>Štefánikova 20 Trnava, 91701,</div>
          <div>Open: 09:00am - 01:00pm</div>
          <div>reservations@gourmandlounge.com</div>
        </div>
        <div className="socials">
          <AnchorMoving
            text={"Instagram"}
            path={"https://www.instagram.com/"}
          />
          <AnchorMoving
            text={"Trip Advisor"}
            path={"https://www.tripadvisor.com/"}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: #0b1315;
  padding: 0px 40px;
  .control {
    padding: 80px 0;
    /* width: 420px; */
    max-width: 768px;
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
      flex-wrap: wrap;
      justify-content: space-between;
      /* justify-content: center; */
      align-items: center;
      padding: 40px;
    }
  }
`;
