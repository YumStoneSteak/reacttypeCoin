import { Link } from "react-router-dom";
import styled from "styled-components";

const Navi = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0px;
  width: 100%;
  padding: 10px;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.bgColor};

  a:hover {
    color: ${(props) => props.theme.textColor};
  }
`;

const Nav = () => {
  return (
    <Navi>
      <Link to="/">Coins</Link>
    </Navi>
  );
};

export default Nav;
