import styled from "styled-components";
import rem from "../../../lib/Rem";

export const Wrapper = styled.div`
  background-color: rgba(164, 176, 190, 0.482);
  border-radius: ${rem(8)};
  overflow: hidden;
  width: 100%;
  display: flex;
  padding: 0 ${rem(10)};

  div {
    display: flex;
    align-items: center;
    svg {
      width: ${rem(25)};
      color: #a4b0be;
    }
  }
`;

export const Content = styled.input`
  text-align: center;
  width: 100%;
  font-size: ${rem(17)};
  color: #2f3542;
`;
