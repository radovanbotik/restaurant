import React, { useState } from "react";
import styled from "styled-components";
import { personel } from "../../utility/personelDummy";
import { PersonCard, Headline } from "../../components";

export const KitchenPage = () => {
  const [data, setData] = useState(personel);

  return (
    <Wrapper>
      <div className="control">
        <Headline tag={"Meet"} headline={"the team"} />
        <div className="gallery">
          {data.map(entry => (
            <PersonCard key={entry.id} {...entry} type={"product"} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: var(--black-main);
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
      gap: 30px;
    }
  }
`;
