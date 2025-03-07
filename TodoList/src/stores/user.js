import { useState } from "react";
import { create } from "zustand";

const useUserStore = create((set) => ({
  userName: "",
  setUserName: (name) => set({ userName: name }),

  todolist: [],
  setTodolist: (newList) => set({ todolist: newList }),
  addList: (text) => {
    set((state) => {
      const newArr = [...state.todolist];
      newArr.push({ value: text, isDone: false });
      return { todolist: newArr };
    });
  },
  checkList: (i) => {
    set((state) => {
      const newArr = [...state.todolist];
      newArr[i].isDone = !newArr[i].isDone;
      return { todolist: newArr };
    });
  },
  deleteList: (i) => {
    set((state) => {
      const newArr = [...state.todolist].filter((v, w) => w != i);
      return { todolist: newArr };
    });
  },
}));

export { useUserStore };
