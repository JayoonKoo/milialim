import React, { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { modalState } from "../../../atoms/uiState";
import Button from "../../atom/Button";
import Input from "../../atom/Input";
import PopUp from "../../atom/PopUp";
import Section from "../../atom/Section";
import SVGBox from "../../atom/SVGBox";
import Header from "../Header";
import { Form, Wrapper } from "./styled";

function AddAlimListItemPopUp() {
  const setModalState = useSetRecoilState(modalState);
  const [localModalState, setLocalModalState] = useState(true);
  const popupRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("");
  const [isAbleSubmit, setIsAbleSubmit] = useState(false);

  useEffect(() => {
    setIsAbleSubmit(value.length >= 1);
  }, [value]);

  const handleCloseModal = () => {
    setLocalModalState(false);
  };

  const handleWhenClosed = () => {
    if (localModalState !== false) return;

    setModalState((prev) => ({ ...prev, addListItem: false }));
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleClear = () => {
    setValue("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          right={[<Button title="완료" disabled={!isAbleSubmit} />]}
          title="새로운 목록"
        />
        <Form onSubmit={handleSubmit}>
          <Section>
            <SVGBox name="list" />
            <Input
              placeholder="목록 이름"
              value={value}
              onChange={handleTitleChange}
              onClickClear={handleClear}
            />
          </Section>
        </Form>
      </Wrapper>
    </PopUp>
  );
}

export default AddAlimListItemPopUp;
