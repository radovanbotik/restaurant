import React from "react";
import styled from "styled-components";

export const Address = () => {
  return (
    <Wrapper>
      <div>The Gourmand Lounge</div>
      <div>Štefánikova 20 Trnava, 91701,</div>
      <div>Open: 09:00am - 01:00pm</div>
      <div>reservations@gourmandlounge.com</div>
    </Wrapper>
  );
};

const Wrapper = styled.address`
  font-style: normal;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  text-emphasis: none;
  color: white;
  div {
    line-height: 14px;
    margin: 0 0 25px;
  }
`;
