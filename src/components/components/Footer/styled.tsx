import styled from "styled-components";
import rem from "../../../lib/Rem";

export const Wrapper = styled.footer`
  height: ${rem(50)};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: #2f3542;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${rem(20)};
`;

export const Left = styled.div``;

export const Right = styled.div``;
