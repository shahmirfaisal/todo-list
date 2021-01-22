import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const Context = createContext();

const initialState = {
  todos: [],
  filterOption: "All",
  theme: "DARK",
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (todoName) => {
    const newTodo = {
      id: state.todos.length,
      name: todoName,
      isComplete: false,
    };
    dispatch({ type: "ADD_TODO", todo: newTodo });
  };

  const deleteTodo = (id) => {
    const newTodos = state.todos.filter((todo) => todo.id !== id);
    dispatch({ type: "DELETE_TODO", todos: newTodos });
  };

  const toggleCompleteTodo = (id, isComplete) => {
    const todos = [...state.todos];
    const index = todos.findIndex((todo) => todo.id === id);
    todos[index].isComplete = isComplete;
    dispatch({ type: "TOGGLE_COMPLETE_TODO", todos });
  };

  const deleteCompletedTodos = () => {
    const newTodos = state.todos.filter((todo) => !todo.isComplete);
    dispatch({ type: "DELETE_COMPLETED_TODOS", todos: newTodos });
  };

  const filterTodos = (option) => {
    dispatch({ type: "FILTER_TODOS", option });
  };

  const changeTheme = (theme) => {
    dispatch({ type: "CHANGE_THEME", theme });
  };

  const sortTodos = (sourceIndex, destinationIndex) => {
    const todos = [...state.todos];
    const [reorderedTodo] = todos.splice(sourceIndex, 1);
    todos.splice(destinationIndex, 0, reorderedTodo);
    dispatch({ type: "SORT_TODOS", todos });
  };

  return (
    <Context.Provider
      value={{
        addTodo,
        deleteTodo,
        deleteCompletedTodos,
        toggleCompleteTodo,
        state,
        filterTodos,
        changeTheme,
        sortTodos,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
