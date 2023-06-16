import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes/routing";
// import { worker } from "./apis/handler";
import GlobalStyles from "./styles/global";
import LoadingStoreProvider from "./contexts/loading";
import IssueListStoreProvider from "./contexts/issueList";
import OneIssueStoreProvider from "./contexts/one-issue";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  // if (process.env.NODE_ENV === "development") {
  //   worker.start();
  // }

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
