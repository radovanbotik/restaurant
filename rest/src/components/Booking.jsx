import React from "react";
import styled from "styled-components";
import { BookingForm } from "./BookingForm";
import { Headline } from "./Headline";

export const Booking = () => {
  return (
    <Wrapper>
      <div className="control">
        <Headline tag={"Reservations"} headline={"book a table"} />
        <BookingForm />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #0f1d22;
  padding: 40px 0;
  .control {
    padding: 20px;
    margin: 0 auto;
    max-width: 1200px;
    /* display: grid;
    justify-content: center; */
  }
`;
