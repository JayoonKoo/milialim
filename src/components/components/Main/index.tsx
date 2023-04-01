import React, { useEffect } from "react";
import useCategories from "../../../hooks/category/useCategories";
import useMyList from "../../../hooks/category/useMyList";
import Category from "../Category";
import ListItem from "../ListItem";
import { Categories, MyList, MyListSection, Wrapper } from "./styled";

function Main() {
  const { fetch, loading, categories, error } = useCategories();
  const {
    fetch: fetchMyList,
    loading: myListLoading,
    error: myListError,
    myList,
  } = useMyList();

  useEffect(() => {
    fetch();
    fetchMyList();
  }, []);

  const myListLastIndex = myList.length - 1;

  if (loading || myListLoading) {
    return <div>loading...</div>;
  }

  if (error || myListError) {
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
          {myList.map((ml, i) => (
            <ListItem key={ml.id} isLast={i === myListLastIndex} />
          ))}
        </MyList>
      </MyListSection>
    </Wrapper>
  );
}

export default Main;
