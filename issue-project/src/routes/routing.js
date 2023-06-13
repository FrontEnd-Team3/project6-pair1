import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts";
import MainPage from "../components";
import Angular from "../components/Angular";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/angular",
        element: <Angular />,
      },
    ],
  },
]);

/* 기본값 */
export default router;
