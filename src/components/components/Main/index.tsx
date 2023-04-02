import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { modalState } from "../../../atoms/uiState";
import useCategories from "../../../hooks/useCategories";
import useMyList from "../../../hooks/useMyList";
import AddAlimListItemPopUp from "../../AddAlimListItemPopUp";
import PopUp from "../../atom/PopUp";
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
  const { addListItem: isOpenAddListItem } = useRecoilValue(modalState);

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
      {isOpenAddListItem && <AddAlimListItemPopUp />}
    </Wrapper>
  );
}

export default Main;
