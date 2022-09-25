import React, { forwardRef } from 'react'
import ReactDatePicker from 'react-datepicker'
import styled from 'styled-components';
import { ReactComponent as BlueTimeCircleIcon } from "../assets/Blue Time Circle.svg";

const TimePickerWrapper = styled.div`
  background: #ffffff;
  border-radius: 10px;
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 7px 0px;
`;

const TimeText = styled.span`
  color: #999999;
  font-weight: 500;
  font-size: 12px;
  line-height: 48px;
  height: 50px;
`

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

const CustomInputTime = forwardRef(({ value, onClick, text }, ref) => (
    <TimePickerWrapper onClick={onClick} ref={ref}>
      <BlueTimeCircleIcon style={{ marginLeft: "16px", marginRight: "6px" }} />
      <TimeText>{text}</TimeText>
      <InputDatePicker value={value} />
    </TimePickerWrapper>
  ));

export default function CustomTimePicker({ text, ...props }) {
  return (
    <ReactDatePicker
        {...props}
        showTimeSelect
        showTimeSelectOnly
        dateFormat="HH:mm"
        customInput={<CustomInputTime text={text}/>}
    />
  )
}
