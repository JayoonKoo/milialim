import React, { useEffect } from "react";
import useCategories from "../../../hooks/category/useCategories";
import Category from "../Category";
import ListItem from "../ListItem";
import { Categories, MyList, MyListSection, Wrapper } from "./styled";

function Main() {
  const { fetch, loading, categories, error } = useCategories();

  console.log(categories);

  useEffect(() => {
    fetch();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error...</div>;
  }

  return (
    <Wrapper>
      <Categories>
        {categories.map((c) => (
          <Category key={c.id} {...c} />
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
