import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./Root";
import Coins from "./routes/coin/Coins";
import Coin from "./routes/coin/Coin";
import Chart from "./components/coin/ChartTab";
import Price from "./components/coin/Price";
import NotFound from "./routes/NotFound";
import ToDoList from "./routes/todo/ToDoContainer";
import SignIn from "./routes/sign/SignIn";
import SignUp from "./routes/sign/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: ":coinId/",
        element: <Coin />,
        children: [
          { path: "", element: <Navigate to="chart" /> },
          { path: "chart", element: <Chart /> },
          { path: "price", element: <Price /> },
        ],
      },
      {
        path: "todo/",
        element: <ToDoList />,
      },
      {
        path: "signin/",
        element: <SignIn />,
      },
      {
        path: "signup/",
        element: <SignUp />,
      },
      {
        path: "findaccount",
        element: <NotFound />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
