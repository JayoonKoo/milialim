import React, { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { modalState } from "../../../atoms/uiState";
import Button from "../../atom/Button";
import PopUp from "../../atom/PopUp";
import Section from "../../atom/Section";
import Header from "../Header";
import { Form, Wrapper } from "./styled";

function AddAlimListItemPopUp() {
  const setModalState = useSetRecoilState(modalState);
  const [localModalState, setLocalModalState] = useState(true);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = () => {
    setLocalModalState(false);
  };

  const handleWhenClosed = () => {
    if (localModalState !== false) return;

    setModalState((prev) => ({ ...prev, addListItem: false }));
  };

  return (
    <PopUp>
      <Wrapper
        ref={popupRef}
        onAnimationEnd={handleWhenClosed}
        isOpen={localModalState}
      >
        <Header
          left={[<Button onClick={handleCloseModal} title="취소" />]}
          right={[<Button title="완료" disabled />]}
          title="새로운 목록"
        />
        <Form>
          <Section>section</Section>
        </Form>
      </Wrapper>
    </PopUp>
  );
}

export default AddAlimListItemPopUp;
