import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes/routing";
import { worker } from "./apis/handler";
import GlobalStyles from "./styles/global";
import LoadingStoreProvider from "./contexts/loading";
import IssueListStoreProvider from "./contexts/issueList";
import OneIssueStoreProvider from "./contexts/one-issue";

function App() {
  if (process.env.NODE_ENV === "development") {
    worker.start();
  }

  return (
    <IssueListStoreProvider>
      <LoadingStoreProvider>
        <OneIssueStoreProvider>
          <div className="App">
            <GlobalStyles />
            <RouterProvider router={router} />
          </div>
        </OneIssueStoreProvider>
      </LoadingStoreProvider>
    </IssueListStoreProvider>
  );
}

export default App;
