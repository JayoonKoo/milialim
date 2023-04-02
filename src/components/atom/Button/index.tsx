import React from "react";
import styled from "styled-components";
import Icon, { IconType } from "../Icon/Icon";
import { Wrapper } from "./styled";

export type ButtonProps = {
  icon?: IconType;
  title: string;
  color?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  icon,
  title,
  color = "#1e90ff",
  className,
  ...rest
}: ButtonProps) {
  return (
    <Wrapper
      disabled={rest.disabled}
      color={color}
      className={className}
      {...rest}
    >
      {icon && <Icon name={icon} />}
      <span>{title}</span>
    </Wrapper>
  );
}

export default styled(Button)``;
