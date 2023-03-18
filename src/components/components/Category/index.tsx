import React from "react";
import SVGBox from "../../atom/SVGBox";
import { CategoryName, HStack, NumberBox, Wrapper } from "./styled";

function Category() {
  return (
    <Wrapper>
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

export default Category;
