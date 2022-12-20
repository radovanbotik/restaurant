import React from "react";
import styled from "styled-components";
import { Headline } from "../../components";
import { ContactForm } from "./ContactForm";
import { Location } from "./Location";

export const BookingPage = () => {
  return (
    <Wrapper>
      <Location />
      <Headline tag={"Write to us"} headline={"we are listening"} />
      <ContactForm />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: #0b1315;
  position: relative;
  display: grid;
  place-content: center;
`;
