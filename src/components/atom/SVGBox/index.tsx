import React from "react";
import Icon, { IconType } from "../Icon/Icon";
import { Wrapper } from "./styled";

export interface SVGBoxProps {
  name: IconType;
  backgroundColor?: string;
}

function SVGBox({ name, backgroundColor = "#1e90ff" }: SVGBoxProps) {
  return (
    <Wrapper background={backgroundColor}>
      <Icon name={name} />
    </Wrapper>
  );
}

export default SVGBox;
