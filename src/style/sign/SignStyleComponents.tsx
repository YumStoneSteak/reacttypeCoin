import styled from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

export const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

export const FormContainer = styled.form`
  width: 25%;
  max-width: 400px;
  margin: auto;
  padding: 40px 50px;
  border: 2px solid #dadce0;
  border-radius: 4px;

  button {
    width: 20%;
    padding: 10px;
    margin: 10px;
    border: 2px solid #dadce0;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
    }
  }

  span {
    text-align: center;
  }
`;

export const InputBox = styled.div<{ hasContent: boolean; error: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  input {
    box-sizing: border-box;
    width: 100%;
    border: 2px solid #dadce0;
    border-radius: 4px;
    padding: 10px;
    margin: 10px 10px 5px 10px;
    background-color: transparent;
    color: ${(props) => props.theme.textColor};
    transition: all 300ms ease;

    ${(props) =>
      props.error &&
      `
      outline: none;
      border-color: ${props.theme.warnRed};
      box-shadow: 0 0 5px ${props.theme.warnRed};
    `}

    &:focus {
      outline: none;
      border-color: ${(props) =>
        props.error ? props.theme.warnRed : props.theme.accentColor};
      box-shadow: 0 0 5px
        ${(props) =>
          props.error ? props.theme.warnRed : props.theme.accentColor};
    }
    &:focus + label {
      transform: translate(10px, 0px);
    }
  }

  label {
    pointer-events: none;
    position: absolute;
    left: 0px;
    top: 0px;
    padding: 0 3px;
    border: 2px solid ${(props) => props.theme.bgColor};
    border-radius: 4px;
    color: ${(props) => props.theme.textColor};
    font-size: 14px;
    font-weight: normal;
    text-align: center;
    transition: all 0.7s cubic-bezier(0.33, 1, 0.68, 1);
    transition: transform 0.2s ease;
    background-color: ${(props) => props.theme.bgColor};
    transform: translate(10px, 20px);

    ${(props) =>
      props.hasContent &&
      `
      transform: translate(10px, 0px);
    `}
  }

  span {
    text-align: center;
    width: 200%;
    height: 16px;
    margin-bottom: 5px;
    font-size: 0.9rem;
    color: ${(props) => props.theme.warnRed};
  }
`;
