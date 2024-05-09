import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom, localeState } from "../recoil/atom";
import { ILocale } from "../interface/Icommon";

export const NavMargin = styled.div`
  display: block;
  width: 100%;
  height: 45px;
`;

const Navi = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  top: 0px;
  font-size: large;
  width: 100%;
  height: 25px;
  padding: 10px;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.bgColor};
  a {
    padding: 10px;
    margin: auto 0;
  }
  a:hover {
    color: ${(props) => props.theme.textColor};
  }
`;

const LeftNavi = styled.div``;

const RightNavi = styled.div`
  margin-right: 20px;
`;

const ThemeToggle = styled.button`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  height: 25px;
  border-radius: 10px;
  float: right;
  margin: 0px 8px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.bgColor};

  &:hover {
    cursor: pointer;
  }
`;

const LocalToggle = styled.button`
  background-color: ${(props) => props.theme.accentColor};
  height: 25px;
  border-radius: 10px;
  float: right;
  margin: 0px 8px;
  border: none;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.bgColor};

  &:hover {
    cursor: pointer;
  }
`;

const Nav = () => {
  const [isDarkTheme, setDarkTheme] = useRecoilState(isDarkAtom);
  const [locale, setLocale] = useRecoilState(localeState);

  const toggleTheme = () => setDarkTheme((prev) => !prev);
  const toggleLocale = () =>
    setLocale((prev: ILocale) => {
      switch (prev) {
        case "ko":
          return "en";
        case "en":
          return "ko";
      }
    });

  return (
    <Navi>
      <LeftNavi>
        <Link to="/">Coins</Link>
        <Link to="/todo">To Do</Link>
        <Link to="/memo">Memo</Link>
      </LeftNavi>
      <RightNavi>
        <Link to="/signin">Sing In</Link>
        <Link to="/signup">Sing Up</Link>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkTheme ? "Light Mode" : "Dark Mode"}
        </ThemeToggle>
        <LocalToggle onClick={toggleLocale}>
          {locale === "ko" ? "ENG" : "KOR"}
        </LocalToggle>
      </RightNavi>
    </Navi>
  );
};

export default Nav;
