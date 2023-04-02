import React, { ReactNode, Fragment } from "react";
import { Center, Left, Right, Wrapper } from "./styled";

interface HeaderProps {
  title?: string;
  left?: ReactNode[];
  right?: ReactNode[];
  classNames?: string;
}

function Header({ title, left, right, classNames }: HeaderProps) {
  return (
    <Wrapper className={classNames}>
      <Left>
        {left?.map((l, i) => (
          <Fragment key={i}>{l}</Fragment>
        ))}
      </Left>
      <Center>{title}</Center>
      <Right>
        {right?.map((r, i) => (
          <Fragment key={i}>{r}</Fragment>
        ))}
      </Right>
    </Wrapper>
  );
}

export default Header;
