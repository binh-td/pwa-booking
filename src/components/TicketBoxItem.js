import React from "react";
import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "../assets/Delete.svg";
import { ReactComponent as TicketIcon } from "../assets/Ticket.svg";
import { ReactComponent as TimeCircleIcon } from "../assets/Time Circle.svg";
import { ReactComponent as DashLineIcon } from "../assets/DashLine.svg";

const TicketBookWrapper = styled.div`
  background: #ffffff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  margin: 14px 0;
  padding: 14px;
`;

const TicketBookText = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
`;

const SlashLine = styled(DashLineIcon)`
    margin: 0 10px;
`

const TimeCircle = styled(TimeCircleIcon)`
    margin-right: 8px
`

export default function TicketBoxItem() {
  return (
    <TicketBookWrapper>
      <TicketIcon />
      <SlashLine />
      <div>
        <TicketBookText>Vé KKC-A23 546</TicketBookText>
        <TicketBookText>Chuyến bay số: 355</TicketBookText>
      </div>
      <SlashLine />
      <TimeCircle />
      <TicketBookText>09:30 20/12/2022</TicketBookText>
      <SlashLine />
      <DeleteIcon />
    </TicketBookWrapper>
  );
}
