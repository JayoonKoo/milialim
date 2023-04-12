import React from "react";
import { ResMyList } from "../../../api/mylist";
import SVGBox from "../../atom/SVGBox";
import { TitleWrapper, Wrapper, NumberWrapper, Dvider } from "./styled";

export interface ListItemProps {
  className?: string;
  isLast?: boolean;
  listItem: ResMyList;
}

function ListItem({ className, isLast = false, listItem }: ListItemProps) {
  return (
    <Wrapper className={className}>
      <TitleWrapper>
        <SVGBox name={listItem.icon} backgroundColor={listItem.color} />
        <span>{listItem.title}</span>
      </TitleWrapper>
      <NumberWrapper>
        <span>{listItem.count}</span>
        <span>{">"}</span>
      </NumberWrapper>
      <Dvider isLast={isLast} />
    </Wrapper>
  );
}

export default ListItem;
