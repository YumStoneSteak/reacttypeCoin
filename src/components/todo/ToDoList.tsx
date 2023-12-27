import IToDo from "../../interface/IToDo";
import { useRecoilValue } from "recoil";
import { toDoSelector } from "../../recoil/atom";
import ToDoView from "./ToDoView";
import { Title } from "../../style/GlobalStyleComponents";
import { useIntl } from "react-intl";

const ToDoList = () => {
  const { formatMessage: msg } = useIntl();
  const [toDos, Doings, Dones] = useRecoilValue(toDoSelector);

  const sections = [
    { title: "todo", id: "TO_DO", items: toDos },
    { title: "doing", id: "DOING", items: Doings },
    { title: "done", id: "DONE", items: Dones },
  ];

  return (
    <ul>
      {sections.map(({ title, id, items }) => (
        <li key={id}>
          <Title category={id}>{msg({ id: title })}</Title>
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
