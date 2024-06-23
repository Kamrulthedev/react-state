import { ReactNode, createContext } from "react";
import React from "react";

const todoContext = createContext(undefined);

type TodoProviderProps = {
  children : ReactNode;
}


const TodoProvider = ({children} : TodoProviderProps) => {

  const values = {
    todoTitle: "This is a TODO title",
  };
  return (
    <div>
      <todoContext.Provider value={values}>{children}</todoContext.Provider>
    </div>
  );
};

export default TodoProvider;
