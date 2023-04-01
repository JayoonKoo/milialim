import React from "react";
import { useSetRecoilState } from "recoil";
import { modalState } from "../../../atoms/uiState";
import Button from "../../atom/Button";
import { Left, Right, Wrapper } from "./styled";

function Footer() {
  const setModalState = useSetRecoilState(modalState);
  const handleAddNewList = () => {
    setModalState((prev) => ({
      addListItem: !prev.addListItem,
    }));
  };

  return (
    <Wrapper>
      <Left>
        <Button title="새로운 미리알림" icon="plus" />
      </Left>
      <Right onClick={handleAddNewList}>
        <Button title="목록 추가" />
      </Right>
    </Wrapper>
  );
}

export default Footer;
