import { useRecoilState, useRecoilValue } from "recoil";
import IToDo from "../../interface/IToDo";
import { useForm } from "react-hook-form";
import { toDoState } from "../../recoil/atom";

const ToDo = ({ toDos }:any) => {
  const categoryLabels = { TO_DO: "To Do", DOING: "Doing", DONE: "Done" };
  return (
    <ul>
      {toDos.map((toDo:IToDo) => {
        const { text, id, category } = toDo;
        return (
          <li key={id}>
            <div>{text}</div>
            <div>category: {category}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDo;
