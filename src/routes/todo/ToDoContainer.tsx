import { Container } from "../../style/GlobalStyleComponents";
import CreateToDo from "../../components/todo/CreateToDo";
import ToDo from "../../components/todo/ToDo";
import { useRecoilValue } from "recoil";
import { toDoState } from "../../recoil/atom";
import IToDo from "../../interface/IToDo";

const ToDoContainer = () => {
  const toDos = useRecoilValue(toDoState);
  console.log('toDOs',toDos);
  return (
    <Container>
      <CreateToDo />
      <ToDo toDos={toDos} />
    </Container>
  );
};

export default ToDoContainer;
