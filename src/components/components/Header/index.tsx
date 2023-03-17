import React from "react";
import Icon from "../../atom/Icon/Icon";
import { Center, Left, Right, Wrapper } from "./styled";

function Header() {
  return (
    <Wrapper>
      <Left />
      <Center></Center>
      <Right>
        <Icon name="info" />
      </Right>
    </Wrapper>
  );
}

export default Header;
