import styled, { css, keyframes } from "styled-components";
import rem from "../../../lib/Rem";
import Button from "../../atom/Button";
import { Wrapper as HeaderWrapper } from "../Header/styled";

const open = keyframes`
	0% {
		top: 100vh;
	}

	100% {
		top: ${rem(40)};
	}
`;

const close = keyframes`
	0% {
		top: ${rem(40)};
	}

	100% {
		top: 100vh;
	}
`;

type WrapperProps = {
  isOpen: boolean;
};
export const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: ${rem(40)};
  background-color: #57606f;
  border-top-left-radius: ${rem(8)};
  border-top-right-radius: ${rem(8)};
  box-shadow: 1px -7px 9px -6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px -7px 9px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px -7px 9px -6px rgba(0, 0, 0, 0.75);
  overflow: hidden;
  overflow-y: auto;

  ${({ isOpen }) =>
    isOpen
      ? css`
          animation: ${open} 0.2s ease-in-out;
        `
      : css`
          animation: ${close} 0.2s ease-in-out;
        `}

  ${HeaderWrapper} {
    background-color: #57606f;
    position: relative;
    ${Button} {
      font-size: ${rem(16)};
    }
  }
`;
