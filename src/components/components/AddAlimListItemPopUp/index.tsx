import React, { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { ResMyList } from "../../../api/mylist";
import { modalState } from "../../../atoms/uiState";
import Button from "../../atom/Button";
import Loading from "../../atom/Loading";
import PopUp from "../../atom/PopUp";
import AddAlimListForm, { AddAlimListFormHandler } from "../AddAlimListForm";
import Header from "../Header";
import { Wrapper } from "./styled";

type AddAlimListItemPopUpProps = {
  addListItem: (addedItem: ResMyList) => void;
};

function AddAlimListItemPopUp({ addListItem }: AddAlimListItemPopUpProps) {
  const setModalState = useSetRecoilState(modalState);
  const [localModalState, setLocalModalState] = useState(true);
  const popupRef = useRef<HTMLDivElement>(null);
  const [isAbleSubmit, setIsAbleSubmit] = useState(false);
  const formRef = useRef<AddAlimListFormHandler>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseModal = () => {
    setLocalModalState(false);
  };

  const handleWhenClosed = () => {
    if (localModalState !== false) return;

    setModalState((prev) => ({ ...prev, addListItem: false }));
  };

  const handleAddListItem = async () => {
    setIsLoading(true);
    try {
      const addedAlimItem = await formRef.current?.submit();
      if (!addedAlimItem) {
        return;
      }
      addListItem(addedAlimItem);
      handleCloseModal();
    } catch (e: any) {
      alert(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

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
