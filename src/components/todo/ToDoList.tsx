import styled from "styled-components";
import IToDo from "../../interface/IToDo";
import { Overview, OverviewItem } from "../../style/GlobalStyleComponents";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../../recoil/atom";

const ToDoBtnContainer = styled.div``;
const ToDoBtn = styled.button`
  font-size: small;
`;

const ToDoList = ({ toDos }: { toDos: IToDo[] }) => {
  const category = { TO_DO: "To Do", DOING: "Doing", DONE: "Done" };
  const { TO_DO, DOING, DONE } = category;

  const setToDos = useSetRecoilState(toDoState);

  const onCatBtn = () => {};
  return (
    <ul>
      {toDos.map((toDo: IToDo) => {
        const { text, id, category } = toDo;
        const date = new Date(id);
        return (
          <Overview>
            <OverviewItem>
              <div>{text}</div>
            </OverviewItem>
            <OverviewItem>
              <div>{date.toLocaleDateString()}</div>
              <div>{date.toLocaleTimeString()}</div>
              <div>{category}</div>
              <ToDoBtnContainer>
                <ToDoBtn onClick={onCatBtn}>{TO_DO}</ToDoBtn>
                <ToDoBtn onClick={onCatBtn}>{DOING}</ToDoBtn>
                <ToDoBtn onClick={onCatBtn}>{DONE}</ToDoBtn>
              </ToDoBtnContainer>
            </OverviewItem>
          </Overview>
        );
      })}
    </ul>
  );
};

export default ToDoList;
