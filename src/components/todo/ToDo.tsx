import { useRecoilState, useRecoilValue } from "recoil";
import { IForm } from "../../interface/ItoDo";
import { useForm } from "react-hook-form";
import { toDoState } from "../../recoil/atom";

const ToDo = () => {
  const toDos = useRecoilValue(toDoState);
  const categoryLabels = { TO_DO: "To Do", DOING: "Doing", DONE: "Done" };
  return (
    <ul>
      {toDos.map((toDo) => {
        const { text, id, category } = toDo;
        return (
          <li key={id}>
            {text}
            {Object.keys(categoryLabels)
              .filter((catKey) => catKey !== category) // Filter out the current category.
              .map((catKey) => (
                <button key={catKey}>{categoryLabels[catKey]}</button> // Use the label from categoryLabels.
              ))}
          </li>
        );
      })}
    </ul>
  );
};

export default ToDo;
