import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import { ReactQueryDevtools } from "react-query/devtools";
import { lightTheme, darkTheme } from "./style/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./recoil/atom";

function Root() {
  const isDarkMode = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Nav />
        <Outlet />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default Root;
