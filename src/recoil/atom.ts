import { atom } from "recoil";
import IToDo from "../interface/IToDo";

export const isDarkAtom = atom({
  key: "isDarkMode",
  default: false,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
