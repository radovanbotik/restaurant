import React from "react";
import styled from "styled-components";
import { AnchorMoving } from "./AnchorMoving";

export const PersonCard = ({ id, name, occupation, contact, image }) => {
  return (
    <Wrapper>
      <Inner bg={image}>
        <div className="details">
          <h1 className="person">{name}</h1>
          <div className="contact">
            {Object.entries(contact).map((array, index) => {
              const [text, path] = array;
              return <AnchorMoving key={index} text={text} path={path} />;
            })}
          </div>
        </div>
      </Inner>
      <div className="details">
        <h5 className="footnote_ts">{name}</h5>
        <p>{occupation}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 15px;
  height: 600px;
  width: 100%;
  max-width: 420px;
  gap: 20px;
  text-align: center;
`;

const Inner = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.bg});
    transition: 450ms ease-in-out;
  }
  &:hover {
    &:before {
      filter: blur(1px);
    }
    .details {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
  .details {
    height: 100%;
    width: 100%;
    background-color: #0f1d227e;
    gap: 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: 450ms ease-in-out;
    .person {
      align-self: center;
      line-height: 1;
      font-size: 2.375em;
    }
    .contact {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
