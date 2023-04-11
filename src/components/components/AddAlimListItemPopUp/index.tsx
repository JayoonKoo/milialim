import React, { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { modalState } from "../../../atoms/uiState";
import Button from "../../atom/Button";
import PopUp from "../../atom/PopUp";
import AddAlimListForm, { AddAlimListFormHandler } from "../AddAlimListForm";
import Header from "../Header";
import { Wrapper } from "./styled";

function AddAlimListItemPopUp() {
  const setModalState = useSetRecoilState(modalState);
  const [localModalState, setLocalModalState] = useState(true);
  const popupRef = useRef<HTMLDivElement>(null);
  const [isAbleSubmit, setIsAbleSubmit] = useState(false);
  const formRef = useRef<AddAlimListFormHandler>(null);

  const handleCloseModal = () => {
    setLocalModalState(false);
  };

  const handleWhenClosed = () => {
    if (localModalState !== false) return;

    setModalState((prev) => ({ ...prev, addListItem: false }));
  };

  const handleAddListItem = async () => {
    await formRef.current?.submit();
    handleCloseModal();
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
          right={[
            <Button
              title="완료"
              disabled={!isAbleSubmit}
              onClick={handleAddListItem}
            />,
          ]}
          title="새로운 목록"
        />
        <AddAlimListForm setIsAble={setIsAbleSubmit} ref={formRef} />
      </Wrapper>
    </PopUp>
  );
}

export default AddAlimListItemPopUp;
