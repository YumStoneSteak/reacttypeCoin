import CreateToDo from "../../components/todo/CreateToDo";
import styled from "styled-components";
import ToDoList from "../../components/todo/ToDoList";
import { Helmet } from "react-helmet";
import { Header, Title } from "../../style/GlobalStyleComponents";

const ToDoContainer = styled.div`
  justify-content: center;
  max-width: 700px;
  margin: 0px auto 0px auto;
`;

const ToDo = () => {
  return (
    <>
      <Helmet>
        <title>To Do</title>
      </Helmet>
      <Header>
        <Title>Memo To Do</Title>
      </Header>
      <ToDoContainer>
        <CreateToDo />
        <ToDoList />
      </ToDoContainer>
    </>
  );
};

export default ToDo;
