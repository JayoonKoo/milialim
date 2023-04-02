import styled, { css } from "styled-components";
import rem from "../../../lib/Rem";
import Icon from "../Icon/Icon";

export const Wrapper = styled.button<{ color: string; disabled?: boolean }>`
  ${({ color }) =>
    css`
      color: ${color};
    `}

  display: flex;
  align-items: center;
  transition: all 0.2s;

  span {
    padding-top: ${rem(3)};
  }

  ${Icon} {
    width: ${rem(21)};
    margin-right: ${rem(8)};
  }

  &:active {
    filter: opacity(0.4);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: #747d8c;
      &:active {
        filter: none;
      }
    `}
`;
