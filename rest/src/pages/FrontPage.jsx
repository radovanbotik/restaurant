import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  Hero,
  Stories,
  Testimonials,
  Recomendations,
  Menu,
  Tips,
  Booking,
  FAB,
} from "../components";

export const FrontPage = () => {
  return (
    <Wrapper>
      <Hero />
      <Stories />
      <Testimonials />
      <Recomendations />
      <Menu />
      <Tips />
      <Booking />
    </Wrapper>
  );
};

const Wrapper = styled.section``;
