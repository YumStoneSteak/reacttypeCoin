import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../recoil/atom";

const Navi = styled.nav`
  display: block;
  position: fixed;
  z-index: 100;
  top: 0px;
  font-size: large;
  width: 100%;
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

const Toggle = styled.button`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  height: 25px;
  border-radius: 10px;
  float: right;
  margin-right: 20px;
  border-width: 3px;
  border-style: solid;
  border-color: ${(props) => props.theme.bgColor};
  vertical-align: center;

  &:hover {
    cursor: grab;
  }
`;

const Nav = () => {
  const [isDarkTheme, setDarkTheme] = useRecoilState(isDarkAtom);
  const toggleTheme = () => setDarkTheme((prev) => !prev);
  return (
    <Navi>
      <Link to="/">Coins</Link>
      <Link to="/todo">To Do</Link>
      <Toggle onClick={toggleTheme}>
        {isDarkTheme ? "Light Mode" : "Dark Mode"}
      </Toggle>
    </Navi>
  );
};

export default Nav;
