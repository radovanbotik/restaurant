import React from "react";
import styled from "styled-components";

export const Location = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  return (
    <Wrapper className="location">
      <div className="control">
        <iframe
          // width="600"
          // height="450"
          loading="lazy"
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:Ei5Lb27FoXRhbnTDrW5hIMSMdWxlbmEsIDkxNyAwMSBUcm5hdmEsIFNsb3Zha2lhIi4qLAoUChIJQSXHkHhfa0cR-ykXfd0U3sQSFAoSCXklzwyAoGxHEYh4FojlmXkA&key=${API_KEY}`}
        ></iframe>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .control {
    width: 100%;
    height: 100%;
    /* width: 420px; */
    margin: 0 auto;
    padding: 80px 0;
    /* padding-top: 130px; */
    display: grid;
    justify-items: center;
    gap: 1em;
    iframe {
      width: 100%;
      height: 500px;
    }
  }
`;
