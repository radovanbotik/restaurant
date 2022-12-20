import React from "react";
import styled from "styled-components";

export const Location = () => {
  return (
    <Wrapper>
      <div className="control">
        <iframe
          width="600"
          height="450"
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:Ei5Lb27FoXRhbnTDrW5hIMSMdWxlbmEsIDkxNyAwMSBUcm5hdmEsIFNsb3Zha2lhIi4qLAoUChIJQSXHkHhfa0cR-ykXfd0U3sQSFAoSCXklzwyAoGxHEYh4FojlmXkA&key=AIzaSyB3D8TTvHZPx8c4rn9uO7wiH1u7gGVT8SA"
        ></iframe>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .control {
    width: 420px;
    margin: 0 auto;
    padding: 80px 0;
    /* padding-top: 130px; */
    display: grid;
    justify-items: center;
    gap: 1em;
    iframe {
      width: 100%;
    }
  }
`;
