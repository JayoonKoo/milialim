import React from "react";
import { IconType } from "../../atom/Icon/Icon";
import { Wrapper, Row, SVGWrapper } from "./styled";

export interface IconSectionProps {
  selectedIcon: IconType;
  setSelectedIcon: (icon: IconType) => void;
}

function IconSection({ selectedIcon, setSelectedIcon }: IconSectionProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const name = e.currentTarget.dataset["iconName"];
    if (!name) {
      return;
    }

    setSelectedIcon(name as IconType);
  };

  return (
    <Wrapper>
      {Array.from({
        length: Math.ceil(icons.length / COLUMN_COUNT),
      }).map((_, rowIndex) => {
        const startIndex = rowIndex * COLUMN_COUNT;
        return (
          <Row key={rowIndex}>
            {Array.from({ length: 6 }).map((_, i) => {
              const currentIndex = startIndex + i;
              if (currentIndex > icons.length - 1) {
                return null;
              }

              const icon = icons[startIndex + i];
              return (
                <SVGWrapper
                  onClick={handleClick}
                  data-icon-name={icon}
                  backgroundColor="#57606f"
                  name={icon}
                  key={icon + i}
                  active={icon === selectedIcon}
                />
              );
            })}
          </Row>
        );
      })}
    </Wrapper>
  );
}

const COLUMN_COUNT = 6;

const icons: IconType[] = [
  "list",
  "body",
  "heart",
  "pencil",
  "stack",
  "quote",
  "calendar",
];

export default IconSection;
