import "../styles/App.css";
import "../styles/Main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import component
import Main from "./Main";
import Quiz from "./Quiz";
import Result from "./Result";

// React router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/quiz",
    element: <Quiz></Quiz>,
  },
  {
    path: "/result",
    element: <Result></Result>,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
