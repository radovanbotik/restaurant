import React from "react";
import styled from "styled-components";
import { AnchorMoving } from "./AnchorMoving";

export const Socials = ({ socials }) => {
  console.log(socials);
  return (
    <Wrapper>
      {socials.map(({ platform, path }) => (
        <AnchorMoving key={platform} text={platform} path={path} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: var(--vspace-2);
  /* justify-content: center; */
  align-items: center;
  /* padding: 40px; */
`;
