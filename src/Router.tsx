import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Root from "./components/pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

export default router;
