import { useSetRecoilState } from "recoil";
import { toDoState } from "../../recoil/atom";
import { useForm, useWatch } from "react-hook-form";
import { IToDoForm } from "../../interface/IToDo";
import styled from "styled-components";
import {
  FormButton,
  InputBox,
  Overview,
} from "../../style/GlobalStyleComponents";

const ToDoform = styled.form`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  &:first-child {
    width: 100%;
  }
  &:nth-child(2) {
    width: 100%;
  }
`;

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<IToDoForm>();

  const onSubmit = ({ toDo }: any) => {
    setToDos((prev) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...prev,
    ]);
    reset();
  };
  return (
    <Overview>
      <ToDoform onSubmit={handleSubmit(onSubmit)}>
        <InputBox
          hasContent={!!useWatch({ control, name: "toDo" })}
          error={!!errors.toDo}
        >
          <input
            type="text"
            {...register("toDo", {
              required: "Don't you have something to Do?",
            })}
            id="toDo"
          />
          <label htmlFor="todo">{errors?.toDo?.message ?? "To Do"}</label>
        </InputBox>
        <FormButton>Save</FormButton>
      </ToDoform>
    </Overview>
  );
};

export default CreateToDo;
