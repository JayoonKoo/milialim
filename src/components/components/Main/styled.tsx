import styled from "styled-components";
import rem from "../../../lib/Rem";
import Category from "../Category";

export const Wrapper = styled.main`
  background-color: #2f3542;
  height: 100%;
  padding-left: ${rem(20)};
  padding-right: ${rem(20)};
`;

export const Categories = styled.section`
  padding-top: ${rem(20)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${Category} {
    flex-basis: calc(50% - 0.3125rem);
    margin-bottom: ${rem(10)};
  }
`;

export const MyListSection = styled.section`
  padding-top: ${rem(10)};
  > div span {
    color: #f1f2f6;
    font-size: ${rem(20)};
    font-weight: bold;
  }
`;

export const MyList = styled.ul`
  margin-top: ${rem(10)};
  background-color: #57606f;
  border-radius: ${rem(8)};
  overflow: hidden;
`;
