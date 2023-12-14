export default interface IToDo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

export interface IToDoForm {
  toDo: string;
}
