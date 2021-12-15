import React, { useReducer } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

export const AppContext = React.createContext();

function TodoList(props) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    taskListItems: [],
  });

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_TASK":
        return {
          count: state.count + 1,
          taskListItems: [...state.taskListItems, action.task.current.value],
        };
      case "REMOVE_TASK":
        let index = action.task;
        return {
          count: state.count - 1,
          taskListItems: [
            ...state.taskListItems.slice(0, index),
            ...state.taskListItems.slice(index + 1),
          ],
        };
      default:
        return state;
    }
  }

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <TaskInput />
      <TaskList />
    </AppContext.Provider>
  );
}

export default TodoList;
