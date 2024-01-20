import React, { createContext, useContext, useEffect } from "react";
import { todoDetailType, todoType } from "../types/todoType";
import { mockData } from "../mockData/mockTodos";

export const useTodos = () => {
  return useContext(TodoContext);
};

interface TodoProviderProps {
  children: React.ReactNode;
}

interface Values {
  todos: todoType;
  setTodos: React.Dispatch<React.SetStateAction<todoType>>;
  onEditing: todoDetailType | null;
  setOnEditing: React.Dispatch<React.SetStateAction<todoDetailType | null>>;
}

const storedTasks = localStorage.getItem("task");

const TodoContext = createContext<Values>({
  todos: storedTasks
    ? JSON.parse(storedTasks)
    : {
        daily: [],
        planned: [],
        personal: [],
        work: [],
        shopping: [],
        event: [],
      },
  setTodos: () => {},
  setOnEditing: () => {},
  onEditing: null,
});

const TodoProvider: React.FC<TodoProviderProps> = (props) => {
  const { children } = props;
  const [todos, setTodos] = React.useState<todoType>(
    storedTasks ? JSON.parse(storedTasks) : mockData
  );
  const [onEditing, setOnEditing] = React.useState<todoDetailType | null>(null);

  const saveTaskToLocal = () => {
    localStorage.setItem("task", JSON.stringify(todos));
  };

  useEffect(() => {
    saveTaskToLocal();
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, setTodos, onEditing, setOnEditing }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
