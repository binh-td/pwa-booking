import React, { forwardRef } from 'react'
import ReactDatePicker from 'react-datepicker';
import styled from 'styled-components';
import { ReactComponent as CalendarIcon } from "../assets/Calendar.svg";

const DatePickerWrapper = styled.div`
  background: #ffffff;
  border-radius: 10px;
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 7px 0;
`;


const InputDatePicker = styled.input`
  background: #ffffff;
  border-radius: 10px;
  height: 40px;
  width: 60%;
  border: none;

  &:focus-visible {
    outline: unset;
  }
`;

const CustomInputDate = forwardRef(({ value, onClick }, ref) => (
    <DatePickerWrapper onClick={onClick} ref={ref}>
      <CalendarIcon style={{ marginLeft: "16px", marginRight: "6px" }} />
      <InputDatePicker value={value} />
    </DatePickerWrapper>
  ));
  

export default function CustomDatePicker({ ...props }) {
  return (
    <ReactDatePicker
        {...props}
        customInput={<CustomInputDate />}
        dateFormat="dd/MM/yyyy"
    />
  )
}
