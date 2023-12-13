import React from "react";
import styled, { keyframes } from "styled-components";

export const fadeIn = () => keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  max-width: 700px;
  margin: 0px auto 0px auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
  font-weight: bold;
`;

const GlobalStyleComponents = () => {
  return <div></div>;
};

export default GlobalStyleComponents;
