import styled from "styled-components";
import React, { useState } from "react";
import { useGlobalBooking } from "../context/BookingContext";

export const SelectInput = ({ options, type }) => {
  const { handleChange, handleSubmit, userInput } = useGlobalBooking();

  return (
    <Wrapper>
      <span className="material-symbols-outlined icon">arrow_drop_down</span>
      <select onChange={handleChange} name={type} value={userInput[type]}>
        {options.map(entry => {
          return (
            <option value={entry.option} key={entry.option}>
              {`${entry.option} 
              ${
                type !== "people"
                  ? ""
                  : Number(entry.option) > 1
                  ? "people"
                  : "person"
              }`}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  appearance: none;
  height: 50px;
  /* padding: 0em 1em; */
  background-color: transparent;
  display: inline-block;
  position: relative;

  background-color: transparent;
  color: white;
  font-size: 17px;

  border: 1px solid #715b3e;
  border-radius: 0;
  outline: 0;

  select {
    appearance: none;
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
    user-select: none;
    cursor: pointer;
  }

  option {
    appearance: none;
    background-color: transparent;
    background-color: var(--blue-main);
  }
  .icon {
    position: absolute;
    top: 16px;
    right: 17px;
    /* color: #715b3e; */
    color: var(--gold-main);

    background-color: transparent;
    font-size: 2rem;
    font-size: inherit;
    pointer-events: none;
  }
`;
