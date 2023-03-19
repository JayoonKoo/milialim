import React from "react";
import Category from "../Category";
import ListItem from "../ListItem";
import { Categories, MyList, MyListSection, Wrapper } from "./styled";

function Main() {
  return (
    <Wrapper>
      <Categories>
        {Array.from({ length: 5 }).map((_, i) => (
          <Category key={i} />
        ))}
      </Categories>
      <MyListSection>
        <div>
          <span>나의목록</span>
        </div>
        <MyList>
          {Array.from({ length: 10 }).map((_, i) => (
            <ListItem key={i} isLast={i === 9} />
          ))}
        </MyList>
      </MyListSection>
    </Wrapper>
  );
}

export default Main;
