import React from "react";
import { IconType } from "../../atom/Icon/Icon";
import Input from "../../atom/Input";
import Section from "../../atom/Section";
import { SVGWrapper } from "./styled";

export interface TitleSectionProps {
  value: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
  color: string;
  selectedIcon: IconType;
}

function TitleSection({
  value,
  handleClear,
  handleTitleChange,
  color,
  selectedIcon,
}: TitleSectionProps) {
  return (
    <Section>
      <SVGWrapper name={selectedIcon} backgroundColor={color} />
      <Input
        placeholder="목록 이름"
        value={value}
        name="title"
        onChange={handleTitleChange}
        onClickClear={handleClear}
      />
    </Section>
  );
}

export default TitleSection;
