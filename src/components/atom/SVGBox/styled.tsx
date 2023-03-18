import styled from "styled-components";
import rem from "../../../lib/Rem";

export const Wrapper = styled.div<{ background: string }>`
  background-color: ${(props) => props.background};
  border-radius: 50%;
  width: ${rem(30)};
  height: ${rem(30)};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: ${rem(17)};
    color: #f1f2f6;
  }
`;
