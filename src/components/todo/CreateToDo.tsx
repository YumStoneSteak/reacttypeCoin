import { useRecoilState, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../../recoil/atom";
import { useForm, useWatch } from "react-hook-form";
import { IToDoForm, categories } from "../../interface/IToDo";
import styled from "styled-components";
import {
  FormButton,
  InputBox,
  Overview,
} from "../../style/GlobalStyleComponents";
import { useIntl } from "react-intl";

const ToDoform = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  select {
    width: 25%;
  }
  button {
    width: 100px;
  }
`;

const CategorySelect = styled.select`
  padding: 10px 15px;
  margin: 10px;
  border: 2px solid ${(props) => props.theme.cBorderColor};
  border-radius: 4px;
  color: #2f3640;
  background-color: #fceadfac;
`;

const CreateToDo = () => {
  const { formatMessage: msg } = useIntl();
  const setToDos = useSetRecoilState(toDoState);
  const [category, setCategory] = useRecoilState(categoryState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setFocus,
  } = useForm<IToDoForm>();

  const onSubmit = ({ toDo }: any) => {
    setToDos((prev) => [...prev, { text: toDo, id: Date.now(), category }]);
    setFocus("toDo");
    reset();
  };

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as categories);
  };

  return (
    <Overview>
      <ToDoform onSubmit={handleSubmit(onSubmit)}>
        <CategorySelect value={category} onInput={onInput}>
          <option value="TO_DO">{msg({ id: "todo" })}</option>
          <option value="DOING">{msg({ id: "doing" })}</option>
          <option value="DONE">{msg({ id: "done" })}</option>
        </CategorySelect>
        <InputBox
          hasContent={!!useWatch({ control, name: "toDo" })}
          error={!!errors.toDo}
        >
          <input
            type="text"
            {...register("toDo", {
              required: msg({ id: "no_to_do" }),
            })}
            id="toDo"
          />
          <label htmlFor="todo">{errors?.toDo?.message}</label>
        </InputBox>
        <FormButton>{msg({ id: "save" })}</FormButton>
      </ToDoform>
    </Overview>
  );
};

export default CreateToDo;
