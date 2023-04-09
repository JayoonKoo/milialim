import styled, { css } from "styled-components";
import rem from "../../../lib/Rem";

const margin = rem(15);
const height = `16.66% - ${margin}`;

export const Color = styled.li<{ color: string; active?: boolean }>`
  ${({ color }) =>
    css`
      background-color: ${color};
    `}

  padding-bottom: calc(${height});
  border-radius: 50%;
  position: relative;

  ${({ active }) =>
    active &&
    css`
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        border: ${rem(3)} solid #a4b0be;
        padding: ${rem(3)};
      }
    `}
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;

  ${Color} {
    flex-basis: calc(${height});
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${margin};

  ${Color} {
    flex-basis: calc(${height});
  }
`;

export const ColorContainer = styled.ul`
  width: 100%;
`;
