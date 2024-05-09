import { atom, selector } from "recoil";
import IToDo, { categories } from "../interface/IToDo";
import { ILocale } from "../interface/Icommon";
import { IMemo } from "../interface/IMemo";

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const localeState = atom<ILocale>({
  key: "locale",
  default: "ko",
});

export const isDarkAtom = atom({
  key: "isDarkMode",
  default: false,
  effects: [localStorageEffect("darkMode")],
});

export const categoryState = atom<categories>({
  key: "category",
  default: "TO_DO",
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects: [localStorageEffect("toDo")],
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

export const memoState = atom<IMemo[]>({
  key: "memo",
  default: {
    Default: ["go work", "go home", "love"],
    School: ["study hard", "go learn"],
    Work: ["Thinclient", "LG ConnectedCare", "KI bizmeka Crawling"],
    Home: ["sleep", "rest", "watch moive"],
  },
  effects: [localStorageEffect("memo")],
});
