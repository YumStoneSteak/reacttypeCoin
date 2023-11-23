import { Container } from "../../style/GlobalStyleComponents";
import CreateToDo from "../../components/todo/CreateToDo";
import ToDo from "../../components/todo/ToDo";


const ToDoContainer = () => {

  return (
    <Container>
      <CreateToDo/>
      <ToDo/>
    </Container>
  );
};

export default ToDoContainer;
