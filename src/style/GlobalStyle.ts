import { createGlobalStyle, css } from "styled-components";

export const reset = css`
  /* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

  font-family: "Source Sans 3", sans-serif;
  * {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  menu,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    line-height: 1;
    transition: background-color 0.7s cubic-bezier(0.33, 1, 0.68, 1);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  a,
  button {
    transition: all 0.3ms ease;
  }

  menu ol,
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }

  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* 스크롤 커스텀 */
  ::-webkit-scrollbar {
    transition: all 0.3s linear;
  }
  ::-webkit-scrollbar:vertical {
    width: 4px;
  }
  ::-webkit-scrollbar:horizontal {
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
  ::-webkit-scrollbar-thumb {
    background: #808080;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #404040;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #808080;
  }
  ::-webkit-scrollbar-button {
    display: none;
  }
`;

export default createGlobalStyle`${reset}`;
