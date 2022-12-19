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
  .control {
    padding: 80px 0;
    width: 420px;
    margin: 0 auto;
    padding-top: 130px;
  }
`;
