import React, { useEffect, useState } from "react";
import { IconType } from "../../atom/Icon/Icon";
import ColorsSection from "../ColorsSection";
import IconSection from "../IconSection";
import TitleSection from "../TitleSection";
import { Form } from "./styled";

export interface AddAlimListFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setIsAble: (isAble: boolean) => void;
}

function AddAlimListForm({ handleSubmit, setIsAble }: AddAlimListFormProps) {
  const [value, setValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("#1e90ff");
  const [selectedIcon, setSelectedIcon] = useState<IconType>("list");

  useEffect(() => {
    setIsAble(value.length >= 1);
  }, [value]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleClear = () => {
    setValue("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <TitleSection
        selectedIcon={selectedIcon}
        handleClear={handleClear}
        handleTitleChange={handleTitleChange}
        value={value}
        color={selectedColor}
      />
      <ColorsSection
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <IconSection
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
      />
    </Form>
  );
}

export default AddAlimListForm;
