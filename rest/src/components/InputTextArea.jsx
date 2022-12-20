import styled from "styled-components";
import React from "react";
import { useGlobalContact } from "../context/ContactContext";

export const InputTextArea = ({ name }) => {
  const { userInput, setUserInput, handleChange, handleSubmit } =
    useGlobalContact();
  return (
    <Wrapper>
      <textarea
        name={name}
        value={userInput[name]}
        onChange={e =>
          handleChange({ target: e.target.name, value: e.target.value })
        }
      ></textarea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 120px;
  width: 100%;
  padding: 13px 23px;
  line-height: 24px;
  background-color: transparent;
  border: 1px solid #715b3e;
  border-radius: 0;
  outline: 0;
  user-select: none;
  textarea {
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
