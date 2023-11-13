import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const Nav = styled.nav`
    width: 100%;
    position: fixed;
    top: 0px;
    padding: 10px;
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.bgColor};
    a:hover {
      color: ${(props) => props.theme.textColor};
    }
  `;
  return (
    <Nav>
      <Link to="/">Coins</Link>
    </Nav>
  );
};

export default Nav;
