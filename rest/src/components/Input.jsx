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
        onChange={e => {
          handleChange({ target: e.target.name, value: e.target.value });
        }}
      ></input>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 50px;
  width: 100%;

  padding: 7px 23px 3px;
  line-height: 24px;
  background-color: transparent;
  border: 1px solid #715b3e;
  border-radius: 0;
  outline: 0;
  user-select: none;
  input {
    font-size: 19px;
    width: 100%;
    height: 100%;
    display: inline-block;
    background-color: transparent;
    font-family: inherit;
    color: white;
    border: none;
    line-height: 24px;
    border-radius: none;
  }
  /* option {
    background-color: transparent;
  } */
`;
