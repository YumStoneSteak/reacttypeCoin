import { atom, selector } from "recoil";
import IToDo from "../interface/IToDo";
import { ILocale } from "../interface/Icommon";

export const localeState = atom<ILocale>({
  key: "locale",
  default: "ko",
});

export const isDarkAtom = atom({
  key: "isDarkMode",
  default: false,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  },
});
