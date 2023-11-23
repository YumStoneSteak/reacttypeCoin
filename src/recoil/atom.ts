import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDarkMode",
  default: false,
});

interface IToDo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
