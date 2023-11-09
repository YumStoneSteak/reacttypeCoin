import styled, { keyframes } from "styled-components";

const LoadingAnimation = () => {
  const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50%;

    div {
      margin-top: 20px;
    }
  `;

  const ani = keyframes`
from{
  transform: rotate(0deg);
  border-radius: 0px;
}
50%{
  border-radius: 25px;
}
to {  
  transform: rotate(360deg);
  border-radius: 0px;
}
`;

  const LoadingBox = styled.div`
    height: 50px;
    width: 50px;
    background-color: gray;
    animation: ${ani} 1s linear infinite;
  `;

  return (
    <LoaderContainer>
      <LoadingBox />
      <div>loading...</div>
    </LoaderContainer>
  );
};

export default LoadingAnimation;
