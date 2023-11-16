import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import { ReactQueryDevtools } from "react-query/devtools";

function Root() {
  return (
    <>
      <Nav />
      <Outlet />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default Root;
