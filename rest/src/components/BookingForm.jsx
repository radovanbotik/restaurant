import React from "react";
import styled from "styled-components";
import { SelectInput } from "./SelectInput";
import { DateInput } from "./DateInput";
import { SubmitButton } from "./SubmitButton";
import { useGlobalBooking } from "../context/BookingContext";

const hourOptions = [
  { option: "12:00" },
  { option: "13:00" },
  { option: "14:00" },
  { option: "15:00" },
  { option: "16:00" },
  { option: "17:00" },
  { option: "18:00" },
  { option: "19:00" },
  { option: "20:00" },
  { option: "21:00" },
  { option: "22:00" },
];

const peopleOptions = [
  { option: 1 },
  { option: 2 },
  { option: 3 },
  { option: 4 },
  { option: 5 },
];

export const BookingForm = () => {
  const { handleSubmit } = useGlobalBooking();
  return (
    <Wrapper onSubmit={handleSubmit}>
      <div className="controlform">
        <SelectInput options={peopleOptions} type={"people"} />
        <SelectInput options={hourOptions} type={"hours"} />
        <DateInput type={"date"} />
        {/* <ButtonMedium text={"book now"} /> */}
        <SubmitButton text={"book now"} type={"date"} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  .controlform {
    width: 100%;
    display: grid;
    gap: var(--vspace-2);
    /* grid-template-columns: minmax(100px, 1fr) minmax(100px, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    align-content: center;
    justify-content: center;
    .button {
      padding: 0;
    }
  }
  @media (min-width: 1000px) {
    .control {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      /* grid-template-columns: minmax(200px, 600px) minmax(200px, 600px); */
    }
  }
`;
