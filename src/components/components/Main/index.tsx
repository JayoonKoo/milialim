import React from "react";
import Category from "../Category";
import { Categories, Wrapper } from "./styled";

function Main() {
  return (
    <Wrapper>
      <Categories>
        {Array.from({ length: 5 }).map((_, i) => (
          <Category key={i} />
        ))}
      </Categories>
    </Wrapper>
  );
}

export default Main;
