import React from "react";
import Section from "../../atom/Section";
import { Bottom, Color, ColorContainer, Top } from "./styled";

export interface ColorsSectionProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

function ColorsSection({
  selectedColor,
  setSelectedColor,
}: ColorsSectionProps) {
  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const color = e.currentTarget.getAttribute("color");
    if (!color) {
      return;
    }
    setSelectedColor(color);
  };

  return (
    <Section>
      <ColorContainer>
        <Top>
          {colorsTop.map((c, i) => (
            <Color
              onClick={handleClick}
              color={c}
              key={c}
              active={c === selectedColor}
            />
          ))}
        </Top>
        <Bottom>
          {colorsBottom.map((c, i) => (
            <Color
              onClick={handleClick}
              color={c}
              key={c}
              active={c === selectedColor}
            />
          ))}
        </Bottom>
      </ColorContainer>
    </Section>
  );
}

export const colorsTop = [
  "#ff4757",
  "#ffa502",
  "#eccc68",
  "#2ed573",
  "#70a1ff",
  "#1e90ff",
];

export const colorsBottom = [
  "#2f3542",
  "#ff6b81",
  "#ff7f50",
  "#7bed9f",
  "#ced6e0",
  "#3742fa",
];

export default ColorsSection;
