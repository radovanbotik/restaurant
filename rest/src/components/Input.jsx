import styled from "styled-components";
import React from "react";
import { useGlobalContact } from "../context/ContactContext";

export const Input = ({ type, name }) => {
  const { userInput, setUserInput, handleChange, handleSubmit } =
    useGlobalContact();
  return (
    <Wrapper>
      <input
        type={type}
        name={name}
        value={userInput[name]}
        onChange={handleChange}
        placeholder={`${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`}
      ></input>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  appearance: none;
  height: 50px;
  width: 100%;

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
  }
  /* option {
    background-color: transparent;
  } */
`;
