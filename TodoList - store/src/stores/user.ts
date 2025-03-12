import { create } from "zustand";

type Todo = {
  value: string,
  isDone: boolean,
};

type UserState = {
  userName: string,
  setUserName: (name: string) => void,
  todolist: Todo[],
  setTodolist: (newList: Todo[]) => void,
  addList: (text: string) => void,
  checkList: (i: number) => void,
  deleteList: (i: number) => void,
};

const useUserStore =
  create <
  UserState >
  ((set) => ({
    userName: "",
    setUserName: (name) => set({ userName: name }),

    todolist: [],
    setTodolist: (newList) => set({ todolist: newList }),

    addList: (text) => {
      set((state) => {
        const newArr = [...state.todolist];
        newArr.push({ value: text, isDone: false });
        localStorage.setItem(state.userName, JSON.stringify(newArr));
        return { todolist: newArr };
      });
    },

    checkList: (i) => {
      set((state) => {
        const newArr = [...state.todolist];
        newArr[i].isDone = !newArr[i].isDone;
        localStorage.setItem(state.userName, JSON.stringify(newArr));
        return { todolist: newArr };
      });
    },
    deleteList: (i) => {
      set((state) => {
        const newArr = [...state.todolist].filter((_, w) => w !== i);
        localStorage.setItem(state.userName, JSON.stringify(newArr));
        return { todolist: newArr };
      });
    },
  }));

export { useUserStore };
