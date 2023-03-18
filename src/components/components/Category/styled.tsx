import styled from "styled-components";
import rem from "../../../lib/Rem";

export const Wrapper = styled.div`
  background-color: #57606f;
  border-radius: ${rem(4)};
  padding: ${rem(10)};
`;

export const HStack = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NumberBox = styled.div`
  span {
    font-size: ${rem(20)};
    font-weight: bold;
    color: #f1f2f6;
  }
`;

export const CategoryName = styled.h3`
  margin-top: ${rem(8)};
  font-weight: bold;
  color: #a4b0be;
`;
