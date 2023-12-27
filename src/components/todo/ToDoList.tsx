import IToDo from "../../interface/IToDo";
import { useRecoilValue } from "recoil";
import { toDoSelector } from "../../recoil/atom";
import ToDoView from "./ToDoView";
import { Title } from "../../style/GlobalStyleComponents";

const ToDoList = () => {
  const [toDos, Doings, Dones] = useRecoilValue(toDoSelector);

  const sections = [
    { title: "To Do", id: "TO_DO", items: toDos },
    { title: "Doing", id: "DOING", items: Doings },
    { title: "Done", id: "DONE", items: Dones },
  ];

  return (
    <ul>
      {sections.map(({ title, id, items }) => (
        <li key={id}>
          <Title category={id}>{title}</Title>
          <hr />
          {items.map((item: IToDo, index) => (
            <ToDoView key={item.id} index={index + 1} {...item} />
          ))}
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
