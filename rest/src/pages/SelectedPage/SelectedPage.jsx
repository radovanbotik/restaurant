import React, { useState } from "react";
import styled from "styled-components";
import { selected } from "../../utility/selectedDummy";
import { ItemCard } from "./ItemCard";

export const SelectedPage = () => {
  const [data, setData] = useState(selected);
  console.log(data);
  return (
    <Wrapper>
      <div className="control">
        <div className="gallery">
          {data.map(entry => (
            <ItemCard key={entry.id} {...entry} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: #0b1315;
  position: relative;
  display: grid;
  place-content: center;
  .control {
    width: 420px;
    margin: 0 auto;
    padding: 80px 0;
    display: grid;
    justify-items: center;
    gap: 1em;
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
      gap: 2em;
    }
  }
`;
