import React from "react";
import styled from "styled-components";
import { AnchorMoving } from "./AnchorMoving";
import { Address } from "./Address";
import { Logo } from "./Logo";
import { scrollToTop } from "../utility/scrollToTop";
import { Socials } from "./Socials";

export const Footer = () => {
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
  return (
    <Wrapper onClick={scrollToTop}>
      <div className="control">
        <div className="logo">
          <Logo />
        </div>
        <Address />
        <Socials socials={socialsData} />
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
