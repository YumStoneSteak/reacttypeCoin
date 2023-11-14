import styled, { css, keyframes } from "styled-components";

const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);

  div {
    margin-top: 20px;
  }
`;

// props를 받아 keyframes를 생성하는 함수
const Animation = (accentColor: string) => keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 1;
    background-color: gray;
    border-radius: 0px;
  }
  50% {
    transform: rotate(180deg);
    opacity: 0.5;
    background-color: ${accentColor};
    border-radius: 25px;
  }
  100% {
    transform: rotate(360deg);
    opacity: 1;
    background-color: gray;
    border-radius: 0px;
  }
`;

// props.theme.accentColor를 사용하여 애니메이션을 생성
const LoadingBox = styled.div`
  height: 50px;
  width: 50px;
  animation: ${(props) =>
    css`
      ${Animation(props.theme.accentColor)} 1s linear infinite
    `};
`;

const LoadingAnimation = ({ msg }: { msg: string }) => {
  return (
    <LoaderContainer>
      <LoadingBox />
      <div>{msg}</div>
    </LoaderContainer>
  );
};

export default LoadingAnimation;
