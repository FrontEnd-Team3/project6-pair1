import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes/routing";
import { worker } from "./apis/handler";
import GlobalStyles from "./styles/global";

function App() {
  if (process.env.NODE_ENV === "development") {
    worker.start();
  }
  return (
    <div className="App">
      <GlobalStyles />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
