import React from "react";
import { createPortal } from "react-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { alertState } from "../../../atoms/uiState";
import rem from "../../../lib/Rem";
import Button from "../Button";

export type AlertProps = {
  onAlertClosed?: () => void;
  title: string;
  text?: string;
  errText?: string;
};

function Alert({ onAlertClosed, title, errText, text }: AlertProps) {
  const setAlertState = useSetRecoilState(alertState);

  const handleClose = () => {
    if (onAlertClosed) {
      onAlertClosed();
    }
    setAlertState({ isOpen: false });
  };

  return (
    <AlertInner>
      <AlertContainer>
        <Container>
          <Title>{title}</Title>
          {text && <Text />}
          {errText && <ErrorText />}
        </Container>
        <CloseButton title="확인" color="" />
      </AlertContainer>
    </AlertInner>
  );
}

export type AlertInnerProps = {
  children: React.ReactNode;
};

function AlertInner({ children }: AlertInnerProps) {
  const el = document.getElementById("alert");

  return createPortal(<Wrapper>{children}</Wrapper>, el!);
}

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlertContainer = styled.div`
  width: 70%;
  background-color: #ced6e0e0;
  border-radius: ${rem(8)};
  justify-content: stretch;
  box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.17);
  -webkit-box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.17);
  -moz-box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.17);
  padding: ${rem(30)} ${rem(10)};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  height: 100%;
  min-height: ${rem(150)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-25%);
`;

const Title = styled.div``;

const Text = styled.div``;

const ErrorText = styled.div``;

const CloseButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${rem(40)};
  display: flex;
  justify-content: center;
  background-color: #1e90ff;
`;

export default Alert;
