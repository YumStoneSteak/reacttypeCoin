import { DefaultTheme } from "styled-components/dist/types";

const commonStyles = {
  black: "black",
  cBorderColor: "#dadce0",
  cWarnRed: "rgb(217,48,37)",
  cLightColor: "whitesmoke",
  cDarkColor: "#2f3640",
  cTodoColor: "#ffbe89",
  cDoingColor: "lightblue",
  cDoneColor: "lightgreen",
};

export const lightTheme: DefaultTheme = {
  ...commonStyles,
  textColor: "#2f3640",
  bgColor: "whitesmoke",
  bgAccentColor: "#ffddc1",
  accentColor: "#FF9130",
  btnColor: "#fceadfac",
};

export const darkTheme: DefaultTheme = {
  ...commonStyles,
  textColor: "whitesmoke",
  bgColor: "rgb(34, 34, 34)",
  bgAccentColor: "rgb(59, 59, 59)",
  accentColor: "#ff7b4f",
  btnColor: "rgba(70, 70, 70, 0.493)",
};
