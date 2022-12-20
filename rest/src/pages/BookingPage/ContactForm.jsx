import React from "react";
import styled from "styled-components";
import { Button, Input, InputTextArea, SubmitButton } from "../../components";
import { useGlobalContact } from "../../context/ContactContext";

export const ContactForm = () => {
  const { userInput, setUserInput, handleChange, handleSubmit } =
    useGlobalContact();
  return (
    <Wrapper>
      <div className="control">
        <form onSubmit={handleSubmit}>
          <Input type={"text"} name={"name"} />
          <Input type={"email"} name={"email"} />
          <InputTextArea name={"message"} />
          <SubmitButton text={"send"} />
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .control {
    form {
      display: grid;
      gap: 28px;
      justify-items: center;
      align-items: center;
      input {
      }
    }
  }
`;
