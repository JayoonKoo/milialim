import React, { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { modalState } from "../../atoms/uiState";
import PopUp from "../atom/PopUp";
import Header from "../components/Header";
import { Wrapper } from "./styled";

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
        onClick={handleCloseModal}
        ref={popupRef}
        onAnimationEnd={handleWhenClosed}
        isOpen={localModalState}
      >
        <Header></Header>
      </Wrapper>
    </PopUp>
  );
}

export default AddAlimListItemPopUp;
