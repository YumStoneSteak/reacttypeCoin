import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./Root";
import Coins from "./routes/coin/Coins";
import Coin from "./routes/coin/Coin";
import Chart from "./routes/coin/ChartTab";
import Price from "./routes/coin/Price";
import NotFound from "./routes/coin/NotFound";
import ToDoList from "./routes/todo/ToDoContainer";

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
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
