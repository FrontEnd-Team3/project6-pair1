import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routing";
import { worker } from "./apis/handler";

function App() {
  if (process.env.NODE_ENV === "development") {
    worker.start();
  }
  return <RouterProvider router={router} />;
}

export default App;
