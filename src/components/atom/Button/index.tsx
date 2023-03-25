import React from "react";
import Icon, { IconType } from "../Icon/Icon";
import { Wrapper } from "./styled";

export type ButtonProps = {
  icon?: IconType;
  title: string;
  color?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ icon, title, color = "#1e90ff" }: ButtonProps) {
  return (
    <Wrapper color={color}>
      {icon && <Icon name={icon} />}
      <span>{title}</span>
    </Wrapper>
  );
}

export default Button;
