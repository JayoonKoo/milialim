import React from "react";
import styled from "styled-components";
import Icon, { IconType } from "../Icon/Icon";
import { Wrapper } from "./styled";

export interface SVGBoxProps {
  name: IconType;
  backgroundColor?: string;
	className?: string;
}

function SVGBox({ name, backgroundColor = "#1e90ff", className }: SVGBoxProps) {
  return (
    <Wrapper background={backgroundColor} className={className}>
      <Icon name={name} />
    </Wrapper>
  );
}

export default styled(SVGBox)``;
