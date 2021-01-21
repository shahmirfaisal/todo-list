export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.todo, ...state.todos],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: action.todos,
      };

    case "TOGGLE_COMPLETE_TODO":
      return {
        ...state,
        todos: action.todos,
      };

    case "DELETE_COMPLETED_TODOS":
      return {
        ...state,
        todos: action.todos,
      };

    case "FILTER_TODOS":
      return {
        ...state,
        filterOption: action.option,
      };

    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.theme,
      };

    case "SORT_TODOS":
      return {
        ...state,
        todos: action.todos,
      };

    default:
      return state;
  }
};
