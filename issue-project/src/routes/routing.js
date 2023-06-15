import { createBrowserRouter } from "react-router-dom";
import IssueDetailPage from "../pages/issue-detail";

import IssueMainPage from "../pages/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IssueMainPage />,
  },
  {
    path: "/detail",
    element: <IssueDetailPage />,
  },
]);

export default router;
