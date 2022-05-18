import React from "react";
import { RiCloseCircleLine, RiAlarmFill } from "react-icons/ri";

const Todo = ({ todos, completeTodo, removeTodo }) => {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
      style={{ cursor: "pointer" }}
    >
      <div key={todo.id}>{todo.text}</div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <RiAlarmFill onClick={() => completeTodo(todo.id)} className="tick" />
      </div>
    </div>
  ));
};

export default Todo;
