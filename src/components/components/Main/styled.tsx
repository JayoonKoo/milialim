import styled from "styled-components";
import rem from "../../../lib/Rem";
import Category from "../Category";

export const Wrapper = styled.main`
  background-color: #2f3542;
  height: 100%;
`;

export const Categories = styled.section`
  padding-top: ${rem(20)};
  padding-left: ${rem(20)};
  padding-right: ${rem(20)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${Category} {
    flex-basis: calc(50% - 0.3125rem);
    margin-bottom: ${rem(10)};
  }

  ${Category} + ${Category} {
  }
`;

export const MyList = styled.section``;
