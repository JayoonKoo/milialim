import React from "react";
import styled from "styled-components";
import Icon, { IconType } from "../Icon/Icon";
import { Wrapper } from "./styled";

export type SVGBoxProps = {
  name: IconType;
  backgroundColor?: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

function SVGBox({
  name,
  backgroundColor = "#1e90ff",
  className,
  ...rest
}: SVGBoxProps) {
  return (
    <Wrapper background={backgroundColor} className={className} {...rest}>
      <Icon name={name} />
    </Wrapper>
  );
}

export default styled(SVGBox)``;
