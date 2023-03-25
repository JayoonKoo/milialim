import React from "react";
import Button from "../../atom/Button";
import { Left, Right, Wrapper } from "./styled";

function Footer() {
  return (
    <Wrapper>
      <Left>
        <Button title="새로운 미리알림" icon="plus" />
      </Left>
      <Right>
        <Button title="목록 추가" />
      </Right>
    </Wrapper>
  );
}

export default Footer;
