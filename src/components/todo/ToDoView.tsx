import styled from "styled-components";
import IToDo from "../../interface/IToDo";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toDoSelector, toDoState } from "../../recoil/atom";
import { backgroundColor } from "../../style/GlobalStyleComponents";
import { useIntl } from "react-intl";

const Overview = styled.div<{ category: string }>`
  display: flex;
  justify-content: space-between;
  color: ${(props) => textColor(props)};
  background-color: ${(props) => backgroundColor(props)};
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  box-sizing: border-box;
  width: 100%;
`;

const textColor = (props: any) => {
  switch (props.category) {
    case "TO_DO":
      return props.theme.textColor;
    case "DOING":
      return props.theme.cDarkColor;
    case "DONE":
      return props.theme.cDarkColor;
  }
};

const ToDoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    padding: 3px;
  }
`;
const ToDoBtnContainer = styled.div``;
const ToDoBtn = styled.button<{ category: string }>`
  padding: 5px;
  margin: 3px;
  border: 2px solid ${(props) => props.theme.cBorderColor};
  border-radius: 4px;
  font-size: 1.05rem;
  color: ${(props) => textColor(props)};
  background-color: ${(props) => backgroundColor(props)};

  &:hover {
    cursor: pointer;
    border-color: ${(props) => props.theme.accentColor};
    box-shadow: 0 0 5px ${(props) => props.theme.accentColor};
  }
`;

const DeleteBtn = styled.button`
  padding: 5px;
  margin: 3px;
  border: 2px solid ${(props) => props.theme.cBorderColor};
  border-radius: 4px;
  font-size: 1.05rem;
  color: ${(props) => textColor(props)};
  background-color: ${(props) => backgroundColor(props)};

  &:hover {
    cursor: pointer;
    border-color: ${(props) => props.theme.accentColor};
    box-shadow: 0 0 5px ${(props) => props.theme.accentColor};
  }
`;

const ToDoView = ({ text, id, category, index }: IToDo & { index: number }) => {
  const { formatMessage: msg } = useIntl();
  const categoryId = ["TO_DO", "DOING", "DONE"];
  const catName: { [key: string]: string } = {
    TO_DO: "todo",
    DOING: "doing",
    DONE: "done",
  };
  const setToDos = useSetRecoilState(toDoState);

  const date = new Date(id);
  const onCatBtn = (id: number, cat: IToDo["category"]) => {
    setToDos((prev) =>
      prev.map((old) => {
        if (old.id === id) {
          return { ...old, category: cat };
        }
        return old;
      })
    );
  };

  const onDelete = (id: number) => {
    setToDos(
      (prev: IToDo[]) => prev.filter((todo) => todo.id !== id) as IToDo[]
    );
  };

  return (
    <Overview key={id} category={category}>
      <ToDoItem>
        <div>
          {index}. {text}
        </div>
      </ToDoItem>
      <ToDoItem>
        <div>{date.toLocaleDateString()}</div>
        <div>{date.toLocaleTimeString()}</div>
        <ToDoBtnContainer>
          {categoryId.map(
            (cat) =>
              category !== cat && (
                <ToDoBtn
                  onClick={() => onCatBtn(id, cat as IToDo["category"])}
                  key={cat}
                  category={cat}
                >
                  {msg({ id: catName[cat] })}
                </ToDoBtn>
              )
          )}
          <DeleteBtn onClick={() => onDelete(id)}>
            {msg({ id: "delete" })}
          </DeleteBtn>
        </ToDoBtnContainer>
      </ToDoItem>
    </Overview>
  );
};

export default ToDoView;
