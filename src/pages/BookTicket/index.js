import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// icons
import { ReactComponent as LocationIcon } from "../../assets/Location.svg";
import { ReactComponent as DropDownIcon } from "../../assets/ArrowDropDown.svg";
import { ReactComponent as CalendarIcon } from "../../assets/Calendar.svg";
import { ReactComponent as WhiteTimeCircleIcon } from "../../assets/White Time Circle.svg";
import { ReactComponent as BlueTimeCircleIcon } from "../../assets/Blue Time Circle.svg";
import { ReactComponent as PlusIcon } from "../../assets/Plus.svg";
import { ReactComponent as ArmchairIcon } from "../../assets/Armchair.svg";
import { ReactComponent as WhiteTicketIcon } from "../../assets/WhiteTicket.svg";
import BallonSrc from "../../assets/ballon.png";

// components
import Select, { components } from "react-select";
import SearchBox from "../../components/SearchBox";
import { Modal } from "../../components/Modal";
import ProgressBar from "../../components/ProgressBar";
import CustomDatePicker from "../../components/CustomDatePicker";
import CustomTimePicker from "../../components/CustomTimePicker";

const Layout1 = styled.div`
  background: linear-gradient(180deg, #4373f2 0%, #74e6ff 100%);
  height: 100vh;
`;

const SearchLabel = styled.label`
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  margin-bottom: 7px;
`;

const ModelBox = styled.div`
  background: #f8f8f8;
  box-shadow: 0px 4px 40px rgb(0 0 0 / 10%);
  border-radius: 38px;
  padding: 20px 0;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CardItemWrapper = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 20px 15px;
  margin: 6px 6px 16px 6px;
`;

const CardItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 9px;
`;

const CardItemIitle = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
`;

const ClockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #5883f2;
  border-radius: 10px;
  padding: 9px 11px;
`;

const ClockText = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  color: #ffffff;
  margin-left: 8px;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const AddToCart = styled.div`
  position: absolute;
  bottom: 12px;
  right: 5px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 999px;
  cursor: pointer;
`;

const ReservationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const ReservationText = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin-left: 8px;
`;

const FooterBox = styled.div`
  margin: 0 28px;
  display: flex;
  align-items: center;
`;

const CartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #759bfe;
  border-radius: 10px;
  width: 56px;
  height: 56px;
  position: relative;
`;

const FooterButton = styled.button`
  background: #759bfe;
  border: none;
  border-radius: 16px;
  width: 82%;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  height: 56px;
  margin-left: 10px;
`;

const NumberIcon = styled.div`
  margin-left: 8px;
  width: 24px;
  height: 24px;
  color: #fff;
  background: #f5d769;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  position: absolute;
  top: 2px;
  right: 0px;
`;

const DatePickerWrapper = styled.div`
  background: #ffffff;
  border-radius: 10px;
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 7px 0;
`;

const TimePickerWrapper = styled.div`
  background: #ffffff;
  border-radius: 10px;
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 7px 0px;
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

const CustomSelectInput = styled(components.ValueContainer)`
  display: flex !important;
  height: 45px;
`;

const TimeText = styled.span`
  color: #999999;
  font-weight: 500;
  font-size: 12px;
  line-height: 48px;
  height: 50px;
`

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const ValueContainer = ({ children, ...props }) => {
  return (
    components.ValueContainer && (
      <CustomSelectInput {...props}>
        {!!children && <LocationIcon style={{ margin: "0 6px" }} />}
        {children}
      </CustomSelectInput>
    )
  );
};

const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <DropDownIcon />
      </components.DropdownIndicator>
    )
  );
};

function BookTicket() {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  let navigate = useNavigate();

  const handleContinue = () => {
    navigate("/payment")
  }

  return (
    <>
      <Layout1>
        <ProgressBar />
        <SearchBox>
          <SearchLabel>Chọn địa điểm</SearchLabel>
          <Select
            options={options}
            components={{
              DropdownIndicator,
              ValueContainer,
              IndicatorSeparator: () => null,
            }}
            styles={{
              control: (styles) => {
                return {
                  ...styles,
                  backgroundColor: "#fff",
                  border: "none",
                  borderRadius: 10,
                  margin: "7px 0",
                };
              },
            }}
          />
          <SearchLabel>Chọn ngày bay</SearchLabel>
          <CustomDatePicker
            selected={date}
            onChange={(date) => setDate(date)}
          />
          <SearchLabel>Chọn giờ bay</SearchLabel>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: 5 }}>
              <CustomTimePicker
                selected={time}
                onChange={(date) => setTime(date)}
                timeCaption="Giờ bay"
                timeIntervals={15}
                style={{ marginRight: 5 }}
                text="Từ: "
              />
            </div>
            <div>
              <CustomTimePicker
                selected={time}
                onChange={(date) => setTime(date)}
                timeCaption="Giờ bay"
                timeIntervals={15}
                style={{ marginRight: 5 }}
                text="Đến: "
              />
            </div>
          </div>
        </SearchBox>
        <ModelBox>
          <FlexBox>
            {[1, 2, 3, 4].map((item) => {
              return (
                <CardItemWrapper key={item}>
                  <CardItemHeader>
                    <CardItemIitle>KKC-A23</CardItemIitle>
                    <ClockWrapper>
                      <WhiteTimeCircleIcon />
                      <ClockText>09:30</ClockText>
                    </ClockWrapper>
                  </CardItemHeader>
                  <ImageWrapper>
                    <img src={BallonSrc} alt="BallonImage" />
                    <AddToCart>
                      <PlusIcon />
                    </AddToCart>
                  </ImageWrapper>
                  <ReservationWrapper>
                    <ArmchairIcon />
                    <ReservationText>02/10</ReservationText>
                  </ReservationWrapper>
                </CardItemWrapper>
              );
            })}
          </FlexBox>
          <FooterBox>
            <CartWrapper onClick={() => setShowModal(true)}>
              <WhiteTicketIcon></WhiteTicketIcon>
              <NumberIcon>05</NumberIcon>
            </CartWrapper>
            <FooterButton onClick={handleContinue}>
                {/* <NavLink to="/payment"> */}
                    Tiếp tục
                {/* </NavLink> */}
            </FooterButton>
          </FooterBox>
        </ModelBox>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Layout1>
    </>
  );
}

export default BookTicket;
