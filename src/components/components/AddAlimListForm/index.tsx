import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { IconType } from "../../atom/Icon/Icon";
import ColorsSection from "../ColorsSection";
import IconSection from "../IconSection";
import TitleSection from "../TitleSection";
import { Form } from "./styled";

export type AddAlimListFormHandler = {
  submit: () => void;
};

export interface AddAlimListFormProps {
  setIsAble: (isAble: boolean) => void;
}

const AddAlimListForm = forwardRef<
  AddAlimListFormHandler,
  AddAlimListFormProps
>(function AddAlimListForm({ setIsAble }, ref) {
  const [input, setInput] = useState("");
  const [selectedColor, setSelectedColor] = useState("#1e90ff");
  const [selectedIcon, setSelectedIcon] = useState<IconType>("list");

  useImperativeHandle(
    ref,
    () => {
      return {
        async submit() {
          await handleSubmit();
        },
      };
    },
    [input, selectedColor, selectedIcon]
  );

  useEffect(() => {
    setIsAble(input.length >= 1);
  }, [input]);

  const handleSubmit = () => {
    console.log(input);
    console.log(selectedColor);
    console.log(selectedIcon);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
      }, 2000);
    });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleClear = () => {
    setInput("");
  };
  return (
    <Form>
      <TitleSection
        selectedIcon={selectedIcon}
        handleClear={handleClear}
        handleTitleChange={handleTitleChange}
        value={input}
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
});
export default AddAlimListForm;
