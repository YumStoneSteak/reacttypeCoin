import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../recoil/atom";

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

const RightNavi = styled.div``;

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
      <LeftNavi>
        <Link to="/">Coins</Link>
        <Link to="/todo">To Do</Link>
      </LeftNavi>
      <RightNavi>
        <Link to="/signin">Sing In</Link>
        <Link to="/signup">Sing Up</Link>
        <Toggle onClick={toggleTheme}>
          {isDarkTheme ? "Light Mode" : "Dark Mode"}
        </Toggle>
      </RightNavi>
    </Navi>
  );
};

export default Nav;
