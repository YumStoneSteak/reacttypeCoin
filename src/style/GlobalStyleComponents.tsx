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
  margin: 50px auto 0px auto;
  padding: 0px 10px;
`;

const GlobalStyleComponents = () => {
  return <div></div>;
};

export default GlobalStyleComponents;
