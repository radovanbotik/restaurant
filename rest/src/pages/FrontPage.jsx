import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useGlobalBooking } from "../context/BookingContext";
import {
  Hero,
  Stories,
  Testimonials,
  Recomendations,
  Menu,
  Tips,
  Booking,
  Modal,
} from "../components";

export const FrontPage = () => {
  const { modalState } = useGlobalBooking();
  return (
    <Wrapper>
      <Hero />
      <Stories />
      <Testimonials />
      <Recomendations />
      <Menu />
      <Tips />
      <Booking />
      {modalState && <Modal />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
`;
