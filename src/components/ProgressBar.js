import React from "react";
import styled from "styled-components";

// icons
import { ReactComponent as InfoIcon } from "../assets/Document.svg";
import { ReactComponent as PaymentIcon } from "../assets/Wallet.svg";
import { ReactComponent as CompletedIcon } from "../assets/Tick Square.svg";

const ProcessHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items center;
  padding: 55px 50px;
`;

const Process = styled.div`
  position: relative;
`;

const CircleStep = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  border: 2px solid #fff;
  background: #769bfe;
  opacity: ${props => props.opacity};
`;

const StepTitle = styled.span`
  color: #fff;
  position: absolute;
  width: max-content;
  top: 25px;
  left: -30px;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: -30px;
  left: -3px;
`;

const Solid = styled.hr`
  border-top: 2px solid #fff;
  width: 100%;
  opacity: ${props => props.opacity};
`;

export default function ProgressBar({ step = 1 }) {
  return (
    <ProcessHeader>
      <Process>
        <IconWrapper>
          <InfoIcon />
        </IconWrapper>
        <CircleStep opacity={1} />
        <StepTitle>Thông tin</StepTitle>
      </Process>
      <Solid opacity={1} />
      <Process>
        <IconWrapper>
          <PaymentIcon opacity={step > 1 ? 1 : 0.3}/>
        </IconWrapper>
        <CircleStep opacity={step > 1 ? 1 : 0.3} />
        <StepTitle>Thanh toán</StepTitle>
      </Process>
      <Solid opacity={step > 1 ? 1 : 0.3} />
      <Process>
        <IconWrapper>
          <CompletedIcon opacity={step > 2 ? 1 : 0.3}/>
        </IconWrapper>
        <CircleStep opacity={step > 2 ? 1 : 0.3} />
        <StepTitle>Hoàn thành</StepTitle>
      </Process>
    </ProcessHeader>
  );
}
