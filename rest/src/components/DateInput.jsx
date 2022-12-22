import styled from "styled-components";
import React from "react";
import { useGlobalBooking } from "../context/BookingContext";

export const DateInput = ({ type }) => {
  const { handleChange, handleSubmit, userInput } = useGlobalBooking();

  return (
    <Wrapper>
      <span className="material-symbols-outlined icon">calendar_month</span>
      <input
        type="date"
        name={type}
        value={userInput[type]}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  appearance: none;
  height: 50px;
  background-color: transparent;
  display: inline-block;
  position: relative;

  background-color: transparent;
  color: white;
  font-size: 17px;

  border: 1px solid #715b3e;
  border-radius: 0;
  outline: 0;

  input {
    appearance: none;
    -webkit-appearance: none;
    padding: 0em 1em;
    font-family: var(--opensans);

    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    border-radius: 0;
    outline: 0;
    color: white;
    line-height: 24px;
    font-size: 17px;
    &::-webkit-calendar-picker-indicator {
      opacity: 0;
      cursor: pointer;
    }
  }
  .icon {
    position: absolute;
    top: 15px;
    right: 19px;
    color: var(--gold-main);

    background-color: transparent;
    font-size: 2rem;
    font-size: inherit;
    pointer-events: none;
    cursor: pointer;
  }
`;
