import { createContext, FC } from "react";
import { TodoListContext } from "./todoListContext";

export const StoreContext = createContext<TodoListContext>(new TodoListContext());

export const StoreProvider: FC<{ store: TodoListContext }> = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};