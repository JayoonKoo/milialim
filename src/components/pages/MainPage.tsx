import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Main from "../components/Main";

function MainPage() {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
`;

export default MainPage;
