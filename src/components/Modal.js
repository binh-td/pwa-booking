import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Thumbnail from "../assets/thumbnail.png";

// icons
import { ReactComponent as CloseIcon } from "../assets/Close Square.svg";
import TicketBoxItem from './TicketBoxItem';


const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 999
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 610px;
  position: relative;
  z-index: 10;
  border-radius: 22px 22px 0 0;
  background: #FBFBFB;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
`;

const ModalContent = styled.div`
`;

const CloseModalButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const ModalTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 18px 22px 11px 22px;
`

const ModalTitleText = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #333333;
`

const ModalTitleIcon = styled.div`
  margin-left: 8px;
  width: 24px;
  height: 24px;
  color: #fff;
  background: #F5D769;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
`

const ListTicket = styled.div`
  margin: 0 22px;
`

const FooterButton = styled.button`
  position: absolute;
  bottom: 0;
  background: #759BFE;
  border: none;
  border-radius: 16px;
  margin: 13px 33px;
  width: fill-available;
  padding: 15px 0;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
`

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
            <ModalWrapper showModal={showModal}>
              <ModalTitleWrapper>
                <ModalTitleText>
                  Your Card
                </ModalTitleText>
                <ModalTitleIcon>
                  05
                </ModalTitleIcon>
              </ModalTitleWrapper>
              <ModalContent>
                <img src={Thumbnail} alt="" style={{ borderRadius: 20, padding: '0 16px', width: 360 }}/>
                <ListTicket>
                  <TicketBoxItem />
                </ListTicket>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              >
                <CloseIcon />
              </CloseModalButton>
              <FooterButton onClick={() => setShowModal(prev => !prev)}>Thoát</FooterButton>
            </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};