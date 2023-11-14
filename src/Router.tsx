import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Nav from "./components/Nav";
import Chart from "./routes/Chart";
import Price from "./routes/Price";
import NotFound from "./routes/NotFound";
import Root from "./Root";

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
          { path: "chart", element: <Chart /> },
          { path: "price", element: <Price /> },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
