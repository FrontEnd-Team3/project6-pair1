import { createBrowserRouter } from "react-router-dom";
import IssueDetailPage from "../pages/issue-detail";

import IssueMainPage from "../pages/main";
import IssueDetailPage from "../pages/issue-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IssueMainPage />,
  },
  {
    path: "/detail/:id",
    element: <IssueDetailPage />,
  },
]);

export default router;
