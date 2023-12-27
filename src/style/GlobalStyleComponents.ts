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

export const Title = styled.h1<{ category?: string }>`
  color: ${(props) => backgroundColor(props)};
  font-size: 48px;
  font-weight: bold;
`;

export const LoginFormContainer = styled.form`
  width: 25%;
  max-width: 400px;
  margin: auto;
  padding: 40px 50px;
  border: 2px solid #dadce0;
  border-radius: 4px;

  span {
    text-align: center;
  }
`;

export const FormButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  width: 100%;
`;

export const FormButton = styled.button`
  padding: 15px 20px;
  margin: 10px;
  border: 2px solid #dadce0;
  border-radius: 4px;
  font-size: 1.05rem;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.btnColor};

  &:hover {
    cursor: pointer;
    border-color: ${(props) => props.theme.accentColor};
    box-shadow: 0 0 5px ${(props) => props.theme.accentColor};
  }
`;

export const InputBox = styled.div<{ hasContent?: boolean; error?: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  input {
    box-sizing: border-box;
    width: 100%;
    border: 2px solid #dadce0;
    border-radius: 4px;
    padding: 10px;
    margin: 10px 10px 5px 10px;
    background-color: ${(props) => props.theme.bgColor};
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
      color: ${(props) => props.theme.accentColor};
      background-color: ${(props) => props.theme.bgColor};
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

export const Img = styled.img`
  width: 35px;
  height: 35px;
  margin: 0px 10px;
`;

export const Overview = styled.div<{ category?: string }>`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgAccentColor};
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  box-sizing: border-box;
  width: 100%;
`;

export const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;

  span:first-child {
    margin-bottom: 5px;
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

export const Description = styled.p`
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.bgAccentColor};
  padding: 20px 20px;
  border-radius: 10px;
`;

export const backgroundColor = (props: any) => {
  switch (props.category) {
    case "TO_DO":
      return props.theme.todoColor;
    case "DOING":
      return props.theme.doingColor;
    case "DONE":
      return props.theme.doneColor;
    default:
      return props.theme.accentColor;
  }
};
