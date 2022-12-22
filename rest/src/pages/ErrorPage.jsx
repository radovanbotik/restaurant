import React from "react";
import styled from "styled-components";
import { Button, Headline } from "../components";

export const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="control">
        <Headline tag={"Sorry"} headline={"We are not on the same page."} />
        <Button text={"Return to Frontpage"} path={"/"} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: var(--black-main);
  position: relative;
  display: grid;
  place-content: center;
  .control {
    padding: 20px;
    margin: 0 auto;
    max-width: 1400px;
    /* display: flex;
    flex-direction: column; */
  }
`;
