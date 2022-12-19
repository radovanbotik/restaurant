import React from "react";
import styled from "styled-components";
import { SelectInput } from "./SelectInput";
import { DateInput } from "./DateInput";
import { ButtonMedium } from "./ButtonMedium";

export const BookingForm = () => {
  return (
    <Wrapper>
      <SelectInput />
      <SelectInput />
      <DateInput />
      <ButtonMedium text={"book now"} />
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: grid;
  gap: 32px;
  /* grid-template-areas:
    "guests date"
    "time button"; */
  grid-template-columns: 1fr 1fr;
  align-content: center;
  justify-content: center;
  .button {
    padding: 0;
  }
`;
