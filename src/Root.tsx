import { Outlet } from "react-router-dom";
import Nav, { NavMargin } from "./components/Nav";
import { ReactQueryDevtools } from "react-query/devtools";
import { lightTheme, darkTheme } from "./style/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { useRecoilState, useRecoilValue } from "recoil";
import { isDarkAtom, localeState } from "./recoil/atom";
import { IntlProvider } from "react-intl";
import { en } from "./locale/en";
import { ko } from "./locale/ko";
import { ILocale } from "./interface/Icommon";
import { useEffect } from "react";
function Root() {
  const isDarkMode = useRecoilValue(isDarkAtom);
  const [locale, setLocale] = useRecoilState<ILocale>(localeState);

  useEffect(() => {
    const userLocale = navigator.language.substring(0, 2) ?? "ko";

    setLocale(userLocale as ILocale);
    console.log("first locale", locale);
  }, []);

  const messages = { en: en, ko: ko }[locale];

  return (
    <IntlProvider locale={locale} messages={messages}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Nav />
        <NavMargin />
        <Outlet />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </IntlProvider>
  );
}

export default Root;
