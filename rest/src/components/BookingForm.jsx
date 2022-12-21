import React from "react";
import styled from "styled-components";
import { SelectInput } from "./SelectInput";
import { DateInput } from "./DateInput";
import { ButtonMedium } from "./ButtonMedium";

export const BookingForm = () => {
  return (
    <Wrapper>
      <div className="control ">
        <SelectInput />
        <SelectInput />
        <DateInput />
        <ButtonMedium text={"book now"} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  .control {
    width: 100%;
    display: grid;
    gap: var(--vspace-2);
    grid-template-columns: 1fr 1fr;
    align-content: center;
    justify-content: center;
    .button {
      padding: 0;
    }
  }
  @media (min-width: 1000px) {
    .control {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      /* grid-template-columns: minmax(200px, 600px) minmax(200px, 600px); */
    }
  }
`;
