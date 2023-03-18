import React from "react";
import Icon from "../../atom/Icon/Icon";
import { CategoryName, HStack, NumberBox, SVGBox, Wrapper } from "./styled";

function Category() {
  return (
    <Wrapper>
      <HStack>
        <SVGBox>
          <Icon name="calendar" />
        </SVGBox>
        <NumberBox>
          <span>1</span>
        </NumberBox>
      </HStack>
      <CategoryName>오늘</CategoryName>
    </Wrapper>
  );
}

export default Category;
