import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { addMyList, addMyListReq, ResMyList } from "../../../api/mylist";
import { IconType } from "../../atom/Icon/Icon";
import ColorsSection from "../ColorsSection";
import IconSection from "../IconSection";
import TitleSection from "../TitleSection";
import { Form } from "./styled";

export type AddAlimListFormHandler = {
  submit: () => Promise<ResMyList>;
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
          return await handleSubmit();
        },
      };
    },
    [input, selectedColor, selectedIcon]
  );

  useEffect(() => {
    setIsAble(input.length >= 1);
  }, [input]);

  const handleSubmit = () => {
    const req: addMyListReq = {
      color: selectedColor,
      icon: selectedIcon,
      title: input,
    };
    return addMyList(req);
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
