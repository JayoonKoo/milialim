import React from "react";
import styled from "styled-components";
import SVGBox from "../../atom/SVGBox";
import { CategoryName, HStack, NumberBox, Wrapper } from "./styled";

export interface CategoryProps {
  className?: string;
  title: string;
  count: number;
  color: string;
}

function Category({ className, title, color, count }: CategoryProps) {
  return (
    <Wrapper className={className}>
      <HStack>
        <SVGBox name="calendar" backgroundColor={color} />
        <NumberBox>
          <span>{count}</span>
        </NumberBox>
      </HStack>
      <CategoryName>{title}</CategoryName>
    </Wrapper>
  );
}

export default styled(Category)``;
