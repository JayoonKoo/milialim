import styled from "styled-components";
import rem from "../../../lib/Rem";

export const Wrapper = styled.header`
  background-color: #2f3542;
  height: ${rem(50)};
  display: flex;
  justify-content: space-between;
  padding: 0 ${rem(20)};
  position: fixed;
  left: 0;
  right: 0;
  z-index: 100;
`;

export const Left = styled.div``;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-25%, -25%);
  color: white;
  font-size: ${rem(20)};
`;

export const Right = styled.div`
  display: flex;
  svg {
    width: ${rem(25)};
    color: #1e90ff;
    transition: all 0.2s;

    &:active {
      filter: opacity(0.4);
    }
  }
`;
