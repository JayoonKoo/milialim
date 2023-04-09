import styled, { css } from "styled-components";
import rem from "../../../lib/Rem";
import Section from "../../atom/Section";
import SVGBox from "../../atom/SVGBox";

const margin = rem(15);
const height = `16.66% - ${margin}`;

export const Wrapper = styled(Section)`
  margin-bottom: ${rem(20)};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${SVGBox} {
    width: calc(${height});
    padding-bottom: calc(${height});
    position: relative;
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  & + & {
    margin-top: ${margin};
  }
`;

export const SVGWrapper = styled(SVGBox)<{ active?: boolean }>`
  width: calc(${height});
  padding-bottom: calc(${height});
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
  }
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
