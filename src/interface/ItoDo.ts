export type categories = "TO_DO" | "DOING" | "DONE";

export default interface IToDo {
  text: string;
  id: number;
  category: categories;
}

export interface IToDoForm {
  toDo: string;
}
