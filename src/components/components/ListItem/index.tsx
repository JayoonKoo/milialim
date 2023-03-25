import React from "react";
import SVGBox from "../../atom/SVGBox";
import { TitleWrapper, Wrapper, NumberWrapper, Dvider } from "./styled";

export interface ListItemProps {
  className?: string;
  isLast?: boolean;
}

function ListItem({ className, isLast = false }: ListItemProps) {
  return (
    <Wrapper className={className}>
      <TitleWrapper>
        <SVGBox name="list" backgroundColor="#eccc68" />
        <span>미리알림</span>
      </TitleWrapper>
      <NumberWrapper>
        <span>5</span>
        <span>{">"}</span>
      </NumberWrapper>
      <Dvider isLast={isLast} />
    </Wrapper>
  );
}

export default ListItem;
