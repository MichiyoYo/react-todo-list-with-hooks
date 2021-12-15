import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./TodoList";
const ListOfTasks = styled.ul`
  list-style-type: none;
  text-align: left;
  padding-left: 0;
`;

const DeleteBtn = styled.a`
  padding: 0;
  background: transparent;
  cursor: pointer;
`;

function TaskList(props) {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div>
      <p>
        You have {state.count} task{state.count !== 1 ? "s" : ""} left
      </p>

      <ListOfTasks className="taskItems">
        {state.taskListItems.map((task, index) => (
          <li key={index}>
            <DeleteBtn
              onClick={() => {
                dispatch({ type: "REMOVE_TASK", task: index });
              }}
            >
              &times;{" "}
            </DeleteBtn>
            {task}
          </li>
        ))}
      </ListOfTasks>
    </div>
  );
}

export default TaskList;
