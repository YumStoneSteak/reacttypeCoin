import React from "react";
import { keyframes } from "styled-components";

export const fadeIn = () => keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const GlobalStyleComponents = () => {
  return <div></div>;
};

export default GlobalStyleComponents;
