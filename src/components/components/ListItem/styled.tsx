import styled, { css } from "styled-components";
import rem from "../../../lib/Rem";

export const Wrapper = styled.li`
  padding: ${rem(12)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: #57606f;
  transition: all 0.2s;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: ${rem(10)};
    color: #f1f2f6;
    font-size: ${rem(15)};
  }
`;

export const NumberWrapper = styled.div`
  color: #a4b0be;
  span + span {
    margin-left: ${rem(5)};
  }
`;

export const Dvider = styled.div<{ isLast?: boolean }>`
  position: absolute;
  border-top: ${rem(1)} solid #747d8c;
  height: ${rem(1)};
  bottom: 0;
  left: ${rem(55)};
  right: ${rem(55)};

  ${({ isLast }) =>
    isLast &&
    css`
      display: none;
    `}
`;
