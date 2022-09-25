import React from "react";
import styled from "styled-components";

// icons
import { ReactComponent as BankTransferIcon } from "../../assets/Bank Transfer.svg";
import { ReactComponent as VisaIcon } from "../../assets/Visa.svg";
import { ReactComponent as ProfileIcon } from "../../assets/Profile.svg";
import { ReactComponent as MessageIcon } from "../../assets/Message.svg";
import { ReactComponent as CallIcon } from "../../assets/Call.svg";

// components
import TicketBoxItem from "../../components/TicketBoxItem";
import CustomInput from "../../components/CustomInput";
import SearchBox from "../../components/SearchBox";
import ProgressBar from "../../components/ProgressBar";

const Layout1 = styled.div`
  background: linear-gradient(180deg, #4373f2 0%, #74e6ff 100%);
  height: 100vh;
`;

const ModelBox = styled.div`
  background: #f8f8f8;
  box-shadow: 0px 4px 40px rgb(0 0 0 / 10%);
  border-radius: 38px;
  padding: 20px 0;
`;

const SectionTitle = styled.h4`
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
`

const ContentBox = styled.div`
  margin: 0 28px;
`;

const PaymentLine = styled.div`
    background: #FFFFFF;
    border-radius: 6px;
    height: 50px;
    line-height: 50px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    margin-bottom: 10px;
`

const PaymentText = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: #474A56;
    margin-left: 16px;
`

const TotalLine = styled.div`
    background: #FFFFFF;
    border-radius: 6px;
    height: 64px;
    line-height: 64px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 36px;
`

const TotalLabel = styled.span`
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
`

const TotalPrice = styled.span`
    font-weight: 600;
    font-size: 24px;
    line-height: 25px;
    color: #759BFE;
`

const FooterButton = styled.button`
  background: #759bfe;
  border: none;
  border-radius: 16px;
  width: 100%;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  height: 56px;
`;

const InfoTitle = styled.h3`
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
`

function PaymentTicket() {
  return (
    <>
      <Layout1>
        <ProgressBar step={2} />
        <SearchBox>
            <InfoTitle>Thông tin vé đã chọn</InfoTitle>
            <TicketBoxItem />
            <TicketBoxItem />
        </SearchBox>
        {/* <button onClick={() => setShowModal(true)}>open modal</button> */}
        <ModelBox>

          <ContentBox>
            <SectionTitle>
                Thông tin khách hàng
            </SectionTitle>
            <CustomInput placeholder="Họ và tên" prefixIcon={<ProfileIcon />} />
            <CustomInput placeholder="Số điện thoại" prefixIcon={<CallIcon />} />
            <CustomInput placeholder="Email" prefixIcon={<MessageIcon />} />
            <SectionTitle>
                Phương thức thanh toán
            </SectionTitle>
            <PaymentLine>
                <BankTransferIcon />
                <PaymentText>**** 1234</PaymentText>
            </PaymentLine>
            <PaymentLine>
                <VisaIcon />
                <PaymentText>**** 1234</PaymentText>
            </PaymentLine>
            <TotalLine>
                <TotalLabel>Tổng tiền thanh toán</TotalLabel>
                <TotalPrice>600.000 vnđ</TotalPrice>
            </TotalLine>
            <FooterButton>
                    Tiếp tục
            </FooterButton>
          </ContentBox>
        </ModelBox>
      </Layout1>
    </>
  );
}

export default PaymentTicket;
