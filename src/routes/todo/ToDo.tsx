import CreateToDo from "../../components/todo/CreateToDo";
import { useRecoilValue } from "recoil";
import { toDoState } from "../../recoil/atom";
import styled from "styled-components";
import ToDoList from "../../components/todo/ToDoList";
import { Helmet } from "react-helmet";
import { Header, Overview, Title } from "../../style/GlobalStyleComponents";

const ToDoContainer = styled.div`
  justify-content: center;
  max-width: 700px;
  margin: 0px auto 0px auto;
`;

const ToDo = () => {
  const toDos = useRecoilValue(toDoState);
  console.log("toDOs", toDos);
  return (
    <>
      <Helmet>
        <title>To Do</title>
      </Helmet>

      <Header>
        <Title>To Do</Title>
      </Header>
      <ToDoContainer>
        <CreateToDo />
        <ToDoList toDos={toDos} />
      </ToDoContainer>
    </>
  );
};

export default ToDo;
