import React, { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import { isEmpty } from "../../../lib/utiles";
import Icon from "../Icon/Icon";
import { Content, Wrapper } from "./styled";

export type InputProps = {
  className?: string;
  onClickClear?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, className, onClickClear, onChange, ...rest }, ref) => {
    const [showXIcon, setShowXIcon] = useState(false);

    useEffect(() => {
      if (isEmpty(value)) {
        setShowXIcon(false);
      } else {
        setShowXIcon(true);
      }
    }, [value]);

    return (
      <Wrapper className={className}>
        <Content {...rest} ref={ref} value={value} onChange={onChange} />
        {showXIcon && (
          <div onClick={onClickClear}>
            <Icon name="xmark" />
          </div>
        )}
      </Wrapper>
    );
  }
);

export default styled(Input)``;
