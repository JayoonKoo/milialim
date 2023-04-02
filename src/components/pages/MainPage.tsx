import React from "react";
import styled from "styled-components";
import Icon from "../atom/Icon/Icon";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

function MainPage() {
  return (
    <Wrapper>
      <Header right={[<Icon name="info" />]} />
      <Main />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  position: relative;
`;

export default MainPage;
