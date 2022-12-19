import React from "react";
import styled from "styled-components";

export const ParagraphDescription = ({ description }) => {
  return <Wrapper>{description}</Wrapper>;
};

const Wrapper = styled.p`
  margin-bottom: 52px;
  text-align: center;
`;
