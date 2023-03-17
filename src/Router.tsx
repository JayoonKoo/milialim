import { createBrowserRouter } from "react-router-dom";
import Main from "./components/pages/MainPage";
import Root from "./components/pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Main />,
      },
    ],
  },
]);

export default router;
