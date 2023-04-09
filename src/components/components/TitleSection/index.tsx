import React from "react";
import Input from "../../atom/Input";
import Section from "../../atom/Section";
import { SVGWrapper } from "./styled";

export interface TitleSectionProps {
  value: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
  color: string;
}

function TitleSection({
  value,
  handleClear,
  handleTitleChange,
  color,
}: TitleSectionProps) {
  return (
    <Section>
      <SVGWrapper name="list" backgroundColor={color} />
      <Input
        placeholder="목록 이름"
        value={value}
        onChange={handleTitleChange}
        onClickClear={handleClear}
      />
    </Section>
  );
}

export default TitleSection;
