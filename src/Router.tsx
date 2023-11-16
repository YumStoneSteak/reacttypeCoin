import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./Root";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Chart from "./routes/ChartTab";
import Price from "./routes/Price";
import NotFound from "./routes/NotFound";

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
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
