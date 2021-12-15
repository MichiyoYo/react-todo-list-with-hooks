import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "./TodoList";
import styled from "styled-components";

const InputField = styled.input`
  background: transparent;
  padding: 10px;
  box-shadow: none;
  color: #fff;
  border: 0;
  font-size: 20px;
  border-bottom: 2px solid #fff;
  ::placeholder {
    color: #fff;
  }
`;

const AddBtn = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  margin-left: 15px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
`;

function TaskInput(props) {
  const { dispatch } = useContext(AppContext);

  const inputRef = useRef();

  useEffect(() => {
    //focus on the input every time the component re-renders after status update
    inputRef.current.focus();
    //clean up the field
    return () => {
      inputRef.current.value = "";
    };
  });

  return (
    <div>
      <h2>Cree's To-Do List</h2>
      <InputField type="text" placeholder="Add a task" ref={inputRef} />
      <AddBtn
        onClick={() => {
          dispatch({ type: "ADD_TASK", task: inputRef });
        }}
      >
        +
      </AddBtn>
    </div>
  );
}

export default TaskInput;
