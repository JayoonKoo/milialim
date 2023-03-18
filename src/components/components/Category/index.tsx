import React from "react";
import styled from "styled-components";
import SVGBox from "../../atom/SVGBox";
import { CategoryName, HStack, NumberBox, Wrapper } from "./styled";

export interface CategoryProps {
  className?: string;
}

function Category({ className }: CategoryProps) {
  return (
    <Wrapper className={className}>
      <HStack>
        <SVGBox name="calendar" />
        <NumberBox>
          <span>1</span>
        </NumberBox>
      </HStack>
      <CategoryName>오늘</CategoryName>
    </Wrapper>
  );
}

export default styled(Category)``;
