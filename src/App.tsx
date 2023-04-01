import React from "react";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./lib/GlobalStyle";
import router from "./Router";

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <RouterProvider router={router} />
      </RecoilRoot>
    </>
  );
}

export default App;
