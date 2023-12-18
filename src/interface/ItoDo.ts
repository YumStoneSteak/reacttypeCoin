export default interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export interface IToDoForm {
  toDo: string;
}
