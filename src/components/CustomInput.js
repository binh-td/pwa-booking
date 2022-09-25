import React from "react";
import styled from "styled-components";

const CustomInputWrapper = styled.div`
    display: flex;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    height: 46px;
    line-height: 46px;
    margin-bottom: 8px;
`

const InputIcon = styled.div`
    margin: 0 20px;
    height: 46px;
    line-height: 52px;
`

const Input = styled.input`
    border: none;
    background: #FFFFFF;
    width: 80%;
    height: 44px;
    line-height: 44px;

    &:focus-visible {
        outline: unset;
    }
`

export default function CustomInput({ prefixIcon, ...props }) {
  return (
    <CustomInputWrapper>
      {prefixIcon && <InputIcon>{prefixIcon}</InputIcon>}
      <Input {...props} />
    </CustomInputWrapper>
  );
}
