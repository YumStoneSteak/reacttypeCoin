import { useRecoilState, useSetRecoilState } from "recoil";
import { toDoState } from "../../recoil/atom";
import { useForm } from "react-hook-form";
import { IForm } from "../../interface/ItoDo";


const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, watch, handleSubmit, setValue } = useForm<IForm>();

  const onSubmit = ({ toDo }: IForm) => {
    setToDos((prev) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...prev,
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Write a to do" {...register("toDo")} />
      <button>Add</button>
    </form>
  );
};

export default CreateToDo;